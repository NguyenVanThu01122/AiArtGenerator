import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectGeneral({
  options,
  className,
  value,
  disabled,
  onChange,
  labelId,
}: {
  className?: string;
  value?: number | String;
  disabled?: boolean;
  labelId?: string;
  onChange?: (e: any) => void;
  options: { value: String | any; label: String }[];
}) {
  return (
    <Select
      className={className}
      value={value}
      disabled={disabled}
      onChange={onChange}
      labelId={labelId}
      sx={{
        "& .MuiSelect-icon": {
          color: "white",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
