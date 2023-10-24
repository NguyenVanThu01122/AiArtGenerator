import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Button, DrawerProps, Popover } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import iconAiBackgroundChange from "../../images/ic-ai-background-chage.svg";
import iconPricing from "../../images/ic-pricing.svg";
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
import { ItemDrawer, ItemMenu, WrapperHeader } from "./styles";

function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setSavePathName] = useState("");
  const users = useSelector((state: any) => state.app?.user);
  const closeMenu = useSelector((state: any) => state.app.closeMenu);
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
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
      case "/ai-art-generator":
        setSavePathName("/ AI Art Generator");
        break;
      case "/ai-photo-enhancer":
        setSavePathName("/ AI Photo Enhancer");
        break;
      case "/ai-background-changer":
        setSavePathName("/ AI Background changer");
        break;
      default:
        setSavePathName("");
    }
  };
  // hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    dispatch(saveUser(null));
    dispatch(saveLogin(false));
    dispatch(saveToken(""));
    navigate("/sign-in");
  };
  // nôi dung account
  const content = (
    <div
      style={{
        width: "280px",
        background: "rgb(20, 20, 31)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
          src={users?.avatar || imgAvatarDefault}
          alt=""
        />
        <div style={{ color: "white" }}>
          <div style={{ fontWeight: "800", fontSize: "17px" }}>
            {users?.lastName} <span>{users?.firstName}</span>
          </div>
          <div>
            {users?.credits} {users?.credits > 1 ? "credits" : "credit"}
          </div>
        </div>
      </div>
      <div
        style={{
          color: "white",
          borderTop: "1px solid rgb(30, 36, 49)",
          padding: "20px",
        }}
      >
        <div
          className="option-title-account"
          style={{
            padding: "10px",
            fontWeight: "800",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          My Account
        </div>
        <div
          className="option-title-account"
          onClick={handleLogout}
          style={{
            fontWeight: "800",
            fontSize: "15px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );

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
  };

  useEffect(() => {
    handleFilterPathName();
  }, [pathName]);

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
          {pathName !== "/" &&
          pathName !== "/pricing" &&
          pathName !== "/my-avatars" ? (
            <div>
              Products <span>{savePathName}</span>
            </div>
          ) : (
            savePathName
          )}
        </div>
      </div>
      <ItemMenu>
        <FontAwesomeIcon className="ic-menu" icon={faBars} onClick={showMenu} />
        <ItemDrawer
          open={isOpenMenu}
          placement={placement}
          width={280}
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
                    pathName === "/ai-background-changer" && "border-item"
                  } `}
                  onClick={() => handleRedirect("/ai-background-changer")}
                >
                  <img src={iconAiBackgroundChange} alt="iconAiPhoto" />
                  <span>AI Background Changer</span>
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
          <Popover className="custom-popover" content={content} trigger="click">
            <img
              className="avatar"
              src={users?.avatar || imgAvatarDefault}
              alt=""
            />
          </Popover>
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
