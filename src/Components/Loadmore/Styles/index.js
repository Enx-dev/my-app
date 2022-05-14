import styled from "styled-components";

export const Buttonwraper = styled.div`
  display: flex;
  position: relative;
  padding: 2rem;
  justify-content: center;
`;
export const Button = styled.button`
  width: 200px;
  padding-block: 1em;
  margin-left: 1rem;
  border: none;
  display: inline-block;
  box-shadow: 0px 0px 4px 4px ${({ theme: { color } }) => color.shadow};
  border-radius: 20px;
  font-size: calc(var(--font-size_home) + 10px);
  font-weight: 600;
  letter-spacing: 2px;
  background: ${({ theme: { color } }) => color.elements};
  color: ${({ theme: { color } }) => color.text};
  &:disabled {
    background: hsl(209deg 2% 8% / 50%);
  }
`;
