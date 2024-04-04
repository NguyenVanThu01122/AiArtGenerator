import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectGeneral({
  options,
  className,
  value,
  disabled,
  onChange,
  labelId,
  color,
}: {
  className?: string;
  value?: number | String;
  disabled?: boolean;
  labelId?: string;
  onChange?: (e: any) => void;
  color?: "primary" | "secondary";
  options: { value: String | any; label: String }[];
}) {
  return (
    <Select
      className={className}
      value={value}
      disabled={disabled}
      onChange={onChange}
      labelId={labelId}
      color={color}
      sx={{
        "& .MuiSelect-select": {
          // bgcolor: "primary.main",
          color: "primary.main",
        },

        "& .MuiSelect-icon": {
          color: "primary.main",
          // bgcolor: "primary.main",
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
