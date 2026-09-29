import Image from "next/image";
import type { Resort } from "@/data/resorts";

export function Logo({ resort, light = true }: { resort: Resort; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${light ? "text-white" : "text-[#3a2519]"}`}>
      {resort.logoSrc ? (
        <div className="relative h-11 w-11 shrink-0">
          <Image src={resort.logoSrc} alt={resort.name} fill className="object-contain" sizes="44px" />
        </div>
      ) : (
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border" style={{ borderColor: resort.theme.accent }}>
          <span className="text-xl" style={{ color: resort.theme.accent }}>{resort.logoMark}</span>
        </div>
      )}
      <div className="leading-none">
        <div className="luxury-serif text-[18px] tracking-[.18em]">{resort.name}</div>
        <div className="mt-1 text-[9px] tracking-[.42em] opacity-80">{resort.subtitle}</div>
      </div>
    </div>
  );
}
