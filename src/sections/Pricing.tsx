"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const PRICING_TIERS = [
    {
        name: "Starter",
        price: "0",
        period: "Free forever",
        features: ["Up to 3 projects", "50 components", "Basic token editor", "Community support"],
        cta: "Start Free",
        featured: false
    },
    {
        name: "Studio",
        price: "49",
        period: "per seat / month",
        badge: "14-day free trial",
        features: ["Unlimited projects", "Full component library", "Figma & Sketch sync", "Priority support"],
        cta: "Get Studio",
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "Contact Sales",
        features: ["Unlimited seats", "Dedicated onboarding", "SLA & Audit logs", "Custom contracts"],
        cta: "Contact Sales",
        featured: false
    }
];

export function Pricing() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.to('.pricing-header', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.pricing-header', start: 'top 85%', toggleActions: 'play none none none' }
        });

        gsap.utils.toArray('.pricing-card').forEach((c: unknown, i) => {
            const card = c as HTMLElement;
            gsap.from(card, {
                opacity: 0, y: 40, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
                scrollTrigger: { trigger: '.pricing-cards', start: 'top 80%', toggleActions: 'play none none none' }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="pricing" className="py-[100px] md:py-[140px] px-6 md:px-12 bg-brand-cream">
            <div className="max-w-[1200px] mx-auto">
                <div className="pricing-header reveal text-center mb-16 md:mb-[72px]">
                    <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] tracking-[-0.03em] mb-4 text-brand-text">
                        Simple, honest pricing.
                    </h2>
                    <p className="text-[0.9rem] text-[#6a6560] font-light">
                        No hidden fees. Scale as your team grows.
                    </p>
                </div>

                <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black/10">
                    {PRICING_TIERS.map((tier, i) => (
                        <div
                            key={i}
                            className={`pricing-card relative p-10 md:p-[52px_48px] ${tier.featured ? 'bg-brand-black text-brand-white' : 'bg-brand-white'}`}
                        >
                            {tier.featured && (
                                <Badge className="absolute top-8 right-8">Most Popular</Badge>
                            )}

                            <p className={`text-[0.72rem] tracking-[0.14em] uppercase mb-8 ${tier.featured ? 'text-white/40' : 'text-brand-mid'}`}>
                                {tier.name}
                            </p>

                            <div className="font-serif text-[3rem] md:text-[3.5rem] tracking-[-0.04em] leading-none mb-2">
                                {tier.price !== "Custom" && <sup className="text-[1.2rem] align-super tracking-normal mr-1">$</sup>}
                                {tier.price}
                            </div>

                            <p className={`text-[0.78rem] mb-10 ${tier.featured ? 'text-white/35' : 'text-brand-mid'}`}>
                                {tier.period}
                                {tier.badge && <span className="block text-brand-accent mt-1">{tier.badge}</span>}
                            </p>

                            <ul className="list-none mb-11 flex flex-col gap-[14px]">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className={`text-[0.88rem] flex items-center gap-3 font-light ${tier.featured ? 'text-white/65' : 'text-[#5a5750]'}`}>
                                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.featured ? 'bg-white/10' : 'bg-brand-cream'}`}>
                                            <span className="w-[5px] h-[5px] rounded-full bg-brand-accent" />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={tier.featured ? "pricing-featured" : "pricing"}>
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
