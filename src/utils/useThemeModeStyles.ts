import { useColorScheme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

export const useThemeModeStyles = () => {
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // lấy giá trị dark ,light của hệ thống máy người dùng
  const { mode } = useColorScheme();
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.style.setProperty("--text-color", "white"); //style.setProperty thiết lập giá trị của một thuộc tính trên một phần tử
    } else if (mode === "system" && systemDarkMode) {
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--text-color", "black");
    }
  }, [mode, systemDarkMode]);
};
