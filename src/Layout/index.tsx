import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { WrapperLayout } from "./styles";

export function Layout() {
  return (
    <WrapperLayout>
      <div className="box-content">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="parent-content">
            <Outlet />
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}