import { motion } from "framer-motion";
import { Layout, Lightbulb, Server, Smartphone } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Full Stack Development",
      description: "End-to-end application development with modern frameworks.",
      icon: <Layout className="text-primary-500" size={32} />,
      color: "from-primary-500 to-teal-600",
      bg: "bg-primary-50",
    },
    {
      title: "Scalable Web Apps",
      description: "Building resilient architectures for high traffic.",
      icon: <Server className="text-blue-500" size={32} />,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      title: "AI Integration",
      description: "Leveraging LLMs and AI to power smart features.",
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      color: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-50",
    },
    {
      title: "Performance Optimization",
      description: "Fast loading times and smooth user experiences.",
      icon: <Smartphone className="text-purple-500" size={32} />,
      color: "from-purple-500 to-violet-600",
      bg: "bg-purple-50",
    },
  ];

  const stats = [
    { value: "3+", label: "Years Coding" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Tech Stacks" },
    { value: "1", label: "AI Certification" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f0fdfa 60%, #f8fafc 100%)'}}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)', filter: 'blur(80px)'}} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-20" style={{background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(60px)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            👋 Who I Am
          </motion.span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            I am specializing in Full Stack Development with expertise in modern frontend and backend 
            technologies including React, Java, Spring Boot, REST APIs, and AI integrations. Passionate 
            about building scalable applications with clean architecture and optimized performance.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-400 relative overflow-hidden cursor-default"
              whileHover={{ y: -6 }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`mb-6 p-4 ${card.bg} rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
