import TypeWriter from "./TypeWriter";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {personalInfo.name}
        </h1>
        <TypeWriter />

        <p className="text-white/80 text-base md:text-lg mt-8 mb-12 blink-text max-w-xl mx-auto leading-relaxed">
          Passionate about coding, creating, and building amazing web experiences
          with modern technologies.
        </p>

        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all text-sm md:text-base"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
