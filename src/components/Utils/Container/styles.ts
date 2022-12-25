import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  width: calc(100% - 230px);
  height: calc(100vh - 65px);
  left: 230px;
  top: 65px;

  @media (max-width: 815px) {
    width: 100%;
    left: 0;
  }
`;
