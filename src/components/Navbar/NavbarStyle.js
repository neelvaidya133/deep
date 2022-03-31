import styled from "styled-components";

export const Nav = styled.div`
  height: 4rem;
  width: 100%;
  background-color: #fff;
`;
export const NavElement = styled.div`
  padding-left: 2rem;
`;

export const NavMenu = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuItem = styled.div`
  a {
    color: #000;
    padding-right: 3rem;
    text-decoration: none;
  }
`;

export const Call = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5rem;
`;
export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding-left: 1rem;
    margin: 0;
  }
`;

export const BUTTON = styled.div`
  padding-left: 1rem;
  a {
    color: blue;
    text-decoration: none;
  }
`;
