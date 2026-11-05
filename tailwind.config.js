/** Les couleurs sont définies en variables CSS dans src/index.css (thèmes sombre et clair). */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        accent: token("accent"),
        "on-accent": token("on-accent"),
      },
      fontFamily: {
        sans: ['"Instrument Sans Variable"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
