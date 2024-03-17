import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconAiBackgroundChange from "../../images/ic-ai-background-chage.svg";
import iconPricing from "../../images/ic-pricing.svg";
import iconAiArtGenerator from "../../images/iconAiArtGenerator.svg";
import {
  default as icAvatar,
  default as iconAiPhoto,
} from "../../images/iconAiPhoto.svg";
import iconHome from "../../images/iconHome.svg";
import iconAiArt from "../../images/iconLogin1.png";

import { RootState } from "../../reduxToolkit/RootReducer";
import FollowSocialMedia from "../FollowSocialMedia";
import {
  ContainerMenu,
  LogoCreator,
  NameApp,
  SectionProductMenu,
  StyledImageGeneral,
  TitleMenu,
  WrapperMenu,
  WrapperSidebar,
} from "./styles";
interface SidebarProps {
  boxProfileHide: () => void;
}
interface TypeMenuData {
  title: string;
  path: string;
  icon: any;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    // boxProfileHide();
  };

  const MenuItem = ({ title, path, icon }: TypeMenuData) => (
    <Tooltip placement="right" title={closeMenu && title}>
      <WrapperMenu
        closeMenu={closeMenu}
        className={pathName === path ? "border" : ""}
        onClick={() => handleRedirect(path)}
      >
        {icon && <img src={icon} alt={title} />}
        {!icon && <FontAwesomeIcon className="ic-avatar" icon={faImage} />}
        <span>{title}</span>
      </WrapperMenu>
    </Tooltip>
  );

  const MenuSectionProduct = ({
    title,
    items,
  }: {
    title: string;
    items: TypeMenuData[];
  }) => (
    <SectionProductMenu>
      <TitleMenu>{title}</TitleMenu>
      {items.map((item: TypeMenuData, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </SectionProductMenu>
  );

  return (
    <WrapperSidebar closeMenu={closeMenu}>
      <LogoCreator onClick={() => navigate("/")}>
        <StyledImageGeneral src={iconAiArt} alt="iconAiArt" />
        <NameApp closeMenu={closeMenu}>CreatorHub</NameApp>
      </LogoCreator>

      <ContainerMenu closeMenu={closeMenu}>
        <MenuItem title="Home" path="/" icon={iconHome} />
        <MenuItem title="Pricing" path="/pricing" icon={iconPricing} />
        <MenuItem title="My Avatars" path="/my-avatars" icon={icAvatar} />
        <MenuSectionProduct
          title="PRODUCTS"
          items={[
            {
              title: "Ai Art Generator",
              path: "/ai-art-generator",
              icon: iconAiArtGenerator,
            },
            {
              title: "Ai Photo Enhancer",
              path: "/ai-photo-enhancer",
              icon: iconAiPhoto,
            },
            {
              title: "Ai Background Remove",
              path: "/ai-background-remove",
              icon: iconAiBackgroundChange,
            },
          ]}
        />
      </ContainerMenu>

      {/* item socialMedia */}
      <FollowSocialMedia />
    </WrapperSidebar>
  );
}
