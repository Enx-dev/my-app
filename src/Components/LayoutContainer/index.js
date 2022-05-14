import React from "react";
import styled from "styled-components";

const Layout = styled.main`
  background: ${({ theme: { color } }) => color.background};
  min-height: 100vh;
`;

const LayoutContainer = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;
