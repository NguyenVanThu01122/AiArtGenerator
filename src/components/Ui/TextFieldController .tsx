import { TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import TextFieldCommon, { TextFieldType } from "./textFieldCommon";
interface TextFieldControllerProps {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  rules?: Object;
  label: string;
  type?: TextFieldType;
  variant?: TextFieldProps["variant"];
  margin?: TextFieldProps["margin"];
  fullWidth?: boolean;
  errors: Record<string, any>;
  InputProps?: any;
}
const TextFieldController = ({
  name,
  control,
  defaultValue,
  rules,
  label,
  type,
  variant,
  margin,
  fullWidth,
  errors,
  InputProps,
}: TextFieldControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextFieldCommon
          field={field}
          label={label}
          type={type}
          variant={variant}
          margin={margin}
          fullWidth={fullWidth}
          error={!!errors[name]}
          InputProps={{ className: "white-text-input", ...InputProps }}
          InputLabelProps={{
            className: "custom-label"
          }}
          helperText={
            errors[name]
              ? typeof errors[name].message === "string"
                ? errors[name].message
                : ""
              : undefined
          }
        />
      )}
    />
  );
};

export default TextFieldController;
