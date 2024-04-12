import { faAnglesLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import iconAiBackgroundChange from "../../../../images/ic-ai-background-chage.svg";
import iconPricing from "../../../../images/ic-pricing.svg";
import iconAiArtGenerator from "../../../../images/iconAiArtGenerator.svg";
import iconAiPhoto from "../../../../images/iconAiPhoto.svg";
import iconHome from "../../../../images/iconHome.svg";
import { ROUTES } from "../../../../routes/routes";
import FollowSocialMedia from "../../../FollowSocialMedia";
import { LogoCreatorHub } from "../../../LogoCreatorHub";
import ImageGeneral from "../../../Ui/image";
import LanguageSelection from "../LanguageSelection";
import ModeToggle from "../ModeToggle";
import {
  ContentMenu,
  ContentSection,
  Header,
  MenuItem,
  SectionMenu,
  StyledBox,
  StyledDrawerMenu,
  WrapperMenu,
} from "./styles";
export interface TypeMenuItems {
  path: string;
  text: string;
  icon: string;
}
const menuItems = [
  { path: ROUTES.HOME, text: "HOME", icon: iconHome },
  { path: ROUTES.PRICING, text: "PRICING", icon: iconPricing },
  { path: ROUTES.AI_IMAGE_RESULT, text: "AI_IMAGE_RESULT", icon: iconAiPhoto },
  {
    path: ROUTES.AI_ART_GENERATOR,
    text: "AI_ART_GENERATOR",
    icon: iconAiArtGenerator,
  },
  {
    path: ROUTES.AI_PHOTO_ENHANCER,
    text: "AI_PHOTO_ENHANCER",
    icon: iconAiPhoto,
  },
  {
    path: ROUTES.AI_BACKGROUND_REMOVE,
    text: "AI_BACKGROUND_REMOVE",
    icon: iconAiBackgroundChange,
  },
];

const MobileMenu = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const showMenu = () => setIsOpenMenu(true);
  const handleCloseMenu = () => setIsOpenMenu(false);

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setIsOpenMenu(false);
  };

  return (
    <WrapperMenu>
      <FontAwesomeIcon className="ic-menu" icon={faBars} onClick={showMenu} />
      <StyledDrawerMenu open={isOpenMenu} onClose={handleCloseMenu}>
        <StyledBox sx={{ width: 330 }}>
          <Header>
            <LogoCreatorHub />
            <FontAwesomeIcon
              className="icon-angles"
              onClick={handleCloseMenu}
              icon={faAnglesLeft}
            />
          </Header>

          <Box sx={{ display: "flex", gap: "5px" }}>
            <ModeToggle />
            <LanguageSelection />
          </Box>

          <ContentSection>
            <SectionMenu>
              {menuItems.map((item: TypeMenuItems, index: number) => (
                <MenuItem
                  key={index}
                  className={` ${pathName === item.path && "border-item"}`}
                  onClick={() => handleRedirect(item.path)}
                >
                  <ImageGeneral src={item?.icon} />
                  <ContentMenu>{t(item?.text)}</ContentMenu>
                </MenuItem>
              ))}
            </SectionMenu>
            {/* Mục Follow Us */}
            <FollowSocialMedia />
          </ContentSection>
        </StyledBox>
      </StyledDrawerMenu>
    </WrapperMenu>
  );
};

export default MobileMenu;
