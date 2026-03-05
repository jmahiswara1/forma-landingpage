import React from "react";

export function Badge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`text-[0.65rem] tracking-[0.12em] uppercase text-brand-accent border border-brand-accent/40 px-[10px] py-[5px] inline-block ${className}`}>
            {children}
        </span>
    );
}
