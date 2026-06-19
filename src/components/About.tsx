import { formulaCards } from "../data/cvData";
import Section from "./Section";

// Each card gets a unique accent color class
const cardAccents = [
  { border: "hover:border-blue-400/30",   eq: "text-blue-300",    glow: "group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.5)]" },
  { border: "hover:border-violet-400/30", eq: "text-blue-300",  glow: "group-hover:drop-shadow-[0_0_12px_rgba(196,181,253,0.5)]" },
  { border: "hover:border-cyan-400/30",   eq: "text-blue-300",    glow: "group-hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]" },
  { border: "hover:border-amber-400/30",  eq: "text-blue-300",   glow: "group-hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.5)]" },
];

export default function About() {
  return (
    <Section id="sobre" index="// 01" title="Sobre">
      {/* Formula grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-10">
        {formulaCards.map((card, i) => {
          const accent = cardAccents[i % cardAccents.length];
          return (
            <div
              key={card.name}
              className={`group relative bg-zinc-950 hover:bg-[#0f1117] transition-all duration-300 p-6 border border-transparent ${accent.border} cursor-default overflow-hidden`}
            >
              {/* subtle corner decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 group-hover:border-white/10 transition-colors" />

              {/* Label above */}
              <span className="block font-mono text-[0.58rem] tracking-[0.18em] uppercase text-zinc-700 mb-3 group-hover:text-zinc-500 transition-colors">
                {card.name}
              </span>

              {/* Equation — large, glowing on hover */}
              <span
                className={`block font-mono text-xl font-medium leading-snug transition-all duration-300 ${accent.eq} ${accent.glow}`}
              >
                {card.eq}
              </span>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-500" />
            </div>
          );
        })}
      </div>

      <p className="font-light italic text-zinc-500 text-base leading-relaxed max-w-2xl">
        Estudante de Física Bacharelado com interesse em Física Teórica.
        Apaixonado pela estrutura matemática do universo, das equações de campo de Einstein
        à mecânica quântica e à termodinâmica estatística. Busco unir rigor formal com
        intuição física para compreender os fundamentos mais profundos da natureza.
      </p>
    </Section>
  );
}
