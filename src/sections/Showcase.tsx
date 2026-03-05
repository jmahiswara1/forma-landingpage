"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

const SHOWCASE_ITEMS = [
    { bg: 'bg-gradient-to-br from-[#e8e3dc] to-[#d4cfc8]', title: 'Brand Systems', sub: 'Identity & Guidelines', shape: { w: 140, h: 140, bg: 'rgba(200,169,126,0.2)', top: '10%', left: '-20%' } },
    { bg: 'bg-gradient-to-br from-[#dce3e8] to-[#c8cfd4]', title: 'UI Kits', sub: 'Components & Patterns', shape: { w: 120, h: 120, bg: 'rgba(126,155,200,0.2)', bottom: '15%', right: '-10%' } },
    { bg: 'bg-gradient-to-br from-[#e8e0dc] to-[#d4c8c4]', title: 'Motion Design', sub: 'Animation Tokens', shape: { w: 100, h: 100, bg: 'rgba(200,169,126,0.15)', top: '25%', right: '5%' } },
    { bg: 'bg-gradient-to-br from-[#dce8e4] to-[#c8d4d0]', title: 'Print & Web', sub: 'Multi-channel Output', shape: { w: 160, h: 160, bg: 'rgba(200,169,126,0.1)', bottom: '-20%', left: '20%' } },
];

export function Showcase() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.to('.showcase-header', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.showcase-header', start: 'top 85%', toggleActions: 'play none none none' }
        });

        gsap.utils.toArray('.showcase-item').forEach((item: unknown, i) => {
            gsap.from(item as HTMLElement, {
                opacity: 0, y: 60 + i * 15,
                duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.showcase-strip', start: 'top 80%', toggleActions: 'play none none none' },
                delay: i * 0.1
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="showcase" className="py-[100px] md:py-[140px] px-6 md:px-12 overflow-hidden bg-brand-white">
            <div className="showcase-header reveal flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-[72px] max-w-[1200px] mx-auto gap-6">
                <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] tracking-[-0.03em] leading-[1.1] max-w-[500px]">
                    Built for every <em className="italic text-brand-accent">kind</em> of creative
                </h2>
                <p className="text-[0.88rem] leading-[1.7] text-[#6a6560] max-w-[280px] font-light">
                    From solo freelancers to enterprise teams — Forma adapts to how you work.
                </p>
            </div>

            <div className="showcase-strip flex flex-col sm:flex-row gap-5 max-w-[1200px] mx-auto min-h-[500px] md:min-h-[600px]">
                {SHOWCASE_ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className="showcase-item group flex-1 min-w-0 bg-brand-cream aspect-square sm:aspect-[3/4] relative overflow-hidden transition-[flex] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:flex-[2.2]"
                    >
                        <div className={`absolute inset-0 ${item.bg} opacity-100 transition-opacity duration-400`} />

                        {/* Shape Decorative */}
                        <div
                            className="absolute rounded-full transition-transform duration-600 ease-[cubic-bezier(0.34,1.2,0.64,1)] group-hover:scale-115"
                            style={{
                                width: item.shape.w, height: item.shape.h, background: item.shape.bg,
                                top: item.shape.top, bottom: item.shape.bottom, left: item.shape.left, right: item.shape.right
                            }}
                        />

                        {/* Labels */}
                        <div className="absolute bottom-6 left-6 md:bottom-7 md:left-7 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                            <p className="font-serif text-[1.2rem] text-brand-text mb-1">{item.title}</p>
                            <p className="text-[0.72rem] tracking-[0.08em] uppercase text-brand-mid">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .group:hover .group-hover\\:scale-115 {
          transform: scale(1.15);
        }
      `}</style>
        </section>
    );
}
