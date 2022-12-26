import styled from "styled-components";

export const StyledBoardItem = styled.div`
  background: ${(props) => props.theme.backgroundColors.item};
  border-radius: 15px;
  padding: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.1s;

  .name {
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
`;
