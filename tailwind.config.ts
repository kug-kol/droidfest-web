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
        'display': ['92px', { lineHeight: '92px', fontWeight: '500' }],
        'display-subtext': ['39px', { lineHeight: '39px' }],
        'heading': ['43px', { lineHeight: '49px', fontWeight: '600' }],
        'heading-subtext': ['29px', { lineHeight: '39px' }],
        'banner-heading': ['35px', { lineHeight: '42px', fontWeight: '600' }],
        'title': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px' }],
        'small': ['13px', { lineHeight: '20px' }],
        'body-spec': ['16px', { lineHeight: '20px' }],
      },
      colors: {
        'background': "var(--background)",
        'foreground': "var(--foreground)",
        'light': 'var(--light)',
        'dark': 'var(--dark)',
        'ac-dark': 'var(--accented-dark)',
        'gray': 'var(--gray)',
        'blue': 'var(--blue)',
        'magenta': 'var(--magenta)',
        'ac-magenta': 'var(--accented-magenta)',
        'l-purple': 'var(--lightened-purple)',
        'd-purple': 'var(--dark-purple)',
        'red': 'var(--red)',
        'plum': 'var(--plum)',
        'yellow': 'var(--yellow)',
      },
    },
  },
  plugins: [],
} satisfies Config;
