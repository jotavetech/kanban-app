import styled from "styled-components";

export const StyledTodosList = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 10px;
  }

  ul {
    overflow-y: auto;
    height: calc(700px - 55px);
    padding: 10px;
    list-style: none;
    border: 1px solid ${(props) => props.theme.utils.todoListBorder};
    border-radius: 15px;

    li {
      background: ${(props) => props.theme.backgroundColors.item};
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: filter 0.2s;

      span {
        color: ${(props) => props.theme.textColors.secondary};
      }
    }

    li:hover {
      filter: brightness(1.1);
    }
  }
`;
