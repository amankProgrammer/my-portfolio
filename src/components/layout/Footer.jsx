import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/amankProgrammer", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "http://www.linkedin.com/in/amank-lingwal", name: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:contact@amank.dev", name: "Email" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-600 font-medium">
            © {currentYear} Amank Lingwal — Full Stack Developer
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-slate-400 hover:text-primary-600 hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
