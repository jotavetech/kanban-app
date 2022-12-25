import React, { useState } from "react";
import EmptyImage from "../../components/Utils/EmptyImage";

import { StyledHome } from "./styles";

function Home() {
  const [boards, setBoards] = useState([]);

  return (
    <StyledHome>
      {boards.length < 1 ? (
        <EmptyImage
          emptyText1="You don't have any boards"
          emptyText2="Create your new board"
          emptyBoard={true}
        />
      ) : (
        <h1>oi</h1>
      )}
    </StyledHome>
  );
}

export default Home;
