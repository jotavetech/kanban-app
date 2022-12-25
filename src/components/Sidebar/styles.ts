import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const StyledSidebar = styled.aside<Props>`
  width: 230px;
  height: 100vh;
  position: fixed;
  background: ${(props) => props.theme.backgroundColors.menu};
  border-right: 1px ${(props) => props.theme.utils.itemSelectedOrBorderOrButton}
    solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  > div:first-child {
    padding-top: 17px;

    h1 {
      position: relative;
    }

    h1::before {
      content: "";
      width: 194px;
      height: 1px;
      background: ${(props) => props.theme.utils.itemSelectedOrBorderOrButton};
      position: absolute;
      bottom: -10px;
      left: -35px;
    }
  }

  .login {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .closeSidebar {
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    border-radius: 50%;
    top: 5px;
    right: 5px;
    z-index: 10;
    cursor: pointer;
    display: none;

    img {
      max-width: 60%;
      filter: grayscale(1) invert(1);
    }
  }

  &.openedAnimation {
    animation: openMenuAnimation 0.2s backwards;
  }

  @keyframes openMenuAnimation {
    from {
      transform: translateX(-300px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 815px) {
    transform: ${(props) =>
      props.isOpen ? "translateX(0px)" : "translateX(-300px)"};

    .closeSidebar {
      display: block;
    }
  }
`;
