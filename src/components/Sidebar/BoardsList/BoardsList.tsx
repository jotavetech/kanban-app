import { useContext, useEffect, useState } from "react";

import BoardItem from "../BoardItem";

import { StyledBoardsList } from "./styles";

import { BoardsContext } from "../../../contexts/boardsContext";

function BoardsList() {
  const { boards, getBoards } = useContext(BoardsContext);

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <StyledBoardsList>
      <h2>Your boards</h2>
      {boards && boards.length > 0 ? (
        <div className="scrollBoards">
          {boards.map((board) => (
            <BoardItem key={board.id} props={board} />
          ))}
        </div>
      ) : (
        <h2 className="createNewBoard">Create a new board!</h2>
      )}
    </StyledBoardsList>
  );
}

export default BoardsList;
