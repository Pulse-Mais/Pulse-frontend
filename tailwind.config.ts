import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'midnight-blue': {
          '50': '#e9fbff',
          '100': '#cef5ff',
          '200': '#a7f0ff',
          '300': '#6bebff',
          '400': '#26daff',
          '500': '#00b6ff',
          '600': '#008cff',
          '700': '#0071ff',
          '800': '#0061e6',
          '900': '#0056b3',
          '950': '#003870',
        },
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
};
export default config;
