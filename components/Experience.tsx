const experiences = [
  {
    role: "Web Development Intern",
    company: "BBD x Umuzi",
    period: "Feb 2025 - Jan 2026",
    points: [
      "Built full-stack applications using React, Material UI, Redux, PostgreSQL, Python, JavaScript, and SQL.",
      "Diagnosed and resolved production bugs under tight deadlines.",
      "Reviewed colleagues’ GitHub pull requests and provided feedback to improve code quality.",
    ],
  },
  {
    role: "Web Developer",
    company: "Marketing Fridays",
    period: "Jul 2024 - Aug 2025",
    points: [
      "Revamped a company website using PHP, HTML, CSS, and SQL.",
      "Built an accessible dashboard with drag-and-drop tools and integrated analytics.",
      "Handled design, development, and deployment work for real business needs.",
    ],
  },
  {
    role: "AI Prompt Engineer",
    company: "Outlier",
    period: "Oct 2024 - Feb 2025",
    points: [
      "Engineered prompts for different AI models.",
      "Evaluated and improved model responses for accuracy and usefulness.",
      "Worked with AI workflows, error detection, and response comparison.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
          Experience
        </p>

        <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Real-world experience building, debugging, reviewing, and shipping
          software.
        </h2>

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-zinc-400">{experience.company}</p>
                </div>

                <p className="text-sm text-blue-400">{experience.period}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}