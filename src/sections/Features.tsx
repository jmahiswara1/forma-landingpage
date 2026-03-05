"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

export function Features() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Reveal Label
        gsap.to('.feat-label', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.feat-label', start: 'top 85%', toggleActions: 'play none none none' }
        });

        // Feature Cards Stagger
        gsap.utils.toArray('.feature-card').forEach((c: unknown, i) => {
            const card = c as HTMLElement;
            gsap.from(card, {
                opacity: 0, y: 40,
                duration: 0.7,
                delay: i * 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="features" className="py-[100px] md:py-[140px] px-6 md:px-12 max-w-[1200px] mx-auto bg-brand-white">
            <p className="feat-label reveal flex items-center gap-3 text-[0.72rem] tracking-[0.14em] uppercase text-brand-mid mb-[72px] before:content-[''] before:block before:w-[28px] before:h-[1px] before:bg-brand-mid">
                What Forma does
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black/5">

                {/* Card 1 */}
                <div className="feature-card bg-brand-white p-10 md:p-[52px_44px] relative overflow-hidden transition-colors duration-300 hover:bg-brand-cream group">
                    <p className="font-serif text-[0.72rem] text-brand-mid mb-8 tracking-[0.08em]">01</p>
                    <div className="w-[40px] h-[40px] mb-7 relative">
                        <svg
                            className="absolute transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-6"
                            width="40" height="40" viewBox="0 0 40 40" fill="none"
                            role="img" aria-label="Design Tokens Icon"
                        >
                            <rect x="4" y="4" width="32" height="32" stroke="#0a0a0a" strokeWidth="1.2" />
                            <rect x="12" y="12" width="16" height="16" fill="#c8a97e" opacity=".6" />
                        </svg>
                    </div>
                    <h3 className="font-serif text-[1.5rem] tracking-[-0.02em] mb-4 leading-[1.2]">Design<br />Tokens</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-[#6a6560] font-light">
                        Single source of truth for color, spacing, and typography. Push updates across your entire product instantly.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="feature-card bg-brand-white p-10 md:p-[52px_44px] relative overflow-hidden transition-colors duration-300 hover:bg-brand-cream group">
                    <p className="font-serif text-[0.72rem] text-brand-mid mb-8 tracking-[0.08em]">02</p>
                    <div className="w-[40px] h-[40px] mb-7 relative">
                        <svg
                            className="absolute transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-6"
                            width="40" height="40" viewBox="0 0 40 40" fill="none"
                            role="img" aria-label="Component Library Icon"
                        >
                            <circle cx="20" cy="20" r="14" stroke="#0a0a0a" strokeWidth="1.2" />
                            <circle cx="20" cy="20" r="6" fill="#7e9bc8" opacity=".6" />
                        </svg>
                    </div>
                    <h3 className="font-serif text-[1.5rem] tracking-[-0.02em] mb-4 leading-[1.2]">Component<br />Library</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-[#6a6560] font-light">
                        Modular, accessible components that stay in sync with your Figma files — no manual handoff required.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="feature-card bg-brand-white p-10 md:p-[52px_44px] relative overflow-hidden transition-colors duration-300 hover:bg-brand-cream group md:col-span-2 lg:col-span-1">
                    <p className="font-serif text-[0.72rem] text-brand-mid mb-8 tracking-[0.08em]">03</p>
                    <div className="w-[40px] h-[40px] mb-7 relative">
                        <svg
                            className="absolute transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-6"
                            width="40" height="40" viewBox="0 0 40 40" fill="none"
                            role="img" aria-label="Live Documentation Icon"
                        >
                            <path d="M8 32 L20 10 L32 32Z" stroke="#0a0a0a" strokeWidth="1.2" fill="none" />
                            <path d="M14 26 L20 18 L26 26Z" fill="#c8a97e" opacity=".5" />
                        </svg>
                    </div>
                    <h3 className="font-serif text-[1.5rem] tracking-[-0.02em] mb-4 leading-[1.2]">Live<br />Documentation</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-[#6a6560] font-light">
                        Auto-generated docs that update in real time. Every decision, annotated, versioned, and searchable.
                    </p>
                </div>

            </div>
        </section>
    );
}
