import React from "react";

import { StyledBoardItem } from "./styles";

import NoteIcon from "../../../assets/notes-icon.svg";
import OptionsIcon from "../../../assets/options.png";

import { useNavigate } from "react-router-dom";

interface IBoardGridItem {
  id: string;
  name: string;
  tasks: {
    todo: number;
    done: number;
  };
}

function BoardGridItem({ id, name, tasks }: IBoardGridItem) {
  const navigate = useNavigate();

  return (
    <StyledBoardItem onClick={() => navigate(`/board/${id}`)}>
      <div className="name">
        <img src={NoteIcon} />
        <h1>{name}</h1>
      </div>
      <p>
        {tasks.todo}/{tasks.done} tasks done
      </p>
      <img src={OptionsIcon} />
    </StyledBoardItem>
  );
}

export default BoardGridItem;
