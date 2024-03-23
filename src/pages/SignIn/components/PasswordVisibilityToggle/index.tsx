import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

interface PasswordVisibilityToggleProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordVisibilityToggle = ({
  showPassword,
  setShowPassword,
}: PasswordVisibilityToggleProps) => {
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <InputAdornment
      position="end"
      style={{ color: "gray", background: "black" }}
    >
      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
        {showPassword ? (
          <VisibilityOff style={{ color: "gray" }} />
        ) : (
          <Visibility style={{ color: "gray" }} />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordVisibilityToggle;
