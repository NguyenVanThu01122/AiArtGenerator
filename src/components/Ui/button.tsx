import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonGeneralProps extends ButtonProps {
  className?: string;
}
const ButtonGeneral = ({
  children,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonGeneralProps) => {
  return (
    <Button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest} //: Sử dụng rest parameter để chấp nhận tất cả các props khác mà không cần phải định nghĩa từng prop một.
    >
      {children}
    </Button>
  );
};

export default ButtonGeneral;
