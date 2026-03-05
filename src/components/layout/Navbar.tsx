"use client";

import React, { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        if (!navRef.current) return;

        gsap.to(navRef.current, {
            scrollTrigger: {
                trigger: document.body,
                start: "50px top",
                end: "+=100",
                scrub: true,
            },
            backgroundColor: "rgba(245,243,239,0.92)",
            backdropFilter: "blur(12px)",
            paddingTop: "18px",
            paddingBottom: "18px",
        });
    });

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-7 flex items-center justify-between mix-blend-normal"
        >
            <a href="#" className="font-serif text-[1.35rem] tracking-[-0.02em] text-brand-text no-underline relative z-10">
                Forma
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-10 list-none">
                <li><a href="#features" className="text-[0.8rem] tracking-[0.08em] uppercase text-brand-text opacity-60 hover:opacity-100 transition-opacity">Features</a></li>
                <li><a href="#showcase" className="text-[0.8rem] tracking-[0.08em] uppercase text-brand-text opacity-60 hover:opacity-100 transition-opacity">Showcase</a></li>
                <li><a href="#pricing" className="text-[0.8rem] tracking-[0.08em] uppercase text-brand-text opacity-60 hover:opacity-100 transition-opacity">Pricing</a></li>
                <li><a href="https://github.com/jmahiswara1" target="_blank" className="text-[0.8rem] tracking-[0.08em] uppercase text-brand-text opacity-60 hover:opacity-100 transition-opacity">Docs</a></li>
            </ul>

            <div className="hidden md:block">
                <button className="text-[0.78rem] tracking-[0.08em] uppercase bg-brand-black text-brand-white border-none px-[22px] py-[10px] hover:bg-black/80 transition-colors">
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden relative z-10 p-2 text-brand-text"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-brand-white z-0 flex flex-col items-center justify-center gap-8 md:hidden">
                    <a href="#features" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase font-serif">Features</a>
                    <a href="#showcase" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase font-serif">Showcase</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase font-serif">Pricing</a>
                    <a href="https://github.com/jmahiswara1" target="_blank" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase font-serif">Docs</a>
                    <button className="text-[0.78rem] tracking-[0.08em] uppercase bg-brand-black text-brand-white border-none px-[22px] py-[10px] mt-4">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}
