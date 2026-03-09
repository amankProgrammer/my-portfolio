import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, X, Sparkles, MessageCircle, Bot, User } from 'lucide-react';


// ─── Portfolio context for Gemini system prompt ─────────────────────────────
const SYSTEM_PROMPT = `You are "Amank's AI Assistant" — a smart, friendly chatbot embedded in the portfolio of Amank Lingwal, a Full Stack Developer.

Your job is to answer visitor questions about Amank in a concise, engaging, professional way.
Always be helpful, warm, and conversational. Keep answers short (2-4 sentences) unless more detail is asked.

═══════════════ AMANK'S INFO ═══════════════
Name: Amank Lingwal
Title: Full Stack Developer
Location: India
GitHub: https://github.com/amankProgrammer
LinkedIn: http://www.linkedin.com/in/amank-lingwal

SKILLS:
- Languages: JavaScript, Java, Python, SQL
- Frontend: HTML, CSS, React.js, Tailwind CSS
- Backend: Spring Boot, REST APIs
- Databases: MySQL, MongoDB, Oracle, Firebase
- Tools: Git, Postman, VS Code, IntelliJ IDEA, Figma, Gemini API

PROJECTS:
1. Pahadi Store — Himalayan Ecommerce app showcasing authentic products. Built with React, REST APIs, Tailwind CSS. Live: https://pahadi-store-app.vercel.app/
2. Book Uttarakhand — Tourism and travel booking platform with responsive design. Built with React, Framer Motion. Live: https://book-uttarakhand.vercel.app/
3. Corbett Bakers — Ecommerce bakery app with JWT-secured admin dashboard and WhatsApp checkout. Built with React, JWT, REST APIs. Live: https://corbett-bakers.vercel.app/

EXPERIENCE / JOURNEY:
- 2023: Started MCA program, dived into advanced full stack development combining Java backends with React frontends.
- 2024: Built production web apps (Pahadi Store, Book Uttarakhand). Completed Salesforce AI Associate Certification.
- 2025: Focused on scalable backend architecture and AI integrations using Gemini API.

CERTIFICATIONS:
- Salesforce AI Associate Certification (2024)

AVAILABILITY: Open to freelance opportunities and full-time roles.

═══════════════ GUIDELINES ═══════════════
- If asked about contact: direct them to LinkedIn or GitHub above.
- If asked something unrelated to Amank or tech, politely redirect: "I'm here specifically to talk about Amank's work. Anything about his skills or projects I can help with?"
- Never make up information not listed above.
- Use emojis occasionally to be friendly but keep it professional.
- Sign off creative responses with "— By Amank's AI 🤖" sometimes.`;

// ─── Gemini API helper ───────────────────────────────────────────────────────
// ─── Gemini API helper (Direct Fetch) ───────────────────────────────────────
async function askGemini(userMessage, history) {
  const rawKey = import.meta.env.VITE_GEMINI_API_KEY;
  const apiKey = rawKey?.trim();
  
  if (!apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.includes('your_')) {
    throw new Error('CONFIG_ERROR');
  }

  // Format history for the API
  const contents = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: "Got it! I'm Amank's AI assistant. I'll answer questions about his portfolio, skills, and projects. How can I help you?" }] },
    ...history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    })),
    { role: 'user', parts: [{ text: userMessage }] }
  ];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
  
  // Use a masked key for logging to protect the full key
  const maskedKey = apiKey.substring(0, 3) + "..." + apiKey.substring(apiKey.length - 3);
  console.log("Chatbot: Calling Gemini 3 API...", maskedKey);

  const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents })
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Gemini API Error:", errorData);
    throw new Error(errorData.error?.message || `API_ERROR_${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";
}

// ─── Typing indicator ────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 justify-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
        <Bot size={16} className="text-white" />
      </div>
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-bl-sm px-5 py-4">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Message bubble ──────────────────────────────────────────────────────────
function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <Bot size={16} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-br-sm shadow-md'
            : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm shadow-sm'
        }`}
      >
        {message.text}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
          <User size={16} className="text-slate-600" />
        </div>
      )}
    </motion.div>
  );
}

// ─── Main Chatbot ────────────────────────────────────────────────────────────
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! 👋 I'm Amank's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');

    const userMsg = { role: 'user', text };
    const history = messages.filter(m => m.role !== 'error');
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const reply = await askGemini(text, history);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      if (err.message === 'CONFIG_ERROR') {
        setMessages(prev => [...prev, { role: 'assistant', text: "⚠️ API Key not found. Please restart your server after adding the key to the .env file!" }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: "Oops! Something went wrong connecting to the AI. Please try again in a moment 🙏" }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const suggestions = ["What are Amank's skills?", "Tell me about Pahadi Store", "Is Amank available to hire?"];

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="fixed bottom-24 right-5 sm:right-8 z-50 w-[370px] sm:w-[400px] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20"
            style={{ height: '560px', maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-5 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Amank's AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-white/70 text-xs">Powered by Gemini 3</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions (shown when only the greeting is there) */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50 flex flex-wrap gap-2 border-t border-slate-100 flex-shrink-0">
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => { setInput(s); setTimeout(sendMessage, 0); setInput(s); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-primary-200 bg-white text-primary-700 hover:bg-primary-50 transition-colors font-medium"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-4 bg-white border-t border-slate-100 flex-shrink-0">
              <div className="flex gap-3 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects..."
                  rows={1}
                  className="flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-500/10 transition-all max-h-32 overflow-y-auto"
                  style={{ lineHeight: '1.5' }}
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-11 h-11 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity flex-shrink-0"
                >
                  <Send size={17} className="text-white" style={{ transform: 'translateX(1px)' }} />
                </motion.button>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-2">Powered by Gemini 3 Flash Preview · AI can make mistakes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-5 right-5 sm:right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={isOpen ? { rotate: 0 } : { rotate: [0, -10, 10, 0] }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity, repeatDelay: 4 }}
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Ping ring on button when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20" />
        )}
      </motion.button>
    </>
  );
}
