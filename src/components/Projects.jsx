import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaTimes,
  FaSave,
} from "react-icons/fa";
import { projects as defaultProjects, emptyProject } from "../data/portfolioData";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css?url";

const STORAGE_KEY = "portfolio-custom-projects";
const BOOTSTRAP_STYLE_ID = "bootstrap-form-styles";

function loadCustomProjects() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCustomProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export default function Projects() {
  const [customProjects, setCustomProjects] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({ ...emptyProject });

  useEffect(() => {
    setCustomProjects(loadCustomProjects());
  }, []);

  useEffect(() => {
    if (!showForm) {
      document.getElementById(BOOTSTRAP_STYLE_ID)?.remove();
      return;
    }

    if (!document.getElementById(BOOTSTRAP_STYLE_ID)) {
      const link = document.createElement("link");
      link.id = BOOTSTRAP_STYLE_ID;
      link.rel = "stylesheet";
      link.href = bootstrapCss;
      document.head.appendChild(link);
    }

    return () => document.getElementById(BOOTSTRAP_STYLE_ID)?.remove();
  }, [showForm]);

  const allProjects = [...defaultProjects, ...customProjects];
  const project = allProjects[current] || allProjects[0];

  const prev = () =>
    setCurrent((c) => (c === 0 ? allProjects.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === allProjects.length - 1 ? 0 : c + 1));

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const projectToAdd = {
      title: newProject.title.trim(),
      description: newProject.description.trim(),
      technologies: newProject.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      github: newProject.github.trim() || "#",
      live: newProject.live.trim() || "#",
      highlights: newProject.highlights
        .split("\n")
        .map((h) => h.trim())
        .filter(Boolean),
    };

    const updated = [...customProjects, projectToAdd];
    setCustomProjects(updated);
    saveCustomProjects(updated);
    setNewProject({ ...emptyProject });
    setShowForm(false);
    setCurrent(defaultProjects.length + updated.length - 1);
  };

  if (!project) return null;

  return (
    <section id="projects" className="section-light min-h-screen py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="section-title">Projects</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showForm ? <FaTimes size={12} /> : <FaPlus size={12} />}
            {showForm ? "Cancel" : "Add New Project"}
          </button>
        </div>
        <div className="section-underline" />

        {showForm && (
          <div className="card border-0 shadow-lg mt-4 mb-4 overflow-hidden">
            <div
              className="card-header d-flex justify-content-between align-items-center py-3 border-0"
              style={{
                background: "linear-gradient(135deg, #000000 0%, #0a1628 50%, #1e40af 100%)",
              }}
            >
              <h5 className="mb-0 text-white fw-semibold d-flex align-items-center gap-2">
                <FaPlus size={14} />
                Add a New Project
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32 }}
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                <FaTimes size={12} />
              </button>
            </div>

            <div className="card-body p-4 p-md-5" style={{ backgroundColor: "#f0f4f8" }}>
              <form onSubmit={handleAddProject}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">
                      Project Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control form-control-lg shadow-sm"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="My Awesome Project"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">
                      Technologies <small className="text-muted fw-normal">(comma separated)</small>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark">Description</label>
                    <textarea
                      rows={3}
                      className="form-control shadow-sm"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      placeholder="Describe your project..."
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">GitHub URL</label>
                    <input
                      type="url"
                      className="form-control shadow-sm"
                      value={newProject.github}
                      onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">Live Demo URL</label>
                    <input
                      type="url"
                      className="form-control shadow-sm"
                      value={newProject.live}
                      onChange={(e) => setNewProject({ ...newProject, live: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark">
                      Highlights <small className="text-muted fw-normal">(one per line)</small>
                    </label>
                    <textarea
                      rows={3}
                      className="form-control shadow-sm"
                      value={newProject.highlights}
                      onChange={(e) => setNewProject({ ...newProject, highlights: e.target.value })}
                      placeholder={"Built responsive UI\nDeployed on Vercel"}
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-4 pt-2 border-top">
                  <button type="submit" className="btn btn-primary px-4 d-flex align-items-center gap-2">
                    <FaSave size={13} />
                    Save Project
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="relative mt-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-28 md:h-32 bg-gradient-to-br from-black via-[#0a1628] to-blue-800 flex items-center justify-center px-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-blue-600/80 border border-blue-400/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <p className="text-blue-200/80 text-xs md:text-sm">
                  {project.technologies.join(" • ")}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>

              {project.highlights?.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-blue-600 mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-200 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-lg text-white text-sm hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {allProjects.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Next project"
              >
                <FaChevronRight />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {allProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
