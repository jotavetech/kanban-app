import { StyledBoardItem } from "./styles";

import NotesIcon from "../../../assets/notes-icon.svg";
import OptionsIcon from "../../../assets/options.png";

import { useNavigate } from "react-router-dom";

interface ItemProps {
  props: {
    id: string;
    name: string;
  };
}

function BoardItem({ props }: ItemProps) {
  const navigate = useNavigate();

  const { name, id } = props;

  return (
    <StyledBoardItem active={true} onClick={() => navigate(`/board/${id}`)}>
      <div>
        <img src={NotesIcon} />
        <p>{name}</p>
      </div>
      <img src={OptionsIcon} />
    </StyledBoardItem>
  );
}

export default BoardItem;
