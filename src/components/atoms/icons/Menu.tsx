import React from "react";
import styled from "styled-components/primitives";
import { Path, Svg } from "../Svg";

const Menu = () => (
  <Svg
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Svg>
);

const StyledText = styled.Text`
  color: ${props =>
    props.inverted ? props.theme.color.white : props.theme.color.black};
`;

export default props => (
  <StyledText {...props}>
    <Menu />
  </StyledText>
);
