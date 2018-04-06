import styled from "styled-components/primitives";

const Typography = styled.Text`
  color: ${props =>
    props.inverted ? props.theme.color.white : props.theme.color.black};
  font-family: ${props => props.theme.typography[props.type].fontFamily};
  font-size: ${props => props.theme.typography[props.type].fontSize};
  font-weight: ${props => props.theme.typography[props.type].fontWeight};
  letter-spacing: ${props => props.theme.typography[props.type].letterSpacing};
  line-height: ${props => props.theme.typography[props.type].lineHeight};
  opacity: ${props => props.theme.typography[props.type].opacity};
`;

export default Typography;

export const Body1 = props => <Typography type="body1" {...props} />;
export const Body2 = props => <Typography type="body2" {...props} />;
export const ButtonText = props => <Typography type="button" {...props} />;
export const Caption = props => <Typography type="caption" {...props} />;
export const Display1 = props => <Typography type="display1" {...props} />;
export const Display2 = props => <Typography type="display2" {...props} />;
export const Display3 = props => <Typography type="display3" {...props} />;
export const Display4 = props => <Typography type="display4" {...props} />;
export const Headline = props => <Typography type="headline" {...props} />;
export const Subheading = props => <Typography type="subheading" {...props} />;
export const Title = props => <Typography type="title" {...props} />;
