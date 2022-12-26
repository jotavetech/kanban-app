import { useState } from "react";
import BoardsGrid from "../../components/BoardsGrid";

import EmptyImage from "../../components/Utils/EmptyImage";

import { StyledHome } from "./styles";

import BoardsMock from "../../mocks/boards.json";
import BoardGridItem from "../../components/BoardsGrid/BoardGridItem";

function Home() {
  const [boards, setBoards] = useState(BoardsMock.boards);

  return (
    <StyledHome>
      {boards.length < 1 ? (
        <EmptyImage
          emptyText1="You don't have any boards"
          emptyText2="Create your new board"
          emptyBoard={true}
        />
      ) : (
        <BoardsGrid>
          {boards.map((board) => (
            <BoardGridItem
              key={board.id}
              id={board.id}
              name={board.name}
              tasks={board.tasks}
            />
          ))}
        </BoardsGrid>
      )}
    </StyledHome>
  );
}

export default Home;
