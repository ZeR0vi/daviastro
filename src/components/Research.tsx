import { researchItems } from "../data/cvData";
import Section from "./Section";

export default function Research() {
  return (
    <Section id="pesquisa" index="// 03" title="Pesquisa & Projetos">
      <div className="divide-y divide-white/5">
        {researchItems.map((item) => (
          <div key={item.title} className="py-8">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-baseline gap-4 mb-3">
              <h3 className="font-serif text-lg font-medium text-zinc-300">{item.title}</h3>
              <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-violet-400/80">
                {item.area}
              </span>
            </div>

            {/* Description */}
            <p className="font-light italic text-zinc-500 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Formula block */}
            {item.formula && (
              <div className="border-l-2 border-violet-400/50 bg-zinc-900/60 px-4 py-3 mb-4">
                <code className="font-mono text-sm text-blue-300 block">{item.formula}</code>
                {item.formulaLabel && (
                  <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-zinc-600 mt-1 block">
                    {item.formulaLabel}
                  </span>
                )}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-1 border border-white/10 text-zinc-500 rounded-full hover:border-blue-400/50 hover:text-blue-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
