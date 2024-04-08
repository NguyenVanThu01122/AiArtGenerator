import { useColorScheme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import DialogLoin from "../components/DialogLogin";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { saveLogin } from "../reduxToolkit/Slices/AppSlice";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import { useGetInfoUser } from "../utils/useGetInfoUser";
import {
  BoxContent,
  MainContent,
  ParentContent,
  WrapperLayout,
} from "./styles";

export function Layout() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams();
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);
  const dialogLogin = useSelector((state: RootState) => state.app.dialogLogin);
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // lấy giá trị dark ,light của hệ thống máy người dùng
  const { mode } = useColorScheme();
  const [getUser] = useGetInfoUser();

  useEffect(() => {
    // lưu lại token và refresh token khi đăng nhập hoặc đăng ký bằng google và facebook thành công
    const token = searchParam.get("token");
    const refreshToken = searchParam.get("refresh_token");
    if (token && refreshToken) {
      localStorage.setItem("token", searchParam.get("token") || "");
      localStorage.setItem(
        "refreshToken",
        searchParam.get("refresh_token") || ""
      );
      getUser(); // lấy thông tin user
      dispatch(saveLogin(true));
      setSearchParam({});
    }
  }, [searchParam]);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("LANG_STORAGE_KEY") || "eng");
  }, [i18n]);

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
