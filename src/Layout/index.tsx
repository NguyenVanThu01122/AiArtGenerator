import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useGetInforUser } from "../utils/useGetInforUser";
import { WrapperLayout } from "./styles";

export function Layout() {
  useGetInforUser();
  const closeMenu = useSelector((state: any) => state.app.closeMenu);

  return (
    <WrapperLayout>
      <div className="box-content">
        <Sidebar />
        <div className={`main-content ${closeMenu && "close-box"}`}>
          <Header />
          <div className="parent-content">
            <Outlet />
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}
