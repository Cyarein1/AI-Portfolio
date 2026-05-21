const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          Siyabonga Mthethwa
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/Siyabonga-Mthethwa-CV.pdf"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:text-blue-400"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}