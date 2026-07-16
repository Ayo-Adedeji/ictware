import { BRANDS } from "../../data/site";
import { Reveal } from "./Reveal";

export default function BrandStrip({ label = "Technology we work with" }) {
  return (
    <section className="bg-bone-50 py-10 px-4 sm:px-6 border-y border-slate-400/20">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold mb-6">
          {label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {BRANDS.map((b, i) => (
            <Reveal key={b} index={i} className="text-navy-800/60 font-heading font-semibold text-lg sm:text-xl tracking-tight">
              {b}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
