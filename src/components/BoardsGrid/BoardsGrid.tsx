import { ReactNode } from "react";

import { StyledGrid } from "./styles";

function BoardsGrid({ children }: { children: ReactNode }) {
  return (
    <StyledGrid>
      <div>{children}</div>
    </StyledGrid>
  );
}

export default BoardsGrid;
