import { tickerFormulas, tickerLabels } from "../data/cvData";

const items = [...tickerFormulas, ...tickerFormulas];
const labels = [...tickerLabels, ...tickerLabels];

export default function FormulaTicker() {
  return (
    <div className="bg-zinc-950 border-t border-b border-white/5 py-3.5 overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-16 whitespace-nowrap animate-ticker">
        {items.map((formula, i) => (
          <span key={i} className="flex items-center gap-2.5 flex-shrink-0">
            {/* label */}
            <span className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-blue-500/40 border border-blue-500/15 px-1.5 py-0.5 rounded-sm">
              {labels[i]}
            </span>
            {/* formula */}
            <span className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
              {formula}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
