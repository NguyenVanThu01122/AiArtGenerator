import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import imageLogin1 from "../../images/imageLogin1.png";
import imageLogin2 from "../../images/imageLogin2.png";
import imageLogin3 from "../../images/imageLogin3.png";
import imageLogin4 from "../../images/imageLogin4.png";
import ImageGeneral from "../Ui/image";
import { WrapperSidebarImage } from "./styles";

export function SidebarImageLogin() {
  const { t } = useTranslation();
  return (
    <WrapperSidebarImage>
      {/* <LanguageSelection /> */}
      <Carousel
        adaptiveHeight={true}
        className="item-carousel"
        autoplay
        dots={true}
        slidesToShow={1}
      >
        <ImageGeneral src={imageLogin1} alt="" />
        <ImageGeneral src={imageLogin2} alt="" />
        <ImageGeneral src={imageLogin3} alt="" />
        <ImageGeneral src={imageLogin4} alt="" />
      </Carousel>
      <div className="welcome-text">{t("Welcome to AiArt Generator")}</div>
    </WrapperSidebarImage>
  );
}
