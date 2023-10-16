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

export function Sidebar() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  return (
    <WrapperSidebar>
      <div className="logo-AiArt" onClick={() => navigate("/")}>
        <img src={iconAiArt} alt="iconAiArt" />
        <div>CreatorHub</div>
      </div>
      <div className="select-item">
        <div
          className={`home ${pathName === "/" && "border"}`}
          onClick={() => navigate("/")}
        >
          <img src={iconHome} alt="iconHome" />
          <div>Home</div>
        </div>
        <div
          className={`pricing ${pathName === "/pricing" && "border"}`}
          onClick={() => navigate("/pricing")}
        >
          <img src={iconPricing} alt="" />
          <div>Pricing</div>
        </div>
        <div className="section-products">
          <div>PRODUCTS</div>
          <div
            className={`ai-art-generator ${
              pathName === "/ai-art-generator" && "border"
            }`}
            onClick={() => navigate("/ai-art-generator")}
          >
            <img src={iconAiArtGenerator} alt="iconAiArtGenerator" />
            <div>Ai Art Generator</div>
          </div>
          <div
            className={`ai-photo-enhancer ${
              pathName === "/ai-photo-enhancer" && "border"
            }`}
            onClick={() => navigate("/ai-photo-enhancer")}
          >
            <img src={iconAiPhoto} alt="iconAiPhoto" />
            <div>AI Photo Enhancer</div>
          </div>
          <div
            className={`ai-photo-enhancer ${
              pathName === "/ai-background-changer" && "border"
            }`}
            onClick={() => navigate("/ai-background-changer")}
          >
            <img src={iconAiBackgroundChange} alt="iconAiPhoto" />
            <div>AI Background Changer</div>
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
    </WrapperSidebar>
  );
}
