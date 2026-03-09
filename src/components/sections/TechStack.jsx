import { motion } from "framer-motion";
import { useState } from "react";

// Boxicons brand icon mappings — using colored <i> elements
const skillConfig = {
  // Languages
  JavaScript: { icon: "bxl-javascript",  color: "#F7DF1E", bg: "#FEFCE8" },
  Java:        { icon: "bxl-java",        color: "#e76f00", bg: "#FFF7ED" },
  Python:      { icon: "bxl-python",      color: "#3776AB", bg: "#EFF6FF" },
  SQL:         { icon: "bx-data",         color: "#6366f1", bg: "#EEF2FF" },
  // Frontend
  HTML:          { icon: "bxl-html5",       color: "#E34F26", bg: "#FFF1F2" },
  CSS:           { icon: "bxl-css3",        color: "#1572B6", bg: "#EFF6FF" },
  "React.js":    { icon: "bxl-react",      color: "#61DAFB", bg: "#F0FFFE" },
  "Tailwind CSS":{ icon: "bxl-tailwind-css",color: "#38BDF8", bg: "#F0F9FF" },
  // Backend
  "Spring Boot": { icon: "bxl-spring-boot", color: "#6DB33F", bg: "#F0FDF4" },
  "REST APIs":   { icon: "bx-transfer",     color: "#0d9488", bg: "#F0FDFA" },
  // Databases
  MySQL:    { icon: "bxl-postgresql",  color: "#336791", bg: "#EFF6FF" },
  MongoDB:  { icon: "bxl-mongodb",    color: "#47A248", bg: "#F0FDF4" },
  Oracle:   { icon: "bxs-data",       color: "#F80000", bg: "#FFF1F2" },
  Firebase: { icon: "bxl-firebase",   color: "#FFCA28", bg: "#FEFCE8" },
  // Tools
  Git:            { icon: "bxl-git",           color: "#F05032", bg: "#FFF1F2" },
  Postman:        { icon: "bxl-play-store",     color: "#FF6C37", bg: "#FFF7ED" },
  "VS Code":      { icon: "bxl-visual-studio",  color: "#007ACC", bg: "#EFF6FF" },
  "IntelliJ IDEA":{ icon: "bxl-java",           color: "#FC801D", bg: "#FFF7ED" },
  Figma:          { icon: "bxl-figma",          color: "#A259FF", bg: "#FAF5FF" },
  "Gemini API":   { icon: "bxs-bot",            color: "#4285F4", bg: "#EFF6FF" },
};

const categoryConfig = {
  Languages: {
    gradient: "from-violet-500 to-purple-600",
    border: "border-violet-200",
    text: "text-violet-700",
    glow: "hover:shadow-violet-500/20",
    emoji: "bxl-javascript",
    label: "⌨️ Languages",
  },
  Frontend: {
    gradient: "from-blue-500 to-cyan-500",
    border: "border-blue-200",
    text: "text-blue-700",
    glow: "hover:shadow-blue-500/20",
    emoji: "bxl-react",
    label: "🖥️ Frontend",
  },
  Backend: {
    gradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-200",
    text: "text-emerald-700",
    glow: "hover:shadow-emerald-500/20",
    emoji: "bxl-spring-boot",
    label: "⚙️ Backend",
  },
  Databases: {
    gradient: "from-orange-500 to-amber-500",
    border: "border-orange-200",
    text: "text-orange-700",
    glow: "hover:shadow-orange-500/20",
    emoji: "bxl-mongodb",
    label: "🗄️ Databases",
  },
  Tools: {
    gradient: "from-rose-500 to-pink-500",
    border: "border-rose-200",
    text: "text-rose-700",
    glow: "hover:shadow-rose-500/20",
    emoji: "bxl-git",
    label: "🛠️ Tools",
  },
};

const categories = [
  { title: "Languages", skills: ["JavaScript", "Java", "Python", "SQL"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Spring Boot", "REST APIs"] },
  { title: "Databases", skills: ["MySQL", "MongoDB", "Oracle", "Firebase"] },
  { title: "Tools", skills: ["Git", "Postman", "VS Code", "IntelliJ IDEA", "Figma", "Gemini API"] },
];

function SkillBadge({ skill, catConfig, index }) {
  const sc = skillConfig[skill] || { icon: "bx-code", color: "#0d9488", bg: "#f0fdfa" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.1, y: -4, rotate: [0, -3, 3, 0], transition: { type: "spring", stiffness: 400, damping: 12 } }}
      className="flex flex-col items-center gap-2 cursor-default group"
      title={skill}
    >
      {/* Icon circle */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        style={{ backgroundColor: sc.bg, border: `2px solid ${sc.color}22` }}
      >
        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at center, ${sc.color}22, transparent 70%)` }}
        />
        <i
          className={`bx ${sc.icon} text-3xl transition-transform duration-300 group-hover:scale-110`}
          style={{ color: sc.color }}
        />
      </div>
      {/* Label */}
      <span className="text-xs font-semibold text-slate-600 text-center leading-tight max-w-[70px]">{skill}</span>
    </motion.div>
  );
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null);
  const displayCategories = activeCategory
    ? categories.filter(c => c.title === activeCategory)
    : categories;

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(160deg, #f8fafc 0%, #f0f9ff 40%, #fdf4ff 100%)" }}>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            🚀 Tech Arsenal
          </motion.span>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Technologies &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">Tools</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            My versatile toolkit for building blazing-fast, production-ready applications.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === null
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
            }`}
          >
            All
          </button>
          {categories.map(cat => {
            const cfg = categoryConfig[cat.title];
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                  activeCategory === cat.title
                    ? `bg-gradient-to-r ${cfg.gradient} text-white shadow-lg border-transparent`
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cfg.label}
              </button>
            );
          })}
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category, catIndex) => {
            const cfg = categoryConfig[category.title];
            return (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.07 }}
                className={`group relative bg-white rounded-3xl border-2 ${cfg.border} p-8 ${cfg.glow} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow-lg`}>
                    <i className={`bx ${cfg.emoji} text-2xl text-white`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                    <p className={`text-xs font-medium ${cfg.text}`}>{category.skills.length} technologies</p>
                  </div>
                  <div className={`ml-auto w-8 h-8 rounded-full bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow`}>
                    <span className="text-white text-xs font-bold">{category.skills.length}</span>
                  </div>
                </div>

                {/* Skill Icons Grid */}
                <div className="flex flex-wrap gap-5">
                  {category.skills.map((skill, si) => (
                    <SkillBadge key={skill} skill={skill} catConfig={cfg} index={catIndex * 6 + si} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { label: "Languages", value: "4+", icon: "bxl-javascript" },
            { label: "Frameworks", value: "6+", icon: "bxl-react" },
            { label: "Databases", value: "4",  icon: "bxl-mongodb" },
            { label: "Years Coding", value: "3+", icon: "bx-code-alt" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 cursor-default"
            >
              <i className={`bx ${stat.icon} text-4xl text-primary-500 mb-2 block`} />
              <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
