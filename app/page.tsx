import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModuleAccess from './components/ModuleAccess';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import TechSpecs from './components/TechSpecs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <TechSpecs />
        <ModuleAccess />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}