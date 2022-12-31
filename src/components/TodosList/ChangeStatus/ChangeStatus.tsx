import { StyledChangeStatus } from "./styles";

import CloseIcon from "../../../assets/close.png";

import Button from "../../Utils/Button";

import { useContext, useState } from "react";

import { BoardsContext } from "../../../contexts/boardsContext";

interface IChangeStatus {
  open: boolean;
  onClose: () => void;
  id: string | undefined;
  actualStatusValue: Status;
  boardId: string;
}

type Status = "todo" | "doing" | "done";

function ChangeStatus({
  open,
  onClose,
  id,
  actualStatusValue,
  boardId,
}: IChangeStatus) {
  const [actualStatus, setActualStatus] = useState<Status>(actualStatusValue);

  const oldStatusValue = actualStatusValue;

  if (!open) return null;

  const { updateTask } = useContext(BoardsContext);

  const changeTaskStatus = (e: React.FormEvent) => {
    e.preventDefault();

    if (oldStatusValue === actualStatus) return onClose();
    else {
      updateTask(id, actualStatus, boardId);
      onClose();
    }
  };

  return (
    <StyledChangeStatus>
      <form className="animeLeft" onSubmit={changeTaskStatus}>
        <button
          aria-label="close new task form"
          className="closeBtn"
          type="button"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="close button image" />
        </button>
        <div className="status">
          <label htmlFor="taskStatus">Status: </label>
          <select
            name="taskStatus"
            id="taskStatus"
            value={actualStatus}
            onChange={({ target }: any) => setActualStatus(target.value)}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <Button
          height="50px"
          onClick={() => console.log("mudando")}
          text="Done"
          width="100%"
          type="submit"
          variant={true}
        />
      </form>
    </StyledChangeStatus>
  );
}

export default ChangeStatus;
