import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import {
  BoxContent,
  MainContent,
  ParentContent,
  WrapperLayout,
} from "./styles";
import { useGetInfoUser } from "../utils/useGetInfoUser";
import { useEffect } from "react";

export function Layout() {
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);
  const [getUser] = useGetInfoUser();
  useEffect(() => {
    getUser();
  }, []);

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
    </WrapperLayout>
  );
}
