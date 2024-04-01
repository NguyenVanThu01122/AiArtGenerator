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
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import { ROUTES } from "../../routes/routes";
import FollowSocialMedia from "../FollowSocialMedia";
import ImageGeneral from "../Ui/image";
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
interface TypeMenuData {
  title: string;
  path: string;
  icon: string;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
  };

  const MenuItem = ({ title, path, icon }: TypeMenuData) => (
    <Tooltip placement="right" title={closeMenu && title}>
      <WrapperMenu
        closeMenu={closeMenu}
        className={pathName === path ? "border" : ""}
        onClick={() => handleRedirect(path)}
      >
        {icon && <ImageGeneral src={icon} alt={title} />}
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
        <MenuItem title="Home" path={ROUTES.HOME} icon={iconHome} />
        <MenuItem title="Pricing" path={ROUTES.PRICING} icon={iconPricing} />
        <MenuItem
          title="Ai Image Results"
          path={ROUTES.AI_IMAGE_RESULT}
          icon={icAvatar}
        />

        <MenuSectionProduct
          title="PRODUCTS"
          items={[
            {
              title: "Ai Art Generator",
              path: ROUTES.AI_ART_GENERATOR,
              icon: iconAiArtGenerator,
            },
            {
              title: "Ai Photo Enhancer",
              path: ROUTES.AI_PHOTO_ENHANCER,
              icon: iconAiPhoto,
            },
            {
              title: "Ai Background Remove",
              path: ROUTES.AI_BACKGROUND_REMOVE,
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
