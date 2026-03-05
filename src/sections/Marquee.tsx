"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "Design Tokens",
  "Component Library",
  "Live Documentation",
  "Figma Sync",
  "Version Control",
  "Team Collaboration"
];

export function Marquee() {
  return (
    <div className="py-4 md:py-5 bg-brand-cream border-y border-black/5 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee inline-block relative pt-[2px]">
        {/* Double the array length to ensure smooth looping */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center text-[0.65rem] md:text-[0.72rem] font-sans tracking-[0.16em] uppercase text-brand-mid pr-10 md:pr-16"
          >
            <span className="w-[4px] h-[4px] rounded-full bg-[#d1c1a9] inline-block mr-10 md:mr-16" />
            {item}
          </span>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}
