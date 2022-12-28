import { StyledEmptyImage } from "./styles";

import Empty from "../../../assets/empty.png";

import { useEffect, useState } from "react";

import NewBoard from "../../Sidebar/NewBoard";
import Button from "../Button";

import { useLocation } from "react-router-dom";

interface IEmptyImage {
  emptyText1: string;
  emptyText2: string;
  emptyBoard?: boolean;
}

function EmptyImage({ emptyText1, emptyText2, emptyBoard }: IEmptyImage) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <NewBoard open={menuOpen} onClose={() => setMenuOpen(false)} />
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
            onClick={() => setMenuOpen(true)}
          />
        )}
      </StyledEmptyImage>
    </>
  );
}

export default EmptyImage;
