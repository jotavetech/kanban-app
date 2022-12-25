import { StyledEmptyImage } from "./styles";

import Empty from "../../../assets/empty.png";
import Button from "../Button";

interface IEmptyImage {
  emptyText1: string;
  emptyText2: string;
  emptyBoard?: boolean;
}

function EmptyImage({ emptyText1, emptyText2, emptyBoard }: IEmptyImage) {
  return (
    <StyledEmptyImage>
      <img src={Empty} />
      <p>{emptyText1}</p>
      <p>{emptyText2}</p>
      {emptyBoard && (
        <Button
          text="+ Add New Board"
          width="230px"
          height="50px"
          variant={true}
          pulsing={true}
          onClick={() => console.log("oi")}
        />
      )}
    </StyledEmptyImage>
  );
}

export default EmptyImage;
