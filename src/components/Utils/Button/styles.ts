import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  variant?: boolean;
  pulsing?: boolean;
}

export const StyledButton = styled.button<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: none;
  border-radius: 15px;
  background: ${(props) =>
    !props.variant
      ? (props) => props.theme.utils.itemSelectedOrBorderOrButton
      : (props) => props.theme.utils.todoListBorder};

  color: ${(props) => props.theme.textColors.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant
        ? (props) => props.theme.utils.itemSelectedOrBorderOrButton
        : (props) => props.theme.utils.todoListBorder};
  }

  animation: ${(props) =>
    props.pulsing ? "pulsingAnimation 1s infinite" : "none"};

  @keyframes pulsingAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
