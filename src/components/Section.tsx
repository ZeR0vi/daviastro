interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="max-w-4xl mx-auto px-8 py-18 border-b border-white/5">
      <div className="flex items-baseline gap-6 mb-10">
        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-blue-400/70">
          {index}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-300 tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
