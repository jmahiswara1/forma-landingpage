"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.utils.toArray('.cta-reveal').forEach((el: unknown, i) => {
            gsap.to(el as HTMLElement, {
                opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-[100px] md:py-[140px] px-6 md:px-12 text-center relative overflow-hidden bg-brand-white">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,126,0.08) 0%, transparent 70%)' }}
            />

            <p className="cta-reveal opacity-0 translate-y-8 text-[0.72rem] tracking-[0.14em] uppercase text-brand-mid mb-8 relative z-10">
                Ready to ship?
            </p>

            <h2 className="cta-reveal opacity-0 translate-y-8 font-serif text-[clamp(2.5rem,6vw,6.5rem)] tracking-[-0.03em] leading-[1.0] max-w-[800px] mx-auto mb-10 md:mb-[52px] text-brand-text relative z-10">
                Your design system, <em className="italic text-brand-accent pr-3">finally</em> finished.
            </h2>

            <div className="cta-reveal opacity-0 translate-y-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 relative z-10">
                <Button variant="primary">Start for Free</Button>
                <Button variant="ghost">
                    Talk to sales
                    <ArrowRight size={16} />
                </Button>
            </div>
        </section>
    );
}
