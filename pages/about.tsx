import Paper from "../src/components/atoms/Paper";
import { Display1, Display4 } from "../src/components/atoms/Typography";
import { Link } from "../src/components/functions/router";
import Layout from "../src/components/organisms/Layout";

export const Content = Paper.extend`
  padding-vertical: ${props => props.theme.spacing}px;
  padding-horizontal: ${props => props.theme.spacing}px;
`;

export default () => (
  <Layout>
    <Link href="/">
      <Display1>Home</Display1>
    </Link>
    <Display1>About</Display1>
    <Content>
      <Display4>This is About.</Display4>
    </Content>
  </Layout>
);
