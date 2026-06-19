import { FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const details = [
    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: "Contact", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { label: "Degree", value: personalInfo.degree },
    { label: "University", value: personalInfo.university },
  ];

  return (
    <section id="about" className="section-light min-h-screen py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About</h2>
        <div className="section-underline" />

        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          {personalInfo.aboutIntro}{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <FaLinkedinIn size={14} />
            LinkedIn Account
          </a>
        </p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white border-2 border-blue-200 shadow-lg flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-32 h-32">
                <defs>
                  <linearGradient id="aboutPersonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="55%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="35" r="18" fill="url(#aboutPersonGradient)" />
                <ellipse cx="50" cy="80" rx="30" ry="22" fill="url(#aboutPersonGradient)" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {personalInfo.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4">Personal Details</h4>
            <ul className="space-y-3">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>
                    <strong>{item.label}:</strong>{" "}
                    {item.href ? (
                      <a href={item.href} className="text-blue-600 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
