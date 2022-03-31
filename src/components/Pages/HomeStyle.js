import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 2rem;
  padding: 5rem;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    maxwidth: 100%;
    flexbasis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    img {
      margin-right: 2rem;
    }
  }
`;
export const InfoContainer = styled.div`
  padding-right: 2rem;
`;

export const Title = styled.div`
  h1 {
    font-size: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 7rem;
`;

export const BtnWrap = styled.div``;

export const BTN = styled.div`
  margin-top: 2rem;
  display: flex;

  align-items: center;

  a {
    margin-right: 1rem;
    border: 0.08rem solid black;
    border-radius: 3rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
  }
`;
