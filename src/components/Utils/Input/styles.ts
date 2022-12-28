import styled from "styled-components";

interface Props {
  error?: string;
}

export const StyledInputWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  label {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.textColors.secondary};
    margin-bottom: 5px;
  }

  input {
    height: 50px;
    border-radius: 15px;
    width: 100%;
    color: ${(props) => props.theme.textColors.primary};
    background: ${(props) => props.theme.backgroundColors.delete};
    border: ${(props) => (props.error ? "2px solid red" : "none")};
    font-size: 1.8rem;
    padding: 0 20px;
    outline: none;
    font-family: "Poppins", sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  input::placeholder {
    color: ${(props) => props.theme.textColors.secondary};
  }

  input:focus {
    opacity: 1;
  }
`;
