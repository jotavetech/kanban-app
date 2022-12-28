import { useContext, useEffect, useState } from "react";

import BoardGridItem from "../../components/BoardsGrid/BoardGridItem";
import EmptyImage from "../../components/Utils/EmptyImage";
import BoardsGrid from "../../components/BoardsGrid";

import { StyledHome } from "./styles";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/Firebase";

import { useNavigate } from "react-router-dom";

import { BoardsContext } from "../../contexts/boardsContext";

function Home() {
  const { boards, getBoards } = useContext(BoardsContext);

  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (!user) navigate("/login");
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (user) getBoards();
  }, [user]);

  if (loading) return <h1>Loading</h1>;

  return (
    <StyledHome>
      {!boards || boards.length < 1 ? (
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
              tasks={{ todo: 0, done: 0 }}
            />
          ))}
        </BoardsGrid>
      )}
    </StyledHome>
  );
}

export default Home;
