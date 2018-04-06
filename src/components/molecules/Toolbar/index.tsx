import React from "react";
import styled from "styled-components/primitives";
import MenuIcon from "../../atoms/icons/Menu";
import Paper from "../../atoms/Paper";
import Typography from "../../atoms/Typography";

const Root = Paper.extend`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: ${props => props.theme.color.primary};
  shadow-color: ${props => props.theme.color.black};
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${props => props.theme.spacing}px;
`;

const Title = Typography.extend`
  margin-left: ${props => props.theme.spacing * 2}px;
`;

export default ({ name = "Toolbar", title }) => (
  <Root name={name}>
    <MenuIcon inverted="true" />
    <Title name="Title" type="headline" inverted="true">
      {title}
    </Title>
  </Root>
);
