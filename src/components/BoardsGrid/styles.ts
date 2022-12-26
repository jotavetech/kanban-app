import styled from "styled-components";

export const StyledGrid = styled.div`
  > div {
    padding: 10px;
    width: 1100px;
    display: grid;
    grid: auto-flow / repeat(5, 1fr);
  }

  @media (max-width: 1450px) {
    > div {
      width: 1000px;
      grid: auto-flow / repeat(4, 1fr);
    }
  }

  @media (max-width: 1250px) {
    > div {
      width: 700px;
      grid: auto-flow / repeat(3, 1fr);
    }
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      grid: auto-flow / repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    > div {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      padding: 5px 20px;

      div {
        width: 100%;
      }
    }
  }
`;
