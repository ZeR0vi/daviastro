import { skillGroups } from "../data/cvData";
import Section from "./Section";

const titleColorMap = {
  gold:   "text-yellow-500/80",
  blue:   "text-blue-400/80",
  purple: "text-violet-400/80",
};

export default function Skills() {
  return (
    <Section id="habilidades" index="// 04" title="Habilidades">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div
              className={`font-mono text-[0.65rem] tracking-[0.15em] uppercase pb-3 mb-4 border-b border-white/5 ${titleColorMap[group.color]}`}
            >
              {group.title}
            </div>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="font-light text-zinc-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
