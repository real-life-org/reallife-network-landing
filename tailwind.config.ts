import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light theme neutrals
        cream: "#F6F1E7",
        surface: "#FCFAF4",
        line: "#E6DCC8",
        ink: "#2A2820",
        bodytext: "#4A463A",
        muted: "#736C58",
        faint: "#9A917A",
        // Brand (the four knot strands)
        sage: "#8C9A5B",
        ocker: "#D89B36",
        terracotta: "#C15F3C",
        forest: "#3E5E2E",
        // Dark theme
        darkbg: "#20231B",
        darksurface: "#2A2E23",
        darkline: "#3D4233",
        darktext: "#ECE6D6",
        darkmuted: "#A39E89",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        spectral: ["var(--font-spectral)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1180px",
      },
      keyframes: {
        spin360: { to: { transform: "rotate(360deg)" } },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        spin360: "spin360 28s linear infinite",
        "spin360-slow": "spin360 50s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
