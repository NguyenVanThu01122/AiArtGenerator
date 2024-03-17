import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import icCredits1 from "../../images/ic_credits1.svg";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";
import iconOpenSidebar from "../../images/icon-open-sidebar.svg";
import logoCreator from "../../images/iconLogin1.png";

import {
  saveCloseMenu,
  saveLogin,
  saveToken,
  saveUser,
} from "../../reduxToolkit/AppSlice";
import { RootState } from "../../reduxToolkit/RootReducer";
import { removeRefreshToken, removeToken } from "../../utils/handleTokenUtils";
import MobileMenu from "./components/MobileMenu";
import { BoxProfile, WrapperHeader } from "./styles";

function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setSavePathName] = useState("");
  const users = useSelector((state: RootState) => state.app?.user);

  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isBoxProfile, setIsBoxProfile] = useState(false);
  const profileRef = useRef<HTMLImageElement | null>(null);

  const filterListPathName = ["/", "/pricing", "/my-account", "/my-avatars"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // hàm xử lý lọc pathName
  const handleFilterPathName = () => {
    switch (pathName) {
      case "/":
        setSavePathName("Home");
        break;
      case "/pricing":
        setSavePathName("Pricing");
        break;
      case "/my-avatars":
        setSavePathName("My Avatars");
        break;
      case "/my-account":
        setSavePathName("My Account");
        break;
      case "/ai-art-generator":
        setSavePathName("/ AI Art Generator");
        break;
      case "/ai-photo-enhancer":
        setSavePathName("/ AI Photo Enhancer");
        break;
      case "/ai-background-remove":
        setSavePathName("/ AI Background Remove");
        break;
      default:
        setSavePathName("");
    }
  };

  // hàm sign out
  const handleLogout = () => {
    removeToken();
    removeRefreshToken();
    dispatch(saveUser(null));
    dispatch(saveLogin(false));
    dispatch(saveToken(""));
    navigate("/sign-in");
  };

  const handleOpenAndCloseMenu = () => dispatch(saveCloseMenu(!closeMenu));
  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setIsOpenMenu(false);
    setIsBoxProfile(false);
  };

  // hàm chuyển đổi trạng thái của boxProfile
  const toggleBoxProfile = () => setIsBoxProfile(!isBoxProfile);

  useEffect(() => {
    handleFilterPathName();
  }, [pathName]);

  // Sử dụng useEffect để theo dõi sự kiện click trên document
  useEffect(() => {
    // Hàm xử lý khi click ra ngoài hộp profile
    const handleDocumentClick = (e: any) => {
      const target = e.target;
      if (
        isBoxProfile &&
        profileRef.current &&
        !profileRef.current.contains(target)
      ) {
        setIsBoxProfile(false); // Nếu click ra ngoài hộp menu, ẩn hộp profile
      }
    };
    document.addEventListener("click", handleDocumentClick); // Dòng này lắng nghe sự kiện click lên toàn bộ tài liệu (document). Khi một sự kiện click xảy ra bất kỳ nơi nào trên trang, handleDocumentClick sẽ được gọi.

    return () => {
      document.removeEventListener("click", handleDocumentClick); // Cleanup listener khi component unmount
    };
  }, [isBoxProfile]);

  return (
    <WrapperHeader>
      <div className="item-title">
        {closeMenu ? (
          <img
            className="ic-close"
            onClick={handleOpenAndCloseMenu}
            src={iconOpenSidebar}
            alt=""
          />
        ) : (
          <img
            className="ic-close"
            onClick={handleOpenAndCloseMenu}
            src={iconCloseSidebar}
            alt=""
          />
        )}
        <div>
          {filterListPathName.includes(pathName) ? (
            savePathName
          ) : (
            <div>
              Products <span>{savePathName}</span>
            </div>
          )}
        </div>
      </div>
      <MobileMenu />

      <div className="logo-creator" onClick={() => navigate("/")}>
        <img src={logoCreator} alt="iconAiArt" />
        <span>CreatorHub</span>
      </div>
      {users ? (
        <div className="box-account">
          <div className="account-information">
            <div>
              {users?.lastName} <span>{users?.firstName}</span>
            </div>
            <div>
              {users?.credits}{" "}
              {users?.credits && users?.credits > 1 ? "credits" : "credit"}
            </div>
          </div>
          <div ref={profileRef}>
            <img
              className="avatar"
              onClick={toggleBoxProfile}
              src={users?.avatar || imgAvatarDefault}
              alt=""
            />
            {isBoxProfile && (
              <BoxProfile>
                <div className="detail-user">
                  <img
                    className="avatar"
                    src={users?.avatar || imgAvatarDefault}
                    alt=""
                  />
                  <div className="content-user">
                    <div className="name">
                      {users?.lastName} <span>{users?.firstName}</span>
                    </div>
                    <div className="credits">
                      <img src={icCredits1} alt="" />
                      {users?.credits}{" "}
                      {users?.credits && users?.credits > 1
                        ? "credits"
                        : "credit"}
                    </div>
                  </div>
                </div>
                <div className="option-container">
                  <div
                    onClick={() => handleRedirect("/my-account")}
                    className="item-menu"
                  >
                    My Account
                  </div>
                  <div className="item-menu" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </BoxProfile>
            )}
          </div>
        </div>
      ) : (
        <Button onClick={() => navigate("/sign-in")} className="btn-login">
          Đăng nhập
        </Button>
      )}
    </WrapperHeader>
  );
}
export default Header;
