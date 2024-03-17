import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useGetInfoUser } from "../utils/useGetInfoUser";
import { WrapperLayout } from "./styles";

export function Layout() {
  useGetInfoUser();
  const closeMenu = useSelector((state: any) => state.app.closeMenu);
  // const [isBoxProfile, setIsBoxProfile] = useState(false);
  // const toggleBoxProfile = () => {
  //   setIsBoxProfile(!isBoxProfile);
  // };
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
