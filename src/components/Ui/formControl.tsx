import { FormControl } from "@mui/material";
interface FormControlProps {
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  required?: boolean;
}
// Component FormControl
export default function FormControlCommon({
  children,
  disabled,
  error,
  fullWidth,
  margin,
  required,
}: FormControlProps) {
  return (
    <FormControl
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
      
    >
      {children}
    </FormControl>
  );
}
