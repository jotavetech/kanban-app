import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  left: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 65px;
  background: ${(props) => props.theme.backgroundColors.menu};
  width: calc(100% - 230px);
  z-index: 1000;

  h1 {
    user-select: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    filter: grayscale(1) invert(1);
    width: 32px;
    height: 32px;
  }

  @media (max-width: 815px) {
    left: 0;
    width: 100%;
    padding: 0 10px;

    div {
      gap: 5px;
    }

    h1 {
      font-size: ${(props) => props.theme.fontSizes.md};
    }

    img {
      width: 25px;
      height: 25px;
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    button:first-child {
      width: 35px;
      height: 35px;
      margin-right: 5px;
    }
  }
`;
