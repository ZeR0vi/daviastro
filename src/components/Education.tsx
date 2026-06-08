import { educationItems } from "../data/cvData";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="educacao" index="// 02" title="Educação">
      <div className="divide-y divide-white/5">
        {educationItems.map((item) => (
          <div key={item.degree} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-7">
            <div>
              <h3 className="font-serif text-lg font-medium text-zinc-300 mb-1">{item.degree}</h3>
              <p className="font-mono text-[0.72rem] tracking-[0.08em] text-zinc-500 mb-2">
                {item.institution}
              </p>
              <p className="font-light italic text-zinc-600 text-sm">{item.description}</p>
            </div>
            <span className="font-mono text-[0.68rem] text-zinc-700 tracking-[0.06em] whitespace-nowrap pt-1">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
