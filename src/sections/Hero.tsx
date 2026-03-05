"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Entrance Timeline
        const tl = gsap.timeline({ delay: 0.2 });

        tl.to('.hero-anim', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Mockup Cards Entrance
        gsap.to('.mockup-card', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: 'power3.out',
            delay: 0.8
        });

        // Floating Grid Animation
        gsap.to(gridRef.current, {
            y: -18,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Scroll Parallax for right side
        if (rightRef.current && sectionRef.current) {
            gsap.to(rightRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 60
            });
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="pt-[140px] md:pt-0 min-h-screen flex flex-col md:flex-row id='hero' overflow-hidden bg-brand-white">
            {/* Left Content */}
            <div
                ref={leftRef}
                className="flex-1 flex flex-col justify-center px-6 md:px-[6vw] relative z-10 py-12 md:py-0"
            >
                <p className="hero-anim opacity-0 translate-y-8 flex items-center gap-3 text-[0.72rem] tracking-[0.14em] uppercase text-brand-mid mb-8 before:content-[''] before:block before:w-[28px] before:h-[1px] before:bg-brand-mid">
                    Design System Software
                </p>

                <h1 className="hero-anim opacity-0 translate-y-8 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.02] tracking-[-0.03em] mb-8 text-brand-text">
                    Design with<br />
                    <em className="italic text-brand-accent pr-2">intention,</em><br />
                    build with precision.
                </h1>

                <p className="hero-anim opacity-0 translate-y-8 text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-brand-text/70 max-w-[460px] mb-12 font-light">
                    Forma gives creative teams a unified design system, tokens, components, and documentation that scale without friction.
                </p>

                <div className="hero-anim opacity-0 translate-y-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Button variant="primary">Start Free Trial</Button>
                    <Button variant="ghost">
                        See how it works
                        <ArrowRight size={16} />
                    </Button>
                </div>
            </div>

            {/* Right Canvas */}
            <div
                ref={rightRef}
                className="flex-1 relative bg-brand-cream overflow-hidden clip-path-bounds min-h-[50vh] md:min-h-screen hero-right-bg"
            >
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-0">
                    <div
                        ref={gridRef}
                        className="w-full max-w-[500px] aspect-square grid grid-cols-3 gap-3 md:gap-4 p-4 md:p-8"
                        style={{ transform: "rotate(-15deg) scale(1.1)" }}
                    >
                        {/* Card 1: Black lines */}
                        <div className="mockup-card opacity-0 translate-y-8 bg-brand-black aspect-square rounded-[3px] relative overflow-hidden shadow-[0_20px_40px_rgba(10,10,10,0.15)]">
                            <div className="absolute h-[1px] bg-white/20 left-[12%] right-[12%] top-[35%]" />
                            <div className="absolute h-[1px] bg-white/20 left-[12%] w-[50%] top-[50%]" />
                            <div className="absolute h-[1px] bg-white/20 left-[12%] right-[12%] top-[65%]" />
                            <div className="absolute w-[24px] h-[24px] rounded-full border border-brand-accent top-[20%] right-[15%]" />
                        </div>

                        {/* Card 2: Wide cream */}
                        <div className="mockup-card opacity-0 translate-y-8 bg-brand-white aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(10,10,10,0.08)] col-span-2 relative flex items-center p-6 gap-4">
                            <div className="bg-brand-cream w-[55%] h-[30%] rounded-[2px]" />
                            <div className="w-[8px] h-[8px] rounded-full bg-brand-black absolute top-6 right-6" />
                        </div>

                        {/* Card 3: Geometric Icon */}
                        <div className="mockup-card opacity-0 translate-y-8 aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(10,10,10,0.08)] flex items-center justify-center" style={{ backgroundColor: '#e8e3dc' }}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="12" stroke="#0a0a0a" strokeWidth="1" />
                                <line x1="16" y1="4" x2="16" y2="28" stroke="#0a0a0a" strokeWidth="1" />
                                <line x1="4" y1="16" x2="28" y2="16" stroke="#0a0a0a" strokeWidth="1" />
                            </svg>
                        </div>

                        {/* Card 4: Accent block */}
                        <div className="mockup-card opacity-0 translate-y-8 bg-brand-accent aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(200,169,126,0.3)]" />

                        {/* Card 5: Square inside square */}
                        <div className="mockup-card opacity-0 translate-y-8 aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(10,10,10,0.05)] flex items-center justify-center" style={{ backgroundColor: '#f0ece5' }}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect x="4" y="4" width="20" height="20" stroke="#0a0a0a" strokeWidth="1" />
                                <rect x="9" y="9" width="10" height="10" fill="#c8a97e" />
                            </svg>
                        </div>

                        {/* Card 6: Blue triangle */}
                        <div className="mockup-card opacity-0 translate-y-8 aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(10,10,10,0.06)] flex items-center justify-center" style={{ backgroundColor: '#dce3e8' }}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M4 24 L14 6 L24 24Z" stroke="#7e9bc8" strokeWidth="1" fill="none" />
                            </svg>
                        </div>

                        {/* Card 7: Solid Blue */}
                        <div className="mockup-card opacity-0 translate-y-8 bg-brand-accent2 aspect-square rounded-[3px] shadow-[0_20px_40px_rgba(126,155,200,0.2)]" />

                        {/* Card 8: Progress bars */}
                        <div className="mockup-card opacity-0 translate-y-8 bg-[#ede9e2] rounded-[3px] col-span-2 shadow-[0_20px_40px_rgba(10,10,10,0.06)] flex items-center px-5">
                            <div className="flex gap-2 w-full">
                                <div className="flex-[1] h-[8px] bg-brand-black rounded-[2px] opacity-15" />
                                <div className="flex-[2] h-[8px] bg-brand-black rounded-[2px] opacity-10" />
                                <div className="flex-[1.2] h-[8px] bg-brand-accent rounded-[2px] opacity-70" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero-right-bg {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        @media (min-width: 768px) {
          .hero-right-bg {
            mask-image: linear-gradient(to right, transparent 0%, black 15%);
          }
        }
      `}</style>
        </section>
    );
}
