// app/context/LenisContext.tsx

"use client"; // Important for this to be a client-side component

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

// Define the type of the Lenis instance
type LenisInstance = Lenis | null;

// Create a context to hold the Lenis instance
const LenisContext = createContext<LenisInstance>(null);

// Custom hook to access the Lenis instance
export const useLenis = (): LenisInstance => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return context;
};

// LenisProvider component that initializes and provides the Lenis instance
export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<LenisInstance>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenisInstance = new Lenis({
      lerp: 0.2, // Adjust the scroll smoothing
      smoothWheel: true, // Enable smooth scroll for wheel
      // Remove smoothTouch if it's not a valid option
    });

    // Create an animation loop to update Lenis scroll
    const animate = (time: number) => {
      lenisInstance.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    setLenis(lenisInstance);

    // Cleanup on component unmount
    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};
