import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#111111",
      light: "#ffffff",
      accent: "#6698f8",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
      },

      spacing: {
        "0-sm": "2px",
        "0-md": "4px",
        "0-lg": "6px",
        "0-xl": "8px",
        "1-xs": "10px",
        "1-sm": "12px",
        "1-md": "14px",
        "1-lg": "16px",
        "1-xl": "18px",
        "2-xs": "20px",
        "2-sm": "22px",
        "2-md": "24px",
        "2-lg": "26px",
        "2-xl": "28px",
        "3-xs": "30px",
        "3-sm": "32px",
        "4-xs": "40px",
        "4-xl": "48px",
        "6-xs": "60px",
        "8-xs": "80px",
        "10-xs": "100px",
      },
    },
  },
  plugins: [],
};
export default config;
