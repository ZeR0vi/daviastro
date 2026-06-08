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
            <em className="italic text-blue-400 not-italic" style={{ fontStyle: "italic" }}>
              Lorenzo
            </em>
          </h1>
          <p className="font-light italic text-zinc-500 text-lg leading-relaxed max-w-xl mt-8 mb-10">
            Estudante de Física Bacharelado pela UFMG. Movido pela curiosidade sobre as leis fundamentais
            que governam o universo.
            

          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
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
