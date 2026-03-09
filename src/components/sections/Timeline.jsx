import { motion } from "framer-motion";

export function Timeline() {
  const experiences = [
    {
      year: "2025",
      title: "Backend Architecture & AI Integration",
      description: "Focused on scalable backend architecture and integrating AI solutions like Gemini API into full stack applications.",
    },
    {
      year: "2024",
      title: "Production Web Applications",
      description: "Built production-level web applications including ecommerce and travel booking platforms. Completed Salesforce AI Associate Certification.",
    },
    {
      year: "2023",
      title: "Advanced Full Stack Development",
      description: "Started MCA program and dived deep into advanced full stack development combining Java backends with modern React frontends.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">My Journey</h2>
          <p className="text-lg text-slate-600">
            A timeline of my continuous learning and professional growth.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={exp.year} className={`relative flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group`}>
              
              {/* Desktop Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-primary-100 items-center justify-center z-10 group-hover:bg-primary-500 transition-colors duration-300 shadow-md">
                <div className="w-3 h-3 bg-primary-600 rounded-full group-hover:bg-white" />
              </div>

              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute -left-[27px] mt-1.5 w-5 h-5 rounded-full border-4 border-white bg-primary-500 z-10 shadow-sm" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 relative group-hover:-translate-y-1"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{exp.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
