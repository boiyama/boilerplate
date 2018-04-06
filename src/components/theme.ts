import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

interface ITypo {
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
  opacity: number;
}

export interface ITheme {
  color: {
    black: string;
    grey: string;
    primary: string;
    secondary: string;
    text: string;
    white: string;
  };
  spacing: number;
  typography: {
    body1: ITypo;
    body2: ITypo;
    button: ITypo;
    caption: ITypo;
    display1: ITypo;
    display2: ITypo;
    display3: ITypo;
    display4: ITypo;
    headline: ITypo;
    subheading: ITypo;
    title: ITypo;
  };
}

const fontFamily = "Avenir";

const fontWeights = {
  light: "300",
  medium: "500",
  regular: "400"
};

export const theme = {
  color: {
    black: "#222223",
    grey: "#6200EA",
    primary: "#3f51b5",
    secondary: "#ff4081",
    text: "#ffffff",
    white: "#ffffff"
  },
  spacing: 16,
  typography: {
    body1: {
      fontFamily,
      fontSize: 14,
      fontWeight: fontWeights.regular,
      letterSpacing: 0.7,
      lineHeight: 20,
      opacity: 0.87
    },
    body2: {
      fontFamily,
      fontSize: 14,
      fontWeight: fontWeights.medium,
      letterSpacing: 0.7,
      lineHeight: 24,
      opacity: 0.87
    },
    button: {
      fontFamily,
      fontSize: 14,
      fontWeight: fontWeights.regular,
      letterSpacing: 0.7,
      lineHeight: 14,
      opacity: 0.87
    },
    caption: {
      fontFamily,
      fontSize: 12,
      fontWeight: fontWeights.regular,
      letterSpacing: 1.2,
      lineHeight: 12,
      opacity: 0.54
    },
    display1: {
      fontFamily,
      fontSize: 34,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
      lineHeight: 40,
      opacity: 0.54
    },
    display2: {
      fontFamily,
      fontSize: 45,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
      lineHeight: 48,
      opacity: 0.54
    },
    display3: {
      fontFamily,
      fontSize: 56,
      fontWeight: fontWeights.regular,
      letterSpacing: -1.4,
      lineHeight: 56,
      opacity: 0.54
    },
    display4: {
      fontFamily,
      fontSize: 112,
      fontWeight: fontWeights.light,
      letterSpacing: -5.6,
      lineHeight: 112,
      opacity: 0.54
    },
    headline: {
      fontFamily,
      fontSize: 24,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
      lineHeight: 32,
      opacity: 0.87
    },
    subheading: {
      fontFamily,
      fontSize: 16,
      fontWeight: fontWeights.regular,
      letterSpacing: 0.8,
      lineHeight: 28,
      opacity: 0.87
    },
    title: {
      fontFamily,
      fontSize: 20,
      fontWeight: fontWeights.medium,
      letterSpacing: 0.5,
      lineHeight: 20,
      opacity: 0.87
    }
  }
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
