import { navLinks } from "../data/cvData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-14 bg-[rgba(11,13,15,0.92)] backdrop-blur-xl border-b border-white/5">
      <a href="#" className="font-mono text-xs tracking-[0.15em] text-blue-300 no-underline">
        D.LORENZO
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-zinc-500 no-underline transition-colors hover:text-blue-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
