import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SystemModeIcon from "@mui/icons-material/SystemUpdateAlt";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const handleChangeMode = (event: any) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        color="secondary"
        onChange={handleChangeMode}
      >
        <MenuItem value="light">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LightModeIcon />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DarkModeIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SystemModeIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
