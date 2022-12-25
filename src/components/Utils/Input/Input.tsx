import { StyledInputWrapper } from "./styles";

interface IInput {
  type: string;
  placeholder: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id: string;
  label: string;
}

function Input({ type, placeholder, onChange, value, id, label }: IInput) {
  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledInputWrapper>
  );
}

export default Input;
