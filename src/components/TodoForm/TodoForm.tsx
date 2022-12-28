import { useContext, useEffect, useState } from "react";

import Button from "../Utils/Button";
import Input from "../Utils/Input";

import CloseIcon from "../../assets/close.png";

import { StyledTodoForm } from "./styles";

import { useLocation } from "react-router-dom";

import { BoardsContext } from "../../contexts/boardsContext";

interface ITodoForm {
  open: boolean;
  onClose: () => void;
}

type StatusType = "todo" | "doing" | "done";

function TodoForm({ open, onClose }: ITodoForm) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<StatusType>("todo");
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(0, 6) !== "/board") onClose();
  }, [location]);

  const { createNewTask, getTasks } = useContext(BoardsContext);

  const boardId = location.pathname.slice(7, location.pathname.length);

  const createTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) return setError("You have to pass a name");

    setError("");

    createNewTask({
      boardId,
      name,
      description,
      status,
    });

    getTasks(boardId);

    onClose();
    setDescription("");
    setName("");
    setStatus("todo");
  };

  if (!open) return null;

  return (
    <StyledTodoForm>
      <form className="animeBottom" onSubmit={createTask}>
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
          onChange={({ target }) => setName(target.value)}
          value={name}
          error={error}
          maxLength={70}
        />
        <Input
          id="taskDescription"
          label="Description"
          placeholder="This task is for..."
          type="text"
          onChange={({ target }) => setDescription(target.value)}
          value={description}
          maxLength={250}
        />

        <div className="status">
          <label htmlFor="taskStatus">Status: </label>
          <select
            name="taskStatus"
            id="taskStatus"
            value={status}
            onChange={({ target }: any) => setStatus(target.value)}
          >
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
        />
      </form>
    </StyledTodoForm>
  );
}

export default TodoForm;
