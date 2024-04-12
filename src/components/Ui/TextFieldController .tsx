import { TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import TextFieldCommon, { TextFieldType } from "./textFieldCommon";
interface TextFieldControllerProps {
  sx?: any;
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  rules?: Object;
  label?: string;
  type?: TextFieldType;
  variant?: TextFieldProps["variant"];
  margin?: TextFieldProps["margin"];
  fullWidth?: boolean;
  errors: Record<string, any>;
  InputProps?: any;
  InputLabelProps?: any;
  onchange?: (e: any) => void;
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
  onchange,
  sx,
}: TextFieldControllerProps) => {
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      // render ra TextFieldCommon
      render={({ field }) => (
        <TextFieldCommon
          field={field}
          label={label}
          type={type}
          variant={variant}
          margin={margin}
          fullWidth={fullWidth}
          error={!!errors[name]}
          onChange={onchange}
          InputProps={{ className: "custom-text-field", ...InputProps }}
          InputLabelProps={{
            className: "custom-label",
          }}
          helperText={
            errors[name]
              ? typeof errors[name].message === "string"
                ? t(errors[name].message)
                : ""
              : undefined
          }
        />
      )}
    />
  );
};

export default TextFieldController;
