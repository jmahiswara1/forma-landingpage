import React from "react";

export function Footer() {
    return (
        <footer className="border-t border-black/10 px-6 py-10 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-center bg-brand-white">
            <a href="#" className="font-serif text-[1.1rem] text-brand-text no-underline tracking-[-0.02em]">
                Forma
            </a>
            <ul className="flex gap-6 md:gap-8 list-none m-0 p-0 text-center">
                <li><a href="#" className="text-[0.75rem] tracking-[0.08em] uppercase text-brand-mid no-underline transition-colors hover:text-brand-text">Privacy</a></li>
                <li><a href="#" className="text-[0.75rem] tracking-[0.08em] uppercase text-brand-mid no-underline transition-colors hover:text-brand-text">Terms</a></li>
                <li><a href="#" className="text-[0.75rem] tracking-[0.08em] uppercase text-brand-mid no-underline transition-colors hover:text-brand-text">Status</a></li>
                <li><a href="#" className="text-[0.75rem] tracking-[0.08em] uppercase text-brand-mid no-underline transition-colors hover:text-brand-text">Blog</a></li>
            </ul>
            <p className="text-[0.72rem] text-brand-mid tracking-[0.05em] m-0">
                © 2026 Forma
            </p>
        </footer>
    );
}
