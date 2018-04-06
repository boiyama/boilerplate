import { View } from "react-primitives";
import Paper from "../../atoms/Paper";
import { Subheading } from "../../atoms/Typography";

export const List = ({ name = "List", ...rest }) => (
  <View name={name} {...rest} />
);

export const StyledViewListItem = Paper.extend`
  height: 72;
  overflow: hidden;
  background-color: ${props => props.theme.color.white};
  shadow-color: ${props => props.theme.color.black};
  shadow-offset: 0 0;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${props => props.theme.spacing}px;
`;

export const ListItem = ({ name = "ListItem", ...rest }) => (
  <StyledViewListItem name={name} {...rest} />
);

export const StyledViewListSubtitle = Paper.extend`
  height: 48px;
  background-color: ${props => props.theme.color.white};
  shadow-color: ${props => props.theme.color.black};
  shadow-offset: 0 0;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${props => props.theme.spacing}px;
`;

export const ListSubtitle = ({ children, name = "ListSubtitle", ...rest }) => (
  <StyledViewListSubtitle name={name} {...rest}>
    <Subheading>{children}</Subheading>
  </StyledViewListSubtitle>
);
