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
  // const login = checkLogin();
  const login = useSelector((state: any) => state.app.login);
  const [getUser] = useGetInfoUser();
  useEffect(() => {
    if (login) {
      getUser();
    }
  }, [login]);

  return (
    <WrapperLayout>
      <BoxContent>
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
