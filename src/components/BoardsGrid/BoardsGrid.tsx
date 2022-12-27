import { ReactNode } from "react";

import { StyledGrid } from "./styles";

function BoardsGrid({ children }: { children: ReactNode }) {
  return (
    <StyledGrid className="animeLeft">
      <div>{children}</div>
    </StyledGrid>
  );
}

export default BoardsGrid;
