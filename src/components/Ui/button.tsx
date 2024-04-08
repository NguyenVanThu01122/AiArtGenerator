import Button, { ButtonProps } from "@mui/material/Button";
import { useTranslation } from "react-i18next";
interface ButtonGeneralProps extends ButtonProps {
  className?: string;
  loading?: boolean;
  i18nKey?: string;
}
const ButtonGeneral = ({
  children,
  className,
  onClick,
  disabled,
  loading,
  i18nKey,
  ...rest
}: ButtonGeneralProps) => {
  const { t } = useTranslation();
  return (
    <Button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest} //: Sử dụng rest parameter để chấp nhận tất cả các props khác mà không cần phải định nghĩa từng prop một.
    >
      {i18nKey ? t(i18nKey) : children}
    </Button>
  );
};

export default ButtonGeneral;
