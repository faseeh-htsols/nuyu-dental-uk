import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      willChange: {
        "width-height": "width, height",
      },
      keyframes: {
        rotateFull: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        opacityJust: {
          "0%": { opacity: "0" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        opacityAnim: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        opacityOp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
        chai: {
          "0%": {
            clipPath: "inset(100% 0px 0px 0px)",
            "-webkit-clip-path": "inset(100% 0px 0px 0px)",
          },
          "50%": {
            clipPath: "inset(0px 0px 0px 0px)",
            "-webkit-clip-path": "inset(0px 0px 0px 0px)",
          },
          "100%": {
            clipPath: "inset(0px 0px 100% 0px)",
            "-webkit-clip-path": "inset(0px 0px 100% 0px)",
          },
        },
        calendar: {
          "0%": {
            clipPath: "inset(0 100% 0 0)",
            "-webkit-clip-path": "inset(0 100% 0 0)",
          },
          "50%": {
            clipPath: "inset(0px 0px 0px 0px)",
            "-webkit-clip-path": "inset(0px 0px 0px 0px)",
          },
          "100%": {
            clipPath: "inset(0px 0px 0px 100%)",
            "-webkit-clip-path": "inset(0px 0px 0px 100%)",
          },
        },

        dropdown: {
          "0%": {
            transform:
              "translate3d(-3rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: "0",
          },
          "100%": {
            transform:
              "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: "1",
          },
        },
        tabsAnim: {
          "0%": {
            transform: "translate(-5px,-5px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0)",
            opacity: "1",
          },
        },
        waves: {
          "0%": {
            transform: "scale(0.2, 0.2)",
            opacity: "0",
            background: "rgba(0, 0, 0, 0.1)",
          },
          "50%": {
            opacity: "0.9",
            background: "rgba(0, 0, 0, 0.2)",
          },
          "100%": {
            transform: "scale(0.9, 0.9)",
            opacity: "0",
            background: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      fontFamily: {
        monopolis: ["var(--font-metropolis)", ...defaultTheme.fontFamily.sans], // Add your custom font
        quicksand: ["Quicksand"],
        calmius: ["Calmius-High"],
        season: ["TheSeasons"],
      },
      animation: {
        waves: "waves 3s ease-in-out infinite",
        dropdown: "dropdown .3s ease-in forwards ",
        tabsanim: "tabsAnim .3s ease-in forwards ",
        "opacity-anim": "opacityAnim .3s linear forwards",
        chai: "chai 2s linear  infinite",
        scaleDown: "scaleDown .3s linear  forwards",
        opacityJust: "opacityJust 2s linear  infinite",
        rotateFull: "rotateFull 5s linear  infinite",
        calendar: "calendar 2s linear  infinite",
        "opacity-Op": "opacityOp 2s linear  infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      primary: "#9E7F61",
      secondary: "#877663",
      tertiary: "#EAE3DE",
      olive: "#000",
      beige: "#e1d5ca",
      "olive-dark": "#000",
      "light-gray": "#f2f2f2",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      blue: "#007ace",
      red: "#FF0000",
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".text-shadow-sm": {
          textShadow: "1px 1px 40px rgba(255,255, 255, 0.99)",
        },
        ".text-shadow-md": {
          textShadow: "1px 1px 40px rgba(239,191,4,.69)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
} satisfies Config;
