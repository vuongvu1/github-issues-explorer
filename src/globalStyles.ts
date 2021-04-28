import { createGlobalStyle, DefaultTheme } from "styled-components";

export type ThemeType = { [key: string]: { [key: string]: string | number } };

export const theme: DefaultTheme = {
  palette: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#3F7EF0",
    secondary: "#63AEF7",
    light: "#D9EAFB",
    neutral: "#EFEFEF",
    dark: "#707070",
    boxShadown: "rgba(165, 165, 168, 0.2)",
  },
  breakpoint: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSize: {
    sm: "1rem",
    md: "1.4rem",
    lg: "1.8rem",
  },
  fontWeight: {
    sm: 400,
    md: 700,
    lg: 900,
  },
  borderRadius: "8px",
};

export const mediaQueries = (key: "sm" | "md" | "lg") => {
  return (style: TemplateStringsArray, ...values: string[]) => {
    const styles = style
      .map((str, index) => `${str}${values[index] || ""}`)
      .join("");
    return `@media (min-width: ${theme.breakpoint[key]}) { ${styles} }`;
  };
};

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${theme.palette.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * {
      box-sizing: border-box;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
