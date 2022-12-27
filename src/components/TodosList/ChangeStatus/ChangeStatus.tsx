import { StyledChangeStatus } from "./styles";

import CloseIcon from "../../../assets/close.png";

import Button from "../../Utils/Button";

interface IChangeStatus {
  open: boolean;
  onClose: () => void;
}

function ChangeStatus({ open, onClose }: IChangeStatus) {
  if (!open) return null;

  return (
    <StyledChangeStatus>
      <form className="animeLeft">
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
          <select name="taskStatus" id="taskStatus">
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
