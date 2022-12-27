import { useState } from "react";

import { useParams } from "react-router-dom";

import TodosList from "../../components/TodosList";
import EmptyImage from "../../components/Utils/EmptyImage";

import { StyledBoardPage } from "./styles";

function Board() {
  const { id } = useParams();
  const [todos, setTodos] = useState([1]);

  return (
    <StyledBoardPage>
      {todos.length < 1 ? (
        <EmptyImage
          emptyText1="Your board is empty :("
          emptyText2="Add a new task"
        />
      ) : (
        <TodosList />
      )}
    </StyledBoardPage>
  );
}

export default Board;
