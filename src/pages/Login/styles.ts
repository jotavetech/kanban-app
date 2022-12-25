import styled from "styled-components";

export const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    text-align: center;
    margin-top: 20px;
  }

  > div:last-child {
    max-height: 500px;
    width: 450px;
    background: ${(props) => props.theme.backgroundColors.item};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    button {
      margin-bottom: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;
    height: 100%;

    > div {
      margin-bottom: 20px;
    }

    > a {
      margin-top: 20px;
    }
  }

  @media (max-width: 600px) {
    > div:last-child {
      width: 350px;
    }
  }

  @media (max-width: 400px) {
    > div:last-child {
      width: 300px;

      button {
        margin-bottom: 5px;
      }
    }

    form {
      > div {
        margin-bottom: 10px;
      }
    }
  }
`;
