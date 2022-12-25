import { ReactNode } from "react";
import { StyledContainer } from "./styles";

function Container({ children }: { children: ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
