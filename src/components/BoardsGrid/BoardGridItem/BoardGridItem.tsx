import { useContext, useState } from "react";

import { StyledBoardItem } from "./styles";

import NoteIcon from "../../../assets/notes-icon.svg";
import OptionsIcon from "../../../assets/options.png";

import { useNavigate } from "react-router-dom";

import { BoardsContext } from "../../../contexts/boardsContext";

import ConfirmMenu from "../../Utils/ConfirmMenu";

interface IBoardGridItem {
  id: string;
  name: string;
  tasks: {
    todo: number;
    done: number;
  };
}

function BoardGridItem({ id, name, tasks }: IBoardGridItem) {
  const [deleteMenuOpen, setDeleteMenuOpen] = useState(false);
  const [confirmMenu, setConfirmMenu] = useState(false);

  const navigate = useNavigate();

  const { deleteABoard } = useContext(BoardsContext);

  const confirmDelete = () => {
    deleteABoard(id);
    setConfirmMenu(false);
  };

  return (
    <>
      <ConfirmMenu
        open={confirmMenu}
        onClose={() => setConfirmMenu(false)}
        onConfirm={confirmDelete}
        text="Are you sure you want to delete?"
      />
      <StyledBoardItem>
        <div className="name" onClick={() => navigate(`/board/${id}`)}>
          <img src={NoteIcon} />
          <h1>{name}</h1>
        </div>
        <p>
          {tasks.todo}/{tasks.done} tasks done
        </p>
        {deleteMenuOpen && (
          <div className="deleteBoard animeLeft">
            <button
              aria-label="Delete board button"
              onClick={() => setConfirmMenu(true)}
            >
              Delete
            </button>
          </div>
        )}
        <img
          src={OptionsIcon}
          onClick={() => setDeleteMenuOpen(!deleteMenuOpen)}
        />
      </StyledBoardItem>
    </>
  );
}

export default BoardGridItem;
