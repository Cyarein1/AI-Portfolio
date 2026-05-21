const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend Engineering",
    skills: ["Node.js", "Express", "REST APIs", "API Integration"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL", "Database Design"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Docker", "npm", "Deployment"],
  },
  {
    title: "AI & Automation",
    skills: ["OpenAI API", "Prompt Engineering", "AI Workflows"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
          The tools I use to build complete products, not just screens.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/50 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}