import React from "react";
import styled from "styled-components/primitives";
import { injectGlobal, theme, ThemeProvider } from "../../theme";
import Header from "../Header";

injectGlobal`
html, body, #__next, div[data-reactroot] {
  height:100%;
}
body {
  height:100%;
  margin:0;
}
`;

const Root = styled.View`
  position: relative;
  padding-top: 56px;
`;

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Root name="Layout">
      {children}
      <Header />
    </Root>
  </ThemeProvider>
);
