import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--font-roboto)",
        inter: "var(--font-inter)",
      },
      fontSize: {
        display: 'var(--font-display)', 
        'display-subtext': 'var(--font-display-subtext)',
        heading: 'var(--font-heading)',
        'heading-subtext': 'var(--font-heading-subtext)',
        'banner-heading': 'var(--font-banner-heading)',
        title: 'var(--font-title)',
        body: 'var(--font-body)',
        small: 'var(--font-small)',
        'body-spec': 'var(--font-body-spec)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "var(--light)",
        dark: "var(--dark)",
        "ac-dark": "var(--accented-dark)",
        gray: "var(--gray)",
        blue: "var(--blue)",
        magenta: "var(--magenta)",
        "ac-magenta": "var(--accented-magenta)",
        "l-purple": "var(--lightened-purple)",
        "d-purple": "var(--dark-purple)",
        red: "var(--red)",
        plum: "var(--plum)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
