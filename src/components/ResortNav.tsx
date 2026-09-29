"use client";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Resort } from "@/data/resorts";

export function ResortNav({ resort }: { resort: Resort }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 md:py-7">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-white transition hover:text-white/70"
          aria-label="Back to collection"
        >
          <ArrowLeft size={13} /> Collection
        </Link>

        <div className="flex items-center gap-3">
          <p className="hidden text-[9px] uppercase tracking-[.42em] text-white/85 lg:block">
            Mongolia · Private Collection
          </p>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-4 max-w-[1380px] rounded-2xl border border-white/20 bg-black/55 p-5 backdrop-blur-xl lg:hidden">
          <div className="grid gap-4 text-xs uppercase tracking-[.2em] text-white">
            {[
              ["Experience", "#experience"],
              ["Rooms", "#rooms"],
              ["Restaurant", "#restaurant"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a onClick={() => setOpen(false)} key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
