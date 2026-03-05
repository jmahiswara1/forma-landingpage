"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Cursor() {
  const progressBarRef = useScrollProgress();

  return (
    <>
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-[2px] bg-brand-accent origin-left z-[999] w-full"
        style={{ transform: "scaleX(0)" }}
      />
    </>
  );
}
