import { StyledInputWrapper } from "./styles";

interface IInput {
  type: string;
  placeholder: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id: string;
  label: string;
  error?: string;
  maxLength?: number;
}

function Input({
  type,
  placeholder,
  onChange,
  value,
  id,
  label,
  error,
  maxLength,
}: IInput) {
  return (
    <StyledInputWrapper error={error}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      />
      {error && <p className="errorMsg">{error}</p>}
    </StyledInputWrapper>
  );
}

export default Input;
