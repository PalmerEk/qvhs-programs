import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("daisyui")],

  extend: {
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(255, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 255, 0, 0.15)'
      ]
    }
  },

  daisyui: {
    // themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      {
        dark: {
          ...require("daisyui/src")["[data-theme=dark]"],
          primary: "white",
          "primary-focus": "mediumblue",
          secondary: "#fcb525",
          accent: "#fcb525",
          neutral: "#3d4451",
          "base-100": "#000000",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
