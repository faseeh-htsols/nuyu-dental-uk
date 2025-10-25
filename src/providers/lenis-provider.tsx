"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "lenis/dist/lenis.css";
import type { LenisRef } from "lenis/react";

const LenisLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef | null>(null);
  const isTabActive = useRef(true); // Track tab visibility

  useEffect(() => {
    function update(time: number) {
      if (isTabActive.current) {
        lenisRef.current?.lenis?.raf(time * 1000); // Ensures smooth scrolling only if tab is active
      }
    }
    gsap.ticker.add(update); // Add GSAP ticker
    // console.log("GSAP ticker added");

    const handleVisibilityChange = () => {
      isTabActive.current = !document.hidden; // Update tab active status
      if (!isTabActive.current) {
        // console.log("Tab is inactive, stopping updates");
        // Optionally, you could remove the update listener to stop all tickers:
        // gsap.ticker.remove(update);
      } else {
        // console.log("Tab is active, resuming updates");
        // Explicitly call raf to force Lenis to resume smoothly
        if (lenisRef.current?.lenis) {
          lenisRef.current.lenis?.raf(1000);
        }
        // Optionally, re-add the update listener
        gsap.ticker.add(update);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      gsap.ticker.remove(update); // Cleanup GSAP ticker
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <ReactLenis options={{ lerp: 0.08 }} ref={lenisRef} root>
      {children}
    </ReactLenis>
  );
};

export default LenisLayoutProvider;
