interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, center = false }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed text-zinc-600 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
