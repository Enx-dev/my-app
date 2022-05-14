import styled from "styled-components/macro";

const laptopView = (element) =>
  `@media screen and (min-width:768px){${element}}`;

export const Back = styled.button`
  margin-top: 2rem;
  width: 70px;
  background: ${({ theme: { color } }) => color.elements};
  border: none;
  border-radius: 4px;
  padding-block: 3px;
  color: ${({ theme: { color } }) => color.text};
  font-size: var(--font-size_Details);
  box-shadow: 2px 2px 7px 0 ${({ theme: { color } }) => color.shadow};
`;
export const Container = styled.main`
  padding-inline: 2rem;
  font-size: var(--font-size_Details);

  padding-block: 1rem;
  font-family: var(--font-family);
  ${laptopView("display: flex;")}
`;
export const Pane1 = styled.section`
  margin-block-end: 3rem;
  padding-block-start: 3rem;
  img {
    width: 100%;
    object-fit: cover;
    box-shadow: 2px 2px 7px 0 ${({ theme: { color } }) => color.shadow};
  }
  ${laptopView("width: 100%;height: 100%; img{height: 100%}")}
`;
export const Pane2 = styled.section`
  color: ${({ theme: { color } }) => color.text};
  p {
    display: inline;
  }
  ${laptopView(
    "width: 100%;padding-inline-start: 1rem;padding-block-start: 3rem;height: 100%;display: grid;gap: 1rem;grid-template-columns: repeat(2,200px);"
  )}
`;
export const Frame1 = styled.div`
  margin-block-end: 3rem;
  h1 {
    margin-block-end: 2rem;
    font-size: calc(var(--font-size_Details) + 5px);
  }
  ul {
    li {
      span {
        font-weight: 600;
      }
      list-style: none;
      margin-bottom: 0.5rem;
    }
  }
  ${laptopView("place-self: center;justify-self: center;margin-block-end:0;")}
`;
export const Frame2 = styled(Frame1)`
  ${laptopView("place-self: center;")}
`;
export const Frame3 = styled(Frame1)`
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 1rem;
    div {
      width: 100px;
      padding-block: 5px;
      text-align: center;
      background: ${({ theme: { color } }) => color.elements};
      border-radius: 7px;
      box-shadow: 2px 2px 7px 0 ${({ theme: { color } }) => color.shadow};
    }
  }
  ${laptopView("grid-column: 1/-1;place-self: revert;justify-self: revert;")}
`;
