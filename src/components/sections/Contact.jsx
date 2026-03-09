import { motion } from "framer-motion";
import { Download, FileText, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f0fdfa 50%, #eff6ff 100%)'}}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Available for freelance opportunities and full-time roles. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          
          {/* Resume & Info Section */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Resume Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
              
              <FileText size={40} className="text-primary-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Resume</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Download my full resume for a detailed look at my experience, education, and technical skills.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-primary-500 rounded-full inline-block"></span>
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <a href="http://www.linkedin.com/in/amank-lingwal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary-600 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-200 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors">
                    <Mail size={20} className="text-slate-500 group-hover:text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email / Social</p>
                    <p className="font-semibold text-slate-800">amank-lingwal on LinkedIn</p>
                  </div>
                </a>
                
                <a href="https://github.com/amankProgrammer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary-600 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-200 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors">
                    <Github size={20} className="text-slate-500 group-hover:text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">GitHub</p>
                    <p className="font-semibold text-slate-800">amankProgrammer</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 ring-primary-500/10 transition-all outline-none text-slate-800"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 ring-primary-500/10 transition-all outline-none text-slate-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 ml-1">Message</label>
                <textarea 
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 ring-primary-500/10 transition-all outline-none text-slate-800 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ${
                  isSubmitted 
                    ? "bg-green-500 shadow-green-500/30" 
                    : "bg-primary-600 hover:bg-primary-700 shadow-primary-500/30 hover:shadow-primary-500/50"
                }`}
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-1" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
