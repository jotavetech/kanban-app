import { useState } from "react";

import BoardGridItem from "../../components/BoardsGrid/BoardGridItem";
import EmptyImage from "../../components/Utils/EmptyImage";
import BoardsGrid from "../../components/BoardsGrid";

import { StyledHome } from "./styles";

import BoardsMock from "../../mocks/boards.json";

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
