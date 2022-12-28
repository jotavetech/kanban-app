import styled from "styled-components";

export const StyledBoardItem = styled.div`
  background: ${(props) => props.theme.backgroundColors.item};
  border-radius: 15px;
  padding: 10px;
  width: 330px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.1s;
  position: relative;

  .name {
    h1 {
      font-size: 3rem;
    }
    display: flex;
    gap: 10px;
  }

  img {
    width: 27px;
    filter: grayscale(1) invert(1);
  }

  p {
    color: ${(props) => props.theme.textColors.secondary};
  }

  img:last-child {
    cursor: pointer;
    align-self: flex-end;
  }

  @media (max-width: 500px) {
    margin: 5px 0;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.3);
  }

  .deleteBoard {
    background: ${(props) => props.theme.backgroundColors.menu};
    padding: 10px;
    border-radius: 15px;
    position: absolute;
    bottom: 0px;
    right: 0;
    width: 130px;
    cursor: default;

    button {
      background: transparent;
      font-size: ${(props) => props.theme.fontSizes.md};
      font-family: "Poppins", sans-serif;
      color: ${(props) => props.theme.textColors.primary};
      border: none;
      margin-right: 30px;
      cursor: pointer;
    }
  }
`;
