import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Button, DrawerProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import iconAiBackgroundChange from "../../images/ic-ai-background-chage.svg";
import iconPricing from "../../images/ic-pricing.svg";
import icCredits1 from "../../images/ic_credits1.svg";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";
import iconOpenSidebar from "../../images/icon-open-sidebar.svg";
import iconAiArtGenerator from "../../images/iconAiArtGenerator.svg";
import iconAiPhoto from "../../images/iconAiPhoto.svg";
import iconDiscordAiArt from "../../images/iconDiscordAiArt.svg";
import iconFacebookAiArt from "../../images/iconFacebookAiArt.svg";
import iconHome from "../../images/iconHome.svg";
import logoCreator from "../../images/iconLogin1.png";
import iconTiktok from "../../images/iconTiktok.svg";
import iconTwitter from "../../images/iconTwitter.svg";

import { faAnglesLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  saveCloseMenu,
  saveLogin,
  saveToken,
  saveUser,
} from "../../redux/Actions/app";
import { LogoCreatorHub } from "../LogoCreatorHub";
import { BoxProfile, ItemDrawer, ItemMenu, WrapperHeader } from "./styles";

function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setSavePathName] = useState("");
  const users = useSelector((state: any) => state.app?.user);
  const closeMenu = useSelector((state: any) => state.app.closeMenu);
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isBoxProfile, setIsBoxProfile] = useState(false);
  const profileRef = useRef<HTMLImageElement | null>(null); // Đảm bảo kiểu dữ liệu của ref

  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filterListPathName = ["/", "/pricing", "/my-account", "/my-avatars"];

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
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    dispatch(saveUser(null));
    dispatch(saveLogin(false));
    dispatch(saveToken(""));
    navigate("/sign-in");
  };

  const hanleOpenAndCloseMenu = () => {
    dispatch(saveCloseMenu(!closeMenu));
  };

  const showMenu = () => {
    setisOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setisOpenMenu(false);
  };

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setisOpenMenu(false);
    setIsBoxProfile(false);
  };
  // hàm chuyển đổi trạng thái của boxProfile
  const toggleBoxProfile = () => {
    setIsBoxProfile(!isBoxProfile);
  };

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
            onClick={hanleOpenAndCloseMenu}
            src={iconOpenSidebar}
            alt=""
          />
        ) : (
          <img
            className="ic-close"
            onClick={hanleOpenAndCloseMenu}
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

      <ItemMenu>
        <FontAwesomeIcon className="ic-menu" icon={faBars} onClick={showMenu} />
        <ItemDrawer
          open={isOpenMenu}
          placement={placement}
          width={320}
          closable={false}
        >
          <div className="title-menu">
            <LogoCreatorHub />
            <FontAwesomeIcon
              className="icon-angles"
              onClick={handleCloseMenu}
              icon={faAnglesLeft}
            />
          </div>
          <div className="parent-content">
            <div className="select-item">
              <div
                className={`item-menu ${pathName === "/" && "border-item"} `}
                onClick={() => handleRedirect("/")}
              >
                <img src={iconHome} alt="iconHome" />
                <span>Home</span>
              </div>
              <div
                className={`item-menu ${
                  pathName === "/pricing" && "border-item"
                } `}
                onClick={() => handleRedirect("/pricing")}
              >
                <img src={iconPricing} alt="" />
                <span>Pricing</span>
              </div>
              <div
                className={`item-menu ${
                  pathName === "/my-avatars" && "border-item"
                } `}
                onClick={() => handleRedirect("/my-avatars")}
              >
                <FontAwesomeIcon className="ic-avatar" icon={faImage} />
                <span>My Avatars</span>
              </div>
              <div className="section-products">
                <div>PRODUCTS</div>
                <div
                  className={`item-menu ${
                    pathName === "/ai-art-generator" && "border-item"
                  } `}
                  onClick={() => handleRedirect("/ai-art-generator")}
                >
                  <img src={iconAiArtGenerator} alt="iconAiArtGenerator" />
                  <span>Ai Art Generator</span>
                </div>
                <div
                  className={`item-menu ${
                    pathName === "/ai-photo-enhancer" && "border-item"
                  } `}
                  onClick={() => handleRedirect("/ai-photo-enhancer")}
                >
                  <img src={iconAiPhoto} alt="iconAiPhoto" />
                  <span>AI Photo Enhancer</span>
                </div>
                <div
                  className={`item-menu ${
                    pathName === "/ai-background-remove" && "border-item"
                  } `}
                  onClick={() => handleRedirect("/ai-background-remove")}
                >
                  <img src={iconAiBackgroundChange} alt="iconAiPhoto" />
                  <span>AI Background Remove</span>
                </div>
              </div>
            </div>
            <div className="follow-options">
              <div>FOLLOW US ON</div>
              <div className="group-icon">
                <img
                  onClick={() =>
                    (window.location.href =
                      "https://instagram.com/vanthu_0112?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr")
                  }
                  src={iconTwitter}
                  alt="iconTwitter"
                />
                <img
                  onClick={() =>
                    (window.location.href =
                      "https://www.tiktok.com/@creatorhub.ai?_t=8gVOwiPr5P8&_r=1")
                  }
                  src={iconTiktok}
                  alt="iconTiktok"
                />
                <img
                  onClick={() =>
                    window.location.assign(
                      "https://www.facebook.com/profile.php?id=100065754240272"
                    )
                  }
                  src={iconFacebookAiArt}
                  alt="iconFacebook"
                />
                <img src={iconDiscordAiArt} alt="iconDiscord" />
              </div>
            </div>
          </div>
        </ItemDrawer>
      </ItemMenu>
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
              {users?.credits} {users?.credits > 1 ? "credits" : "credit"}
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
                      {users?.credits > 1 ? "credits" : "credit"}
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
