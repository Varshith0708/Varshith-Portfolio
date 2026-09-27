import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { QuickStats } from './components/QuickStats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Leadership } from './components/Leadership';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { HowIBuild } from './components/HowIBuild';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { ProjectItem } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNotify = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#171717] font-sans">
      <Navbar onNotify={handleNotify} />
      
      <main>
        <Hero onNotify={handleNotify} />
        <QuickStats />
        <About />
        <Skills />
        <Experience />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <Education />
        <Certifications />
        <Achievements />
        <Leadership />
        <CurrentlyExploring />
        <HowIBuild />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
