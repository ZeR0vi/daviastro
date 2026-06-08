import { formulaCards } from "../data/cvData";
import Section from "./Section";

export default function About() {
  return (
    <Section id="sobre" index="// 01" title="Sobre">
      {/* Formula grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-10">
        {formulaCards.map((card) => (
          <div
            key={card.name}
            className="bg-zinc-950 hover:bg-zinc-900 transition-colors p-6 group"
          >
            <span className="block font-mono text-lg text-blue-300 mb-3">{card.eq}</span>
            <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-zinc-600">
              {card.name}
            </span>
          </div>
        ))}
      </div>

      <p className="font-light italic text-zinc-500 text-base leading-relaxed max-w-2xl">
        Estudante de Física Bacharelado com interesse em Física Teórica .
        Apaixonado pela estrutura matemática do universo, das equações de campo de Einstein
        à mecânica quântica e à termodinâmica estatística. Busco unir rigor formal com
        intuição física para compreender os fundamentos mais profundos da natureza.
      </p>
    </Section>
  );
}
