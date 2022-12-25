import styled from "styled-components";

export const StyledEmptyImage = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    img {
      width: 300px;
    }
  }
`;
