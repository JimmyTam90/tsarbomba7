"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-carbon">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[48px] w-full items-center justify-between gap-4 px-4 py-3 text-left font-semibold text-slatelight focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-xl text-rosegold">{isOpen ? "\u2212" : "+"}</span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-4 pb-4 text-slate-300">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
