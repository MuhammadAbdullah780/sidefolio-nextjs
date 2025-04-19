import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /**
         * @description `Common Colors`
         * @type {COMMON_COLORS}
         */
        white: "#FFFFFF",
        black: "#000000",
        divider: "#EDEDED",
        marquee_stars: "#E9E9E9",

        /**
         * @description `User Defined Custom Colors`
         * @type {CUSTOM_COLORS}
         */
        custom: {
          secondary: "#101828",
          secondary_light: "#1E2939",
          gray1: "#969EAC",
        },

        /**
         * @description `Library Specific Colors`
         * @type {LIBRARY_COLORS}
         */

        // Shadcn
        background: "#FFFFFF",
        foreground: "#24252A", 
        card: "#FFFFFF",
        card_foreground: "#24252A",
        popover: "#FFFFFF", 
        popover_foreground: "#24252A",
        primary: "#9B4DFF",
        primary_foreground: "#F7F8FA",
        secondary: "#F6F7F8",
        secondary_foreground: "#363940",
        muted: "#F6F7F8",
        muted_foreground: "#8D9198",
        accent: "#F6F7F8",
        accent_foreground: "#363940",
        destructive: "#E11D48",
        destructive_foreground: "#F7F8FA",
        border: "#EBEDF0",
        input: "#EBEDF0", 
        ring: "#9B4DFF",
        chart_1: "#E85D2E",
        chart_2: "#2A9187",
        chart_3: "#1F3540",
        chart_4: "#E6B52C",
        chart_5: "#E66B24",
      },

      //
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-vertical": "marquee-vertical 40s linear infinite",
      },

      //
      keyframes: {
        //
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 1rem))",
          },
        },

        //
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - 1rem))",
          },
        },
      },

      //
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
