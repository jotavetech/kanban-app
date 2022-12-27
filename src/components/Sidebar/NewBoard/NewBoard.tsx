import React from "react";

import Button from "../../Utils/Button";
import Input from "../../Utils/Input";

import CloseIcon from "../../../assets/close.png";

import { StyledNewBoard } from "./styles";

interface INewBoard {
  open: boolean;
  onClose: () => void;
}

function NewBoard({ open, onClose }: INewBoard) {
  if (!open) return null;

  return (
    <StyledNewBoard>
      <form>
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
        />
        <Button
          height="50px"
          width="100%"
          onClick={() => console.log("oi")}
          text="Create board"
          type="submit"
          variant={true}
        />
      </form>
    </StyledNewBoard>
  );
}

export default NewBoard;
