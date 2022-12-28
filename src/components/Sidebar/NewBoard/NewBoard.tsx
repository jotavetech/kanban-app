import { useContext, useState } from "react";

import Button from "../../Utils/Button";
import Input from "../../Utils/Input";

import CloseIcon from "../../../assets/close.png";

import { StyledNewBoard } from "./styles";

import { BoardsContext } from "../../../contexts/boardsContext";

interface INewBoard {
  open: boolean;
  onClose: () => void;
}

function NewBoard({ open, onClose }: INewBoard) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { createNewBoard } = useContext(BoardsContext);

  const createBoard = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) return setError("You have to set a name");
    setError("");
    createNewBoard(name);
    onClose();
  };

  if (!open) return null;

  return (
    <StyledNewBoard>
      <form onSubmit={createBoard} className="animeLeft">
        <button
          aria-label="close new task form"
          className="closeBtn"
          type="button"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="close button image" />
        </button>
        <Input
          id="boardName"
          label="Board name"
          placeholder="Study board.."
          type="text"
          onChange={({ target }) => setName(target.value)}
          value={name}
          error={error}
          maxLength={15}
        />
        <Button
          height="50px"
          width="100%"
          text="Create board"
          type="submit"
          variant={true}
        />
      </form>
    </StyledNewBoard>
  );
}

export default NewBoard;
