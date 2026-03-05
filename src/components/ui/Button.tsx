import React from "react";

// Fallback utility for class names if we don't want to install clsx/tailwind-merge
const cls = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost" | "pricing" | "pricing-featured";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", children, ...props }, ref) => {

        // Base classes
        const baseClass = "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

        // Variant classes
        const variants = {
            primary: "bg-brand-black text-brand-white px-[28px] py-[16px] text-[0.78rem] tracking-[0.1em] uppercase hover:bg-black/80",
            ghost: "bg-transparent text-brand-text/50 hover:text-brand-text px-4 py-2 gap-2 hover:[&>svg]:translate-x-1 [&>svg]:transition-transform",
            pricing: "w-full p-4 font-sans text-[0.78rem] tracking-[0.1em] uppercase border border-black/15 bg-transparent text-brand-text hover:bg-brand-black hover:text-brand-white hover:border-transparent",
            "pricing-featured": "w-full p-4 font-sans text-[0.78rem] tracking-[0.1em] uppercase border border-transparent bg-brand-accent text-brand-white hover:bg-[#b8976c]"
        };

        return (
            <button
                ref={ref}
                className={cls(baseClass, variants[variant], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
