import Input from "@mui/material/Input";

interface InputGeneralType {
  id?: string;
  type?: string;
  checked?: boolean;
  onClick?: () => void;
  onChange?: (value: any) => void;
  className?: string;
  inputProps?: any;
}

const InputGeneral = ({
  id,
  type,
  onChange,
  className,
  inputProps,
  onClick,
  checked,
  ...rest
}: InputGeneralType) => {
  return (
    <Input
      id={id}
      type={type}
      inputProps={{ ...inputProps }}
      onChange={onChange}
      onClick={onClick}
      className={className}
      {...rest}
    />
  );
};

export default InputGeneral;
