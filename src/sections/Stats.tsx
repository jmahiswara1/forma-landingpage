"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

const STATS_DATA = [
    { target: 12, suffix: "k+", label: "Design teams" },
    { target: 98, suffix: "%", label: "Faster handoff" },
    { target: 4, suffix: "x", label: "Consistency score" },
    { target: 340, suffix: "+", label: "Components built-in" },
];

export function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Reveal animation
        gsap.utils.toArray('.stat-item').forEach((e: unknown) => {
            const el = e as HTMLElement;
            gsap.to(el, {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
            });
        });

        // Number Counter Animation
        gsap.utils.toArray('.stat-number').forEach((el: unknown) => {
            const element = el as HTMLElement;
            const target = parseInt(element.dataset.target || "0");
            const span = element.querySelector('span');

            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    gsap.to({ val: 0 }, {
                        val: target,
                        duration: 1.8,
                        ease: 'power2.out',
                        onUpdate: function () {
                            if (span) span.textContent = Math.round(this.targets()[0].val).toString();
                        }
                    });
                }
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-brand-black w-full overflow-hidden">
            <div className="bg-white/5 py-20 md:py-[120px] px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                {STATS_DATA.map((stat, i) => (
                    <div key={i} className="stat-item reveal bg-brand-black p-10 md:p-[52px_48px] relative text-brand-white">
                        <div
                            className="stat-number font-serif text-[clamp(2.8rem,4vw,4.5rem)] tracking-[-0.04em] leading-none mb-3 text-brand-white"
                            data-target={stat.target}
                        >
                            <span className="text-brand-accent">0</span>{stat.suffix}
                        </div>
                        <p className="text-[0.78rem] tracking-[0.1em] uppercase text-white/35">
                            {stat.label}
                        </p>
                        {/* Divider Line (hidden on last item via CSS in legacy, we handle it via Tailwind grid mostly, but adding border) */}
                        {i !== STATS_DATA.length - 1 && (
                            <div className="hidden lg:block absolute right-0 top-[20%] bottom-[20%] w-[1px] bg-white/10" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
