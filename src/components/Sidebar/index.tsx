import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconAiBackgroundChange from "../../images/ic-ai-background-chage.svg";
import iconPricing from "../../images/ic-pricing.svg";
import iconAiArtGenerator from "../../images/iconAiArtGenerator.svg";
import iconAiPhoto from "../../images/iconAiPhoto.svg";
import iconDiscordAiArt from "../../images/iconDiscordAiArt.svg";
import iconFacebookAiArt from "../../images/iconFacebookAiArt.svg";
import iconHome from "../../images/iconHome.svg";
import iconAiArt from "../../images/iconLogin1.png";
import iconTiktok from "../../images/iconTiktok.svg";
import iconTwitter from "../../images/iconTwitter.svg";
import { WrapperSidebar } from "./styles";

function Sidebar({ boxProfileHide }: any) {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const closeMenu = useSelector((state: any) => state.app.closeMenu);

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    boxProfileHide();
  };

  return (
    <WrapperSidebar closeMenu={closeMenu}>
      <div className="logo-creator" onClick={() => navigate("/")}>
        <img src={iconAiArt} alt="iconAiArt" />
        <span>CreatorHub</span>
      </div>
      <div className="select-item">
        <Tooltip placement="right" title={closeMenu && "Home"}>
          <div
            className={`item-menu ${pathName === "/" && "border"} `}
            onClick={() => handleRedirect("/")}
          >
            <img src={iconHome} alt="iconHome" />
            <span>Home</span>
          </div>
        </Tooltip>
        <Tooltip placement="right" title={closeMenu && "Pricing"}>
          <div
            className={`item-menu ${pathName === "/pricing" && "border"}`}
            onClick={() => handleRedirect("/pricing")}
          >
            <img src={iconPricing} alt="" />
            <span>Pricing</span>
          </div>
        </Tooltip>
        <Tooltip placement="right" title={closeMenu && "My Avatars"}>
          <div
            className={`item-menu ${pathName === "/my-avatars" && "border"}`}
            onClick={() => handleRedirect("/my-avatars")}
          >
            <FontAwesomeIcon className="ic-avatar" icon={faImage} />
            <span>My Avatars</span>
          </div>
        </Tooltip>
        <div className="section-products">
          <div>PRODUCTS</div>
          <Tooltip placement="right" title={closeMenu && "Ai Art Generator"}>
            <div
              className={`item-menu ${
                pathName === "/ai-art-generator" && "border"
              }`}
              onClick={() => handleRedirect("/ai-art-generator")}
            >
              <img src={iconAiArtGenerator} alt="iconAiArtGenerator" />
              <span>Ai Art Generator</span>
            </div>
          </Tooltip>
          <Tooltip placement="right" title={closeMenu && "Ai Photo Enhancer"}>
            <div
              className={`item-menu ${
                pathName === "/ai-photo-enhancer" && "border"
              }`}
              onClick={() => handleRedirect("/ai-photo-enhancer")}
            >
              <img src={iconAiPhoto} alt="iconAiPhoto" />
              <span>AI Photo Enhancer</span>
            </div>
          </Tooltip>
          <Tooltip
            placement="right"
            title={closeMenu && "Ai BacKground Remove"}
          >
            <div
              className={`item-menu ${
                pathName === "/ai-background-remove" && "border"
              } `}
              onClick={() => handleRedirect("/ai-background-remove")}
            >
              <img src={iconAiBackgroundChange} alt="iconAiPhoto" />
              <span>AI Background Remove</span>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className={`follow-options ${closeMenu && "none-text"}`}>
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
    </WrapperSidebar>
  );
}
export default Sidebar;
