import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        'amber': {
          '50': '#ffffea',
          '100': '#fffbc5',
          '200': '#fff885',
          '300': '#ffed46',
          '400': '#ffdf1b',
          '500': '#ffbf00',
          '600': '#e29300',
          '700': '#bb6802',
          '800': '#985008',
          '900': '#7c420b',
          '950': '#482200',
        },
        "picton-blue": {
          '400': "#16aaff",
        },
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  darkMode: "class",
  plugins: [  
    nextui(),
    require("@tailwindcss/typography"),
    // plugin(({ addUtilities, addComponents, e, config }) => {}) 
  ],
};
export default config;
