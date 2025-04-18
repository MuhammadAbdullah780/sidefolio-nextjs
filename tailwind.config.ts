import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /**
         * @custom_colors
         */
        //
        // primary: "#4F39F6",
        // primary_light: "#F9FAFB",

        //
        secondary: "#101828",
        secondary_light: "#1E2939",

        //
        white: "#FFFFFF",

        //
        // gray1: "#969EAC",
        // gray2: "#F9F9FA",
        // gray3: "#F9FAFB",

        /**
         * @library_colors
         */
        divider: "#EDEDED",
        marquee_stars: "#E9E9E9",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
