import { useEffect } from "react";

import Button from "../Utils/Button";
import Input from "../Utils/Input";

import CloseIcon from "../../assets/close.png";

import { StyledTodoForm } from "./styles";

import { useLocation } from "react-router-dom";

interface ITodoForm {
  open: boolean;
  onClose: () => void;
}

function TodoForm({ open, onClose }: ITodoForm) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(0, 6) !== "/board") onClose();
  }, [location]);

  if (!open) return null;

  return (
    <StyledTodoForm>
      <form className="animeBottom">
        <button
          aria-label="close new task form"
          className="closeBtn"
          type="button"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="close button image" />
        </button>
        <Input
          id="taskName"
          label="Name"
          placeholder="My new task..."
          type="text"
        />
        <Input
          id="taskDescription"
          label="Description"
          placeholder="This task is for..."
          type="text"
        />

        <div className="status">
          <label htmlFor="taskStatus">Status: </label>
          <select name="taskStatus" id="taskStatus">
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>

        <Button
          height="50px"
          width="100%"
          text="Submit task"
          variant={true}
          type="submit"
          onClick={() => console.log("oi")}
        />
      </form>
    </StyledTodoForm>
  );
}

export default TodoForm;
