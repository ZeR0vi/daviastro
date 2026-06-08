import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import FormulaTicker from "../components/FormulaTicker";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Research from "../components/Research";
import Skills from "../components/Skills";

export default function Perfil() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] text-zinc-300 selection:bg-blue-400/20">
      {/* Starfield */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(200,220,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 42%, rgba(200,220,255,0.3) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 8%, rgba(200,220,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 70%, rgba(200,220,255,0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 30%, rgba(200,220,255,0.35) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 82% 55%, rgba(200,220,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 20%, rgba(200,220,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 80%, rgba(200,220,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 90%, rgba(200,220,255,0.25) 0%, transparent 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(76,175,110,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76,175,110,0.012) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FormulaTicker />
        <About />
        <Education />
        <Research />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
