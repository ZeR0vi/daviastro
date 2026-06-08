import { tickerFormulas, tickerLabels } from "../data/cvData";

const items = [...tickerFormulas, ...tickerFormulas]; // duplicate for seamless loop
const labels = [...tickerLabels, ...tickerLabels];

export default function FormulaTicker() {
  return (
    <div className="bg-zinc-950 border-t border-b border-white/5 py-4 overflow-hidden">
      <div className="flex gap-20 whitespace-nowrap animate-ticker">
        {items.map((formula, i) => (
          <span key={i} className="flex items-center gap-2 flex-shrink-0 font-mono text-sm text-zinc-600">
            <span className="text-[0.62rem] tracking-[0.1em] uppercase text-blue-400/60">
              {labels[i]}
            </span>
            {formula}
          </span>
        ))}
      </div>
    </div>
  );
}
