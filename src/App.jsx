import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Projects } from './components/sections/Projects'
import { Timeline } from './components/sections/Timeline'
import { CodolioGithub } from './components/sections/CodolioGithub'
import { Contact } from './components/sections/Contact'
import { Chatbot } from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900" style={{background: '#f8fafc'}}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Timeline />
        <CodolioGithub />
        <Contact />
      </main>
      <Footer />
      {/* Floating AI Chatbot */}
      <Chatbot />
    </div>
  )
}

export default App
