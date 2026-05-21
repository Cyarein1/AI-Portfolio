const contactLinks = [
  {
    label: "Email",
    value: "cyarein@gmail.com",
    href: "mailto:cyarein@gmail.com",
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/Cyarein1",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/cyarein",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
          If you’re building serious software, I’d be happy to talk.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I’m open to full-stack, backend, frontend, and AI-powered product
          development roles where I can build, learn, and contribute properly.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-blue-400/50"
            >
              <p className="text-sm text-zinc-500">{link.label}</p>
              <p className="mt-2 font-medium text-white">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}