import { heroStats } from "../data/cvData";

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-8 pt-32 pb-20 border-b border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
        {/* Text */}
        <div className="animate-fadeUp">
          <p className="font-mono text-[0.75rem] tracking-[0.18em] uppercase text-blue-400 mb-8">
            Física · Estudante &amp; Divulgador Científico
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight text-zinc-100 mb-1">
            David{" "}
            <em style={{ fontStyle: "italic" }} className="text-blue-400">
              Lorenzo
            </em>
          </h1>
          <p className="font-light italic text-zinc-500 text-lg leading-relaxed max-w-xl mt-8 mb-10">
            Estudante de Física Bacharelado pela UFMG. Movido pela curiosidade sobre as leis fundamentais
            que governam o universo.
          </p>

          {/* Meta links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10">
            {[
              { label: "daviastronomia7@gmail.com" },
              { label: "Minas Gerais, BR" },
              { label: "GitHub", href: "https://github.com/ZeR0vi" },
              { label: "Baixar CV (PDF)", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href ?? "#"}
                className="font-mono text-[0.7rem] tracking-[0.08em] text-zinc-500 no-underline hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/daviastronomia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-2.5 rounded-sm border border-white/10 bg-zinc-900/60 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-200 no-underline"
            >
              {/* Instagram icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-zinc-500 group-hover:text-pink-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
              </svg>
              <span className="font-mono text-[0.7rem] tracking-0.1em uppercase text-zinc-500 group-hover:text-pink-300 transition-colors">
                Instagram
              </span>
              <span className="font-mono text-[0.62rem] text-zinc-700 group-hover:text-pink-500/60 transition-colors">
                @daviastronomia
              </span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@daviastronomia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-2.5 rounded-sm border border-white/10 bg-zinc-900/60 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-200 no-underline"
            >
              {/* YouTube icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition-colors"
                fill="currentColor"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              <span className="font-mono text-[0.7rem] tracking-0.1em uppercase text-zinc-500 group-hover:text-red-300 transition-colors">
                YouTube
              </span>
              <span className="font-mono text-[0.62rem] text-zinc-700 group-hover:text-red-500/60 transition-colors">
                @daviastronomia
              </span>
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="w-32 h-32 rounded-full border-2 border-white/10 bg-zinc-900 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
          <img
            src="/IconKaneki.png"
            alt="David Lorenzo"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-20 pt-10 border-t border-white/5 flex-wrap">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-4xl text-blue-200 leading-none">{stat.num}</div>
            <div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-zinc-600 mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
