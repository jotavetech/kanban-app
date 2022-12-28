import Button from "../Button";
import { StyledConfirmMenu } from "./styles";

interface IConfirmMenu {
  text?: string;
  onConfirm: () => void;
  onClose: () => void;
  open: boolean;
}

function ConfirmMenu({ text, onConfirm, onClose, open }: IConfirmMenu) {
  if (!open) return null;

  return (
    <StyledConfirmMenu>
      <div className="animeBottom">
        <p>{text ? text : "Are you sure?"}</p>
        <div>
          <Button
            onClick={onConfirm}
            text="Confirm"
            height="50px"
            width="100px"
            variant={true}
            aria-label="Confirm board delete"
          />
          <Button
            onClick={onClose}
            text="Cancel"
            height="50px"
            width="100px"
            aria-label="Cancel board delete"
          />
        </div>
      </div>
    </StyledConfirmMenu>
  );
}

export default ConfirmMenu;
