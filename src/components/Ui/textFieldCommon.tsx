import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
// Định nghĩa enum cho các loại dữ liệu của TextField
export enum TextFieldType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  TEL = "tel",
}
interface TextFieldCommonProps {
  field?: TextFieldProps;
  id?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  variant?: "standard" | "outlined" | "filled";
  type?: TextFieldType;
  style?: React.CSSProperties; // Định kiểu lại cho style
  defaultValue?: string | number; // Định kiểu lại cho defaultValue
  InputLabelProps?: React.ComponentProps<typeof TextField>["InputLabelProps"]; // Sử dụng kiểu dữ liệu từ TextFieldProps
  color?: "primary" | "secondary";
  InputProps?: Partial<FilledInputProps & OutlinedInputProps & InputProps>; // Sử dụng kiểu dữ liệu hợp lệ cho InputProps
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextFieldCommon({
  label = "gray",
  field,
  id,
  error,
  helperText,
  fullWidth,
  margin,
  variant,
  type,
  style,
  defaultValue,
  InputLabelProps,
  color,
  InputProps,
  onChange,
}: TextFieldCommonProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event); // Truyền sự kiện React ChangeEvent thay vì chỉ truyền giá trị
    }
  };
  return (
    <TextField
      {...field}
      id={id}
      label={label}
      fullWidth={fullWidth}
      margin={margin}
      variant={variant}
      error={error}
      helperText={helperText}
      type={type}
      style={style}
      InputLabelProps={{ ...InputLabelProps }}
      color={color}
      InputProps={InputProps}
      defaultValue={defaultValue}
      // onChange={onChange}
    />
  );
}
