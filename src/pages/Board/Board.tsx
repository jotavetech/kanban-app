import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";

import TodosList from "../../components/TodosList";
import EmptyImage from "../../components/Utils/EmptyImage";

import { auth } from "../../config/Firebase";

import { BoardsContext } from "../../contexts/boardsContext";

import { StyledBoardPage } from "./styles";

function Board() {
  const { id } = useParams();

  const { tasks, getTasks } = useContext(BoardsContext);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user && id) {
      getTasks(id);
    }
  }, [user, id]);

  return (
    <StyledBoardPage>
      {!tasks || tasks.length < 1 ? (
        <EmptyImage
          emptyText1="Your board is empty :("
          emptyText2="Add a new task"
        />
      ) : (
        <TodosList tasks={tasks} boardId={id ? id : "1"} />
      )}
    </StyledBoardPage>
  );
}

export default Board;
