import styled from "styled-components";

export const StyledBoardsList = styled.ul`
  width: 85%;
  margin-top: 52px;
  margin-bottom: 10px;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.textColors.secondary};
    margin-bottom: 10px;
  }

  .scrollBoards {
    max-height: 400px;
    overflow-y: auto;
  }
`;
