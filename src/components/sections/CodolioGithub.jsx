import { motion } from "framer-motion";
import { BookOpen, Code, ExternalLink, Github, GitPullRequest, Star } from "lucide-react";

export function CodolioGithub() {
  const repos = [
    { name: "pahadi-store", desc: "Himalayan ecommerce application", stars: 12, forks: 4, lang: "JavaScript" },
    { name: "book-uttarakhand", desc: "Travel booking platform", stars: 8, forks: 2, lang: "JavaScript" },
    { name: "spring-boot-api", desc: "Robust REST API template", stars: 15, forks: 5, lang: "Java" },
    { name: "ai-portfolio", desc: "Modern animated portfolio", stars: 24, forks: 6, lang: "JavaScript" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Codolio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Coding Profile</h2>
              <p className="text-slate-600 text-lg">
                Tracking my progress and problem-solving skills across various platforms.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <motion.div 
                className="relative glass-card rounded-3xl p-2 sm:p-4 overflow-hidden border border-white/40 group-hover:border-white/60 transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass reflections */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                
                <div className="w-full rounded-2xl overflow-hidden" style={{height: '520px'}}>
                  <iframe 
                    src="https://codolio.com/profile/akProgrammer/card" 
                    title="Codolio Profile" 
                    style={{width: '100%', height: '800px', border: 'none', transform: 'scale(0.65)', transformOrigin: 'top left', marginBottom: '-280px'}}
                    scrolling="no"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Github className="text-slate-800" size={32} />
                  GitHub Activity
                </h2>
                <p className="text-slate-600 text-lg">
                  Open source contributions and project repositories.
                </p>
              </div>
              <a href="https://github.com/amankProgrammer" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 hover:underline">
                View Profile <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/amankProgrammer/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all"
                >
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-2 truncate group">
                    <BookOpen size={16} className="text-slate-500" />
                    <span className="truncate hover:text-primary-600 transition-colors">{repo.name}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 min-h-[32px]">{repo.desc}</p>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${repo.lang === 'JavaScript' ? 'bg-yellow-400' : 'bg-orange-500'}`}></div>
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 hover:text-yellow-500 transition-colors">
                      <Star size={14} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 hover:text-blue-500 transition-colors">
                      <GitPullRequest size={14} /> {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
