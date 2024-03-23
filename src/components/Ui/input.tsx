import Input from "@mui/material/Input";

interface InputGeneralType {
  type?: string;
  
  onChange?: (value: any) => void;
  className?: string;
  inputProps?: any;
}

const InputGeneral = ({
  type,
  onChange,
  className,
  inputProps,
  ...rest
}: InputGeneralType) => {
  return (
    <Input
      type={type}
      inputProps={{ ...inputProps }}
      onChange={onChange}
      className={className}
      {...rest}
    />
  );
};

export default InputGeneral;
