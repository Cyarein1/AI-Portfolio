export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20">
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          Full-Stack Software Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
          I build full-stack products with clean interfaces, strong backend
          logic, and practical AI workflows.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I’m Siyabonga Mthethwa, a developer based in Durban, South Africa. I
          work with React, TypeScript, Node.js, PostgreSQL, and APIs to build
          real web applications from idea to deployment.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View My Work
          </a>

          <a
            href="#ai-guide"
            className="rounded-full border border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
          >
            Let AI Siyabonga Guide Me
          </a>
        </div>
      </div>
    </section>
  );
}
