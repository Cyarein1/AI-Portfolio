const projects = [
  {
    title: "Skolo",
    description:
      "An AI-powered education platform designed to help teachers manage learners, assignments, results, and concept mastery.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AI"],
    status: "Flagship Project",
  },
  {
    title: "AI Portfolio",
    description:
      "An interactive portfolio that lets recruiters explore my work normally or ask an AI guide about my skills and projects.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    status: "In Progress",
  },
  {
    title: "GitHub Trends Dashboard",
    description:
      "A dashboard that tracks trending GitHub repositories and turns raw developer data into useful insights.",
    stack: ["Next.js", "API Integration", "Data Visualization"],
    status: "Live Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
          Projects
        </p>

        <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Projects that show how I think, build, and solve real problems.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.06]"
            >
              <div>
                <span className="text-sm text-blue-400">{project.status}</span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  className="text-sm font-medium text-white transition hover:text-blue-400"
                >
                  Case Study →
                </a>

                <a
                  href="#"
                  className="text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}