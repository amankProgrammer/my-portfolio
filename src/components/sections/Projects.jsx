import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Pahadi Store",
      subtitle: "Himalayan Ecommerce App",
      description: "Ecommerce web application showcasing authentic Himalayan products with structured catalog browsing and AI product guidance.",
      link: "https://pahadi-store-app.vercel.app/",
      tech: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      imageBg: "bg-gradient-to-br from-orange-100 to-red-100",
    },
    {
      title: "Book Uttarakhand",
      subtitle: "Travel Booking Platform",
      description: "Responsive tourism platform showcasing destinations across Uttarakhand with scalable component architecture.",
      link: "https://book-uttarakhand.vercel.app/",
      tech: ["React", "JavaScript", "REST APIs", "Framer Motion"],
      imageBg: "bg-gradient-to-br from-teal-100 to-emerald-100",
    },
    {
      title: "Corbett Bakers",
      subtitle: "Ecommerce Bakery App",
      description: "High-performance ecommerce application with optimized UI, JWT-secured admin dashboard, and WhatsApp-based checkout system.",
      link: "https://corbett-bakers.vercel.app/",
      tech: ["React", "JavaScript", "REST APIs", "JWT"],
      imageBg: "bg-gradient-to-br from-amber-100 to-yellow-200",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of some of my recent work in building scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Image/Preview Area */}
              <div className={`h-48 w-full ${project.imageBg} relative overflow-hidden flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-500`}>
                <img 
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`} 
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg" aria-label="Source Code">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-primary-600 font-medium text-sm mb-2">{project.subtitle}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
