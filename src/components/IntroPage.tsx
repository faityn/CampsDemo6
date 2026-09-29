"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { resorts } from "@/data/resorts";
import { FeatureIcon } from "./Icons";

export function IntroPage() {
  return (
    <main className="min-h-screen bg-[#21150d] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="grid min-h-screen md:grid-cols-3">
          {resorts.map((resort, index) => (
            <motion.article
              key={resort.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.12 }}
              className="group relative min-h-[720px] overflow-hidden border-b border-white/10 md:min-h-screen md:border-r md:border-b-0 last:border-r-0"
            >
              <Image
                src={resort.introImage}
                alt={resort.name}
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#1a0f09]/95 transition-opacity duration-500 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b0f09]/70" />
              <div className="relative z-10 flex min-h-[720px] flex-col items-center justify-between px-7 pb-10 pt-20 text-center md:min-h-screen md:pb-14">
                <div className="max-w-sm">
                  {resort.logoSrc ? (
                    <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border border-[#431d09]/70 ">
                      <span
                        role="img"
                        aria-label={`${resort.name} logo`}
                        className="absolute inset-4 bg-[#431d09]"
                        style={{
                          maskImage: `url(${resort.logoSrc})`,
                          WebkitMaskImage: `url(${resort.logoSrc})`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border"
                      style={{ borderColor: resort.theme.accent }}
                    >
                      <span
                        className="text-3xl"
                        style={{ color: resort.theme.accent }}
                      >
                        {resort.logoMark}
                      </span>
                    </div>
                  )}
                  <h1 className="luxury-serif text-4xl tracking-[.08em] text-[#431d09] md:text-[40px]">
                    {resort.name}
                  </h1>
                  <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-14 bg-white" />
                    <span
                      className="text-[12px] font-medium tracking-[.45em] "
                      //style={{ color: resort.theme.accent }}
                    >
                      {resort.subtitle}
                    </span>
                    <span
                      className="h-px w-14 bg-white"
                      //style={{ background: resort.theme.accent }}
                    />
                  </div>
                  <p className="mx-auto mt-8 max-w-xs font-serif text-lg leading-relaxed text-white md:text-[18px]">
                    {resort.description}
                  </p>
                </div>
                <div className="w-full max-w-xl">
                  <div className="grid grid-cols-3 gap-3 border-y border-white/15 py-5">
                    {resort.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature.label}
                        className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[.13em] text-white/90"
                      >
                        <FeatureIcon icon={feature.icon} size={22} />
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/resorts/${resort.slug}`}
                    className="mx-auto mt-7 inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-xs uppercase tracking-[.2em] transition hover:bg-white hover:text-[#28170e]"
                    style={{ borderColor: resort.theme.accent }}
                  >
                    View Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="pointer-events-none absolute left-1/2 top-7 hidden -translate-x-1/2 text-center md:block">
          <p className="text-[9px] uppercase tracking-[.55em] text-white/70">
            Three escapes · One collection
          </p>
        </div>
      </section>
    </main>
  );
}
