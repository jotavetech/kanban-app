import styled from "styled-components";

export const StyledTodoForm = styled.div`
  position: fixed;
  width: calc(100% - 230px);
  height: calc(100vh - 65px);
  left: 230px;
  top: 65px;

  @media (max-width: 815px) {
    width: 100%;
    left: 0;
  }

  z-index: 100;
  background: rgb(0 0 0/0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  .closeBtn {
    filter: grayscale(1) invert(1);
    background: transparent;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;

    img {
      max-width: 100%;
    }
  }

  form {
    position: relative;
    margin: 30px;
    border-radius: 15px;
    padding: 20px;
    width: 400px;
    background: ${(props) => props.theme.backgroundColors.item};

    .status {
      margin: 10px 0;
    }
  }

  @media (max-width: 500px) {
    form {
      width: 100%;
    }
  }
`;
