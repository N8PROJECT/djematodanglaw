/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "do-burgundy": "#590909", // Imperial Burgundy
        "do-terracotta": "#AC5335", // Terracotta Prestige
        "do-ivory": "#F0E1CE", // Ivory Balance
        "do-stone": "#A58881", // Stone Blush
        "do-obsidian": "#110509", // Obsidian Black
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        archivo: ["var(--font-archivo)"],
      },
      backgroundImage: {
        "do-pattern": "url('/images/Pattern/pattern-dolw-a.png')",
      },
    },
  },
  plugins: [],
};
