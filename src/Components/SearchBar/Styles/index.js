import styled from "styled-components/macro";

export const Wrapper = styled.section`
  height: 200px;
  margin-block: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  justify-content: center;
  align-self: center;
  font-family: var(--font-family);
  gap: 5rem;
  width: 90%;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: space-between;
  } ;
`;
export const Searchbar = styled.div`
  background: ${({ theme: { color } }) => color.elements};
  border-radius: 7px;
  padding-block: 20px;
  max-height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 7px 7px 0px ${({ theme: { color } }) => color.shadow};
  justify-content: space-evenly;
  svg {
    width: 30%;
    font-size: 20px;
    color: ${({ theme: { color } }) => color.text};
  }
`;
export const Serchinput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  height: 100%;
  outline: none;
  font-size: var(--font-size_home);
  color: ${({ theme: { color } }) => color.text};
  font-weight: 300;

  &::placeholder {
    font-size: calc(var(--font-size_home) + 2px);
    color: ${({ theme: { color } }) => color.text};
    font-weight: 300;
  }
`;
export const Filterwrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  min-width: 200px;
  @media screen and (min-width: 1024px) {
    justify-self: flex-end;
  }
`;
export const Filter = styled.div`
  background: ${({ theme: { color } }) => color.elements};
  height: 70px;
  border-radius: 7px;
  padding-block: 20px;
  max-height: 60px;
  display: flex;
  margin-block-end: 0.5rem;
  box-shadow: 0px 7px 7px 0px ${({ theme: { color } }) => color.shadow};
  font-size: calc(var(--font-size_home) + 2px);
  justify-content: space-around;
  color: ${({ theme: { color } }) => color.text};
`;
export const Dropdown = styled.div`
  background: ${({ theme: { color } }) => color.elements};
  z-index: 20000;
  box-shadow: 0px 7px 7px 0px ${({ theme: { color } }) => color.shadow};
  height: 185px;
  list-style: none;
  color: ${({ theme: { color } }) => color.text};
  font-size: calc(var(--font-size_home) + 2px);
  font-weight: 300;
  border-radius: 7px;
  padding: 1rem;
  ul {
    li {
      list-style: none;
      margin-block: 0.5rem;
      cursor: pointer;
      text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
    }
  }
`;
