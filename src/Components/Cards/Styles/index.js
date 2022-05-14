import styled from "styled-components/macro";

export const Container = styled.main`
  padding-block: 3rem 1rem;
`;
export const Wrapper = styled.section`
  display: grid;
  padding-inline: 1rem;

  gap: 2rem;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0 7px 7px 0 ${({ theme: { color } }) => color.shadow};
  border-radius: 10px;
  background: ${({ theme: { color } }) => color.elements};
  flex-direction: column;
  justify-content: space-around;
  .card-img {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
    img {
      width: 100%;
      height: 100%;
      min-height: 200px;
      max-height: 200px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  }
  .card-info {
    height: 100%;
    padding: 1.5rem 1.5rem 3rem 2rem;
    color: ${({ theme: { color } }) => color.text};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: var(--font-family);
    h1 {
      font-size: 24px;
      margin-block-end: 1rem;
    }
    ul {
      li {
        span {
          font-weight: 600;
        }
        font-weight: 300;
        font-size: var(--font-size_home);
        list-style: none;
        margin-block: 0.4rem;
      }
    }
  }
`;
