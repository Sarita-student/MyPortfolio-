import { useState } from "react";

import { FaChevronDown, FaGraduationCap, FaTrophy } from "react-icons/fa";

import { experience, education, achievements } from "../data/portfolioData";



export default function Experience() {

  const [openIndex, setOpenIndex] = useState(0);



  const accordionItems = [

    {

      title: "Experience",

      icon: FaGraduationCap,

      content: (

        <div>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">

            {experience.title}

          </h4>

          <p className="text-gray-600 leading-relaxed">{experience.description}</p>

        </div>

      ),

    },

    {

      title: "Education",

      icon: FaGraduationCap,

      content: (

        <div className="space-y-4">

          {education.map((edu) => (

            <div

              key={edu.degree}

              className="flex justify-between items-start border-b border-gray-200 pb-3 last:border-0"

            >

              <div>

                <p className="text-gray-800 font-medium">{edu.degree}</p>

                <p className="text-gray-500 text-sm">{edu.institution}</p>

              </div>

              <span className="text-blue-600 text-sm">{edu.year}</span>

            </div>

          ))}

        </div>

      ),

    },

    {

      title: "Achievements",

      icon: FaTrophy,

      content: (

        <ul className="space-y-3">

          {achievements.map((item) => (

            <li key={item} className="flex items-start gap-2 text-gray-600">

              <span className="text-yellow-500 mt-1">★</span>

              {item}

            </li>

          ))}

        </ul>

      ),

    },

  ];



  return (

    <section id="experience" className="section-light min-h-screen py-20 px-6 md:px-12 lg:px-16">

      <div className="max-w-5xl mx-auto">

        <h2 className="section-title">Resume</h2>

        <div className="section-underline" />



        <div className="space-y-3 mt-4">

          {accordionItems.map((item, index) => {

            const Icon = item.icon;

            const isOpen = openIndex === index;

            return (

              <div

                key={item.title}

                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"

              >

                <button

                  onClick={() => setOpenIndex(isOpen ? -1 : index)}

                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"

                >

                  <div className="flex items-center gap-3">

                    <Icon className="text-blue-600" />

                    <span className="text-gray-800 font-semibold">{item.title}</span>

                  </div>

                  <FaChevronDown

                    className={`text-gray-400 transition-transform ${

                      isOpen ? "rotate-180" : ""

                    }`}

                  />

                </button>

                {isOpen && (

                  <div className="px-5 pb-5 border-t border-gray-200 pt-4">

                    {item.content}

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

