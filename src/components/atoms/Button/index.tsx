import styled from "styled-components/primitives";

export const StyledViewRaisedButton = styled.View`
  height: 36px;
  border-radius: 2px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.theme.color.primary};
  shadow-color: ${props => props.theme.color.black};
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RaisedButton = ({ name = "RaisedButton", ...rest }) => (
  <StyledViewRaisedButton name={name} accessibilityRole="button" {...rest} />
);

export const StyledViewFloatingActionButton = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${props => props.theme.color.secondary};
  shadow-color: ${props => props.theme.color.black};
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FloatingActionButton = ({
  name = "FloatingActionButton",
  ...rest
}) => (
  <StyledViewFloatingActionButton
    name={name}
    accessibilityRole="button"
    {...rest}
  />
);
