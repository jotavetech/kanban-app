import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import TodosList from "../../components/TodosList";
import EmptyImage from "../../components/Utils/EmptyImage";

import { BoardsContext } from "../../contexts/boardsContext";
import { ITask } from "../../types/boardsAndTasks";

import { StyledBoardPage } from "./styles";

function Board() {
  const { id } = useParams();

  const { tasks, getTasks } = useContext(BoardsContext);

  useEffect(() => {
    if (id) {
      getTasks(id);
    }
  }, [id]);

  return (
    <StyledBoardPage>
      {!tasks || tasks.length < 1 ? (
        <EmptyImage
          emptyText1="Your board is empty :("
          emptyText2="Add a new task"
        />
      ) : (
        <TodosList tasks={tasks} />
      )}
    </StyledBoardPage>
  );
}

export default Board;
