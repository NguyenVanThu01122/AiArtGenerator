import { TextareaAutosize } from "@mui/material";
import { ChangeEvent } from "react";
interface TextAreaProps {
  cols?: number;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextAreaGeneral = ({
  cols,
  value,
  onChange,
  placeholder,
  disabled,
  className,
  style,
}: TextAreaProps) => {
  return (
    <TextareaAutosize
      cols={cols}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      style={style}
    />
  );
};

export default TextAreaGeneral;
