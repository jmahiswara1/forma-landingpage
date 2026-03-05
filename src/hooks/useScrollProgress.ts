"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "./useGSAP";

export function useScrollProgress() {
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!progressRef.current) return;

        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                gsap.to(progressRef.current, {
                    scaleX: self.progress,
                    duration: 0.1,
                    ease: "none",
                });
            },
        });
    }, []);

    return progressRef;
}
