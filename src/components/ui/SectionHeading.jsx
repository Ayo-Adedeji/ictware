import { Reveal } from "./Reveal";

export default function SectionHeading({ eyebrow, title, children, align = "center", tone = "light" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "navy" ? "text-bone-50" : "text-navy-950";
  const subColor = tone === "navy" ? "text-slate-400" : "text-slate-400";

  return (
    <Reveal className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading font-bold text-2xl sm:text-3xl lg:text-4xl ${titleColor} leading-tight`}>
        {title}
      </h2>
      {children && <p className={`mt-5 text-base sm:text-lg ${subColor} leading-relaxed`}>{children}</p>}
    </Reveal>
  );
}
