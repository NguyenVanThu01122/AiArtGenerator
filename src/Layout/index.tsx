import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useGetInforUser } from "../utils/useGetInforUser";
import { WrapperLayout } from "./styles";
import { useState } from "react";

export function Layout() {
  useGetInforUser();
  const closeMenu = useSelector((state: any) => state.app.closeMenu);
  const [isBoxProfile, setIsBoxProfile] = useState(false);
  
  const toggleBoxProfile = () => {
    setIsBoxProfile(!isBoxProfile);
  };
  return (
    <WrapperLayout>
      <div className="box-content">
        <Sidebar boxProfileHide={toggleBoxProfile}/>
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
