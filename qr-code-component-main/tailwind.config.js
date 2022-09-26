module.exports = {
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    theme: {
      colors: {
        // Using modern `rgb`
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        tertiary: "hsl(var(--color-secondary) / <alpha-value>)",
        fourtiary: " hsl(var(--color-secondary) / <alpha-value>)",
      },
    },
  },
};
