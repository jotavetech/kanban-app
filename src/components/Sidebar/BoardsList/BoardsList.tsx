import { useEffect, useState } from "react";

import BoardItem from "../BoardItem";

import { StyledBoardsList } from "./styles";

import boardsMock from "../../../mocks/boards.json";

function BoardsList() {
  const [boards, setBoards] = useState(boardsMock.boards);

  useEffect(() => {
    // setBoards([]);
  }, []);

  return (
    <StyledBoardsList>
      <h2>Your boards</h2>
      {boards.length > 0 ? (
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
