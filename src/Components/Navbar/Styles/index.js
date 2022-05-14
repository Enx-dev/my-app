import styled from "styled-components";

export const Navbar = styled.nav`
  background: ${({ theme: { color } }) => color.elements};
  padding-block: 50px;
  padding-inline: 10px;
  box-shadow: 0px 7px 7px 0px ${({ theme: { color } }) => color.shadow};
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size_home);
  color: ${({ theme: { color } }) => color.text};
  font-family: var(--font-family);
  button {
    font-family: var(--font-family);
  }

  div {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 0.5rem;
      font-weight: 600;
    }
  }
`;
