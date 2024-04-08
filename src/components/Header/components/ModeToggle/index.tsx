import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SystemModeIcon from "@mui/icons-material/SystemUpdateAlt";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
import { StyledBox, StyledFormControl } from "./styles";
type Mode = "dark" | "light" | "system";

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  const handleChangeMode = (event: SelectChangeEvent<Mode>) => {
    const valueMode = event.target.value as Mode;
    setMode(valueMode);
  };

  return (
    <StyledFormControl size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        color="secondary"
        sx={{
          color: "primary.main",
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        color="secondary"
        onChange={handleChangeMode}
        sx={{
          width: "130px",
          color: "primary.main",
        }}
      >
        <MenuItem value="light">
          <StyledBox>
            <LightModeIcon
              sx={{
                color: "primary.main",
              }}
            />
            Light
          </StyledBox>
        </MenuItem>
        <MenuItem value="dark">
          <StyledBox>
            <DarkModeIcon /> Dark
          </StyledBox>
        </MenuItem>
        <MenuItem value="system">
          <StyledBox>
            <SystemModeIcon /> System
          </StyledBox>
        </MenuItem>
      </Select>
    </StyledFormControl>
  );
}
