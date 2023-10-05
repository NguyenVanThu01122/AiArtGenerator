import { useNavigate } from "react-router-dom";
import iconAiBackgroundChange from "../../images/ic-ai-background-chage.svg";
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
      <div className="logo-AiArt">
        <img src={iconAiArt} alt="iconAiArt" />
        <div>CreatorHub</div>
      </div>
      <div className="select-item">
        <div className="home">
          <img src={iconHome} alt="iconHome" />
          <div>Home</div>
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
        <div className="follow-options">
          <div>FOLLOW US ON</div>
          <div className="group-icon">
            <img src={iconTwitter} alt="iconTwitter" />
            <img src={iconTiktok} alt="iconTiktok" />
            <img src={iconFacebookAiArt} alt="iconFacebook" />
            <img src={iconDiscordAiArt} alt="iconDiscord" />
          </div>
        </div>
      </div>
    </WrapperSidebar>
  );
}
