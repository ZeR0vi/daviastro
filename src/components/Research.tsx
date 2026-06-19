import { researchItems } from "../data/cvData";
import Section from "./Section";

// Area badge colors
const areaColors: Record<string, string> = {
  "Física Teórica":        "text-violet-400/80 border-violet-400/20 bg-violet-400/5",
  "Gravitação & Cosmologia": "text-blue-400/80 border-blue-400/20 bg-blue-400/5",
  "Física Clássica":       "text-cyan-400/80 border-cyan-400/20 bg-cyan-400/5",
};

// Formula block accent per item
const formulaAccents = [
  { border: "border-l-violet-400/60", bg: "bg-violet-950/20", text: "text-violet-200",  label: "text-violet-700" },
  { border: "border-l-blue-400/60",   bg: "bg-blue-950/20",   text: "text-blue-200",    label: "text-blue-700" },
  { border: "border-l-cyan-400/60",   bg: "bg-cyan-950/20",   text: "text-cyan-200",    label: "text-cyan-700" },
];

export default function Research() {
  return (
    <Section id="pesquisa" index="// 03" title="Pesquisa & Projetos">
      <div className="divide-y divide-white/5">
        {researchItems.map((item, i) => {
          const accent = formulaAccents[i % formulaAccents.length];
          const areaColor = areaColors[item.area] ?? "text-zinc-400/80 border-zinc-400/20 bg-zinc-400/5";

          return (
            <div key={item.title} className="py-8">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-baseline gap-4 mb-3">
                <h3 className="font-serif text-lg font-medium text-zinc-300">{item.title}</h3>
                <span className={`font-mono text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${areaColor}`}>
                  {item.area}
                </span>
              </div>

              {/* Description */}
              <p className="font-light italic text-zinc-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Formula block — styled */}
              {item.formula && (
                <div className={`relative border-l-2 ${accent.border} ${accent.bg} px-5 py-4 mb-4 rounded-r-sm overflow-hidden`}>
                  {/* decorative corner */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/5" />

                  <div className="flex items-start justify-between gap-4">
                    <code className={`font-mono text-base font-medium leading-relaxed ${accent.text} tracking-wide`}>
                      {item.formula}
                    </code>
                    {/* small sigma decoration */}
                    <span className="font-mono text-3xl text-white/3 select-none flex-shrink-0">∫</span>
                  </div>

                  {item.formulaLabel && (
                    <span className={`font-mono text-[0.6rem] tracking-[0.14em] uppercase ${accent.label} mt-2 block`}>
                      — {item.formulaLabel}
                    </span>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-1 border border-white/8 text-zinc-600 rounded-full hover:border-blue-400/40 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
