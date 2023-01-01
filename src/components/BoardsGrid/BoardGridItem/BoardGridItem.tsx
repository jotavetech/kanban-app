import { useContext, useEffect, useState } from "react";

import { StyledBoardItem } from "./styles";

import NoteIcon from "../../../assets/notes-icon.svg";
import OptionsIcon from "../../../assets/options.png";

import { useNavigate } from "react-router-dom";

import { BoardsContext } from "../../../contexts/boardsContext";

import ConfirmMenu from "../../Utils/ConfirmMenu";
import { ITask } from "../../../types/boardsAndTasks";

interface IBoardGridItem {
  id: string;
  name: string;
  tasks: {
    todos: ITask[] | undefined;
    done: ITask[] | undefined;
  };
}

function BoardGridItem({ id, name, tasks: { todos, done } }: IBoardGridItem) {
  const [deleteMenuOpen, setDeleteMenuOpen] = useState(false);
  const [confirmMenu, setConfirmMenu] = useState(false);
  const [tasksNumber, setTasksNumber] = useState(0);
  const [doneNumber, setDoneNumber] = useState(0);

  const navigate = useNavigate();

  const { deleteABoard } = useContext(BoardsContext);

  const confirmDelete = () => {
    deleteABoard(id);
    setConfirmMenu(false);
  };

  useEffect(() => {
    if (todos) {
      setTasksNumber(0);
      todos.forEach(() => setTasksNumber((prev) => prev + 1));
    }

    if (done) {
      setDoneNumber(0);
      done.forEach(() => setDoneNumber((prev) => prev + 1));
    }
  }, [todos, done]);

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
          {doneNumber}/{tasksNumber} tasks done
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
