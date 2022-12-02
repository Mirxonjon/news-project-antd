import { Header } from "antd/lib/layout/layout";
import Container from "../container/container";

import "./header.css";

const PageHeader = () => {
  return (
    <Header className="header">
      <Container>
          <h1>News</h1>
      </Container>
    </Header>
  );
};

export default PageHeader;