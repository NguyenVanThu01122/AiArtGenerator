import { FormControl } from "@mui/material";
interface FormControlProps {
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  required?: boolean;
  size?: "small" | "medium";
}
// Component FormControl
export default function FormControlCommon({
  children,
  disabled,
  error,
  fullWidth,
  margin,
  required,
  size,
}: FormControlProps) {
  return (
    <FormControl
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
      size={size}
    >
      {children}
    </FormControl>
  );
}
