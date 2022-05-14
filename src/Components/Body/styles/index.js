import styled from "styled-components";

export const Link = styled.main`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.text};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { color } }) => color.elements};
  opacity: 0.5;
  position: fixed;
  font-size: 20px;
  top: 400px;
  right: 20px;
  z-index: 1000000;
  box-shadow: 2px 2px 7px 0 ${({ theme: { color } }) => color.shadow};
`;
export const Wrapper = styled.main`
  background: ${({ theme: { color } }) => color.background};
  display: flex;
  flex-direction: column;
  padding-inline-3rem;
  scroll-behaviour:smooth;
  
`;
