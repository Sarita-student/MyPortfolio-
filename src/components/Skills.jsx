import { skillsWithProgress } from "../data/portfolioData";

export default function Skills() {
  const midpoint = Math.ceil(skillsWithProgress.length / 2);
  const leftSkills = skillsWithProgress.slice(0, midpoint);
  const rightSkills = skillsWithProgress.slice(midpoint);

  const SkillBar = ({ name, level }) => (
    <div className="mb-5">
      <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide mb-2">
        {name}
      </p>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-light min-h-screen py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="section-underline" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mt-4">
          <div>
            {leftSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div>
            {rightSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
