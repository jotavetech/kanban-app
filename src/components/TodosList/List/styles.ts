import styled from "styled-components";

interface Props {
  type: "todo" | "doing" | "done";
}

export const StyledList = styled.div<Props>`
  flex-grow: 1;
  height: 700px;
  max-height: 700px;
  max-width: 500px;

  @media (max-width: 1040px) {
    width: 100%;
  }

  .typeTitle {
    display: flex;
    gap: 5px;
    align-items: center;
    margin: 10px 0 10px 10px;

    h2 {
      font-size: ${(props) => props.theme.fontSizes.md};
    }

    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${(props) =>
        props.type === "todo"
          ? props.theme.status.todo
          : props.type === "doing"
          ? props.theme.status.doing
          : props.theme.status.done};
    }
  }
`;
