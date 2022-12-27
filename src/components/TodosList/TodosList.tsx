import { ReactNode } from "react";
import List from "./List";

import { StyledTodosList } from "./styles";

function TodosList() {
  return (
    <StyledTodosList className="animeLeft">
      <List type={"todo"} />
      <List type={"doing"} />
      <List type={"done"} />
    </StyledTodosList>
  );
}

export default TodosList;
