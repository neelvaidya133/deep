import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem;
  flex-direction: column;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const BtnWrap = styled.div`
  padding-right: 2rem;
`;

export const BTN = styled.div`
  padding-top: 2rem;
  display: flex;

  a {
    border: 1px solid black;
    border-radius: 3rem;
    padding: 1rem 2rem 1rem 2rem;
    text-decoration: none;
  }
`;
