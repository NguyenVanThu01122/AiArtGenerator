import { useColorScheme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DialogLoin from "../components/DialogLogin";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import { useGetInfoUser } from "../utils/useGetInfoUser";
import {
  BoxContent,
  MainContent,
  ParentContent,
  WrapperLayout,
} from "./styles";

export function Layout() {
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);
  const dialogLogin = useSelector((state: RootState) => state.app.dialogLogin);
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // lấy giá trị dark ,light của hệ thống máy người dùng
  const [getUser] = useGetInfoUser();
  const token = localStorage.getItem("token");
  const { mode } = useColorScheme();

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [getUser, token]);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.style.setProperty("--text-color", "white"); //style.setProperty thiết lập giá trị của một thuộc tính trên một phần tử
    } else if (mode === "system" && systemDarkMode) {
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--text-color", "black");
    }
  }, [mode, systemDarkMode]);

  return (
    <WrapperLayout>
      <BoxContent
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Sidebar />
        <MainContent className={`${closeMenu && "close-box"}`}>
          <Header />
          <ParentContent>
            <Outlet />
          </ParentContent>
        </MainContent>
      </BoxContent>
      {dialogLogin && <DialogLoin dialogLogin={dialogLogin} />}
    </WrapperLayout>
  );
}
