import { ParticlesBg } from "./components/ParticlesBg";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { ContactFooter } from "./components/ContactFooter";

export function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <ParticlesBg />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="neon-line mx-auto w-2/3 opacity-20" />
        <AboutMe />
        <div className="neon-line mx-auto w-2/3 opacity-20" />
        <Projects />
        <div className="neon-line mx-auto w-2/3 opacity-20" />
      </main>
      <div className="relative z-10">
        <ContactFooter />
      </div>
    </div>
  );
}
