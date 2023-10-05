import { Popover } from "antd";
import { useEffect, useState } from "react";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";
import { HeaderAiArt } from "./styles";
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
        src="https://lh3.googleusercontent.com/a/AAcHTteq9JYJtlWkfu4b_IE8K4EUcwVmpDGVRInVCajd5q84gA=s96-c"
        alt=""
      />
      <div style={{ color: "white" }}>
        <div style={{ fontWeight: "800", fontSize: "18px" }}>
          Nguyễn văn Thư
        </div>
        <div>25 credits</div>
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
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        My Account
      </div>
      <div style={{ fontWeight: "800", fontSize: "18px", cursor: "pointer" }}>
        Logout
      </div>
    </div>
  </div>
);
function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setPathName] = useState("");

  // hàm xử lý lọc pathName
  const handleFilterPathName = () => {
    switch (pathName) {
      case "/ai-art-generator":
        setPathName("/ AI Art Generator");
        break;
      case "/ai-photo-enhancer":
        setPathName("/ AI Photo Enhancer");
        break;
      case "/ai-background-changer":
        setPathName("/ AI Background changer");
        break;
      default:
        setPathName("");
    }
  };
  useEffect(() => {
    handleFilterPathName();
  }, []);
  
  return (
    <HeaderAiArt>
      <div className="title-page">
        <img src={iconCloseSidebar} alt="" />
        <div>
          Products <span>{savePathName}</span>
        </div>
      </div>
      <div className="account">
        <div className="account-information">
          <div>Nguyễn văn Thư</div>
          <div>25 credits</div>
        </div>
        <Popover className="custom-popover" content={content} trigger="hover">
          <img
            className="avatar"
            src="https://lh3.googleusercontent.com/a/AAcHTteq9JYJtlWkfu4b_IE8K4EUcwVmpDGVRInVCajd5q84gA=s96-c"
            alt=""
          />
        </Popover>
      </div>
      {/* <div className="login">Đăng nhập</div> */}
    </HeaderAiArt>
  );
}
export default Header;
