import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SystemModeIcon from "@mui/icons-material/SystemUpdateAlt";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
import { useTranslation } from "react-i18next";
import { StyledBox, StyledFormControl } from "./styles";
type Mode = "dark" | "light" | "system";

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const { t } = useTranslation();

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
        {t("Mode")}
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        color="secondary"
        onChange={handleChangeMode}
        className="select-mode"
        sx={{
          width: "145px",
          height: "38px",
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
            {t("Light")}
          </StyledBox>
        </MenuItem>
        <MenuItem value="dark">
          <StyledBox>
            <DarkModeIcon />
            {t("Dark")}
          </StyledBox>
        </MenuItem>
        <MenuItem value="system">
          <StyledBox>
            <SystemModeIcon />
            {t("System")}
          </StyledBox>
        </MenuItem>
      </Select>
    </StyledFormControl>
  );
}
