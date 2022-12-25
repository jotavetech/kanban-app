import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  text: string;
  icon?: any;
  width: string;
  height: string;
  variant?: boolean;
  pulsing?: true;
}

function Button({
  onClick,
  text,
  icon,
  width,
  height,
  variant,
  pulsing,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      variant={variant}
      pulsing={pulsing}
    >
      {icon && <img src={icon} />}
      {text}
    </StyledButton>
  );
}

export default Button;
