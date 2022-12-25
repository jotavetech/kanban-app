import styled from "styled-components";

export const StyledBoardItem = styled.div`
  background: ${(props) => props.theme.backgroundColors.item};
  border-radius: 15px;
  padding: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 5px;

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
`;
