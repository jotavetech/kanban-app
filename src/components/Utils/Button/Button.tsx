import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  text: string;
  icon?: any;
  width: string;
  height: string;
  variant?: boolean;
  pulsing?: true;
  type?: "button" | "submit" | "reset";
}

function Button({
  onClick,
  text,
  icon,
  width,
  height,
  variant,
  pulsing,
  type,
}: ButtonProps) {
  return (
    <StyledButton
      type={type ? type : "button"}
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
