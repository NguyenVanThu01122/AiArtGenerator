import { Button, Popover } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";

import { saveLogin, saveToken, saveUser } from "../../redux/Actions/app";
import { WrapperHeader } from "./styles";

function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setSavePathName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.app?.user);

  // hàm xử lý lọc pathName
  const handleFilterPathName = () => {
    switch (pathName) {
      case "/":
        setSavePathName("Home");
        break;
      case "/pricing":
        setSavePathName("Pricing");
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    dispatch(saveUser(null));
    dispatch(saveLogin(false));
    dispatch(saveToken(""));
    navigate("/sign-in");
  };

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
            width: "70px",
            height: "70px",
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
          style={{
            marginBottom: "10px",
            fontWeight: "800",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          My Account
        </div>
        <div
          onClick={handleLogout}
          style={{ fontWeight: "800", fontSize: "15px", cursor: "pointer" }}
        >
          Logout
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    handleFilterPathName();
  }, [pathName]);

  return (
    <WrapperHeader>
      <div className="title-page">
        <img src={iconCloseSidebar} alt="" />
        <div>
          {pathName !== "/" && pathName !== "/pricing" ? (
            <div>
              Products <span>{savePathName}</span>
            </div>
          ) : (
            savePathName
          )}
        </div>
      </div>

      {users ? (
        <div className="account">
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
