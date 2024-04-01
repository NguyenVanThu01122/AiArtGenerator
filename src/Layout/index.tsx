import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import DialogLoin from "../components/DialogLogin";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import { useGetInfoUser } from "../utils/useGetInfoUser";
import { MainContent, ParentContent, StyledBox, WrapperLayout } from "./styles";
import { useColorScheme } from "@mui/material";

export function Layout() {
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);
  const dialogLogin = useSelector((state: RootState) => state.app.dialogLogin);
  const [getUser] = useGetInfoUser();
  const token = localStorage.getItem("token");
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <WrapperLayout>
      {/* <BoxContent> */}
      <StyledBox mode={mode}>
        <Sidebar />
        <MainContent className={`${closeMenu && "close-box"}`}>
          <Header />
          <ParentContent>
            <Outlet />
          </ParentContent>
        </MainContent>
      </StyledBox>
      {/* </BoxContent> */}

      {dialogLogin && <DialogLoin dialogLogin={dialogLogin} />}
    </WrapperLayout>
  );
}
