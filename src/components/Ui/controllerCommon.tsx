import { Controller } from "react-hook-form";

interface ControllerProps {
  name: string;
  rules?: Record<string, unknown>;
  defaultValue?: string;
  render: (field: any) => JSX.Element;
  control?: any;
}

const ControllerCommon = ({
  name,
  rules,
  defaultValue,
  render,
  control,
}: ControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      rules={rules}
      render={({ field }) => render(field)}
    />
  );
};

export default ControllerCommon;
