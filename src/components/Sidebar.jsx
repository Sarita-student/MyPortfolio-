import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHome,
  FaUser,
  FaTh,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { personalInfo, navLinks, projects } from "../data/portfolioData";

const iconMap = {
  home: FaHome,
  about: FaUser,
  skills: FaTh,
  projects: FaFileAlt,
  experience: FaFileAlt,
  contact: FaEnvelope,
};

export default function Sidebar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const sidebarContent = (
    <>
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-blue-600 border border-blue-500/40 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
          {personalInfo.shortName.charAt(0)}
        </div>
        <h2 className="text-xl font-bold text-white">
          I am {personalInfo.shortName}
        </h2>
      </div>

      <div className="flex gap-3 mb-8 justify-center">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-black/40 border border-blue-500/30 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-600/40 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-black/40 border border-blue-500/30 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-600/40 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={14} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="w-9 h-9 rounded-full bg-black/40 border border-blue-500/30 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-600/40 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={14} />
        </a>
      </div>

      <a
        href={projects[0]?.live || "#projects"}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center border border-green-500 text-green-500 rounded-md py-2.5 px-4 text-sm hover:bg-green-500/10 transition-colors mb-10"
      >
        Check out my projects
      </a>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const Icon = iconMap[link.id] || FaHome;
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "text-blue-300 bg-blue-600/20 border border-blue-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="text-xs text-gray-500 mt-auto pt-6 text-center">
        Made with <span className="text-red-400">♥</span> by Sarita
      </p>
    </>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-black border border-blue-500/30 rounded-lg flex items-center justify-center text-white"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen border-r border-blue-900/40 flex flex-col p-6 transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          background: "linear-gradient(180deg, #000000 0%, #0a1628 50%, #1e3a8a 100%)",
        }}
      >
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
