import { faAnglesLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconAiBackgroundChange from "../../../../images/ic-ai-background-chage.svg";
import iconPricing from "../../../../images/ic-pricing.svg";
import iconAiArtGenerator from "../../../../images/iconAiArtGenerator.svg";
import iconAiPhoto from "../../../../images/iconAiPhoto.svg";
import iconHome from "../../../../images/iconHome.svg";
import FollowSocialMedia from "../../../FollowSocialMedia";
import { LogoCreatorHub } from "../../../LogoCreatorHub";
import ImageGeneral from "../../../Ui/image";
import {
  ContentMenu,
  ContentSection,
  Header,
  MenuItem,
  SectionMenu,
  StyledDrawerMenu,
  WrapperMenu,
} from "./styles";
interface TypeMenuItems {
  path: string;
  text: string;
  icon: any;
}
const menuItems = [
  { path: "/", text: "Home", icon: iconHome },
  { path: "/pricing", text: "Pricing", icon: iconPricing },
  { path: "/my-avatars", text: "My Avatars", icon: iconAiPhoto },
  {
    path: "/ai-art-generator",
    text: "AI Art Generator",
    icon: iconAiArtGenerator,
  },
  {
    path: "/ai-photo-enhancer",
    text: "AI Photo Enhancer",
    icon: iconAiPhoto,
  },
  {
    path: "/ai-background-remove",
    text: "AI Background Remove",
    icon: iconAiBackgroundChange,
  },
];

const MobileMenu = () => {
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
    // setIsBoxProfile(false);
  };

  return (
    <WrapperMenu>
      <FontAwesomeIcon className="ic-menu" icon={faBars} onClick={showMenu} />
      <StyledDrawerMenu open={isOpenMenu} onClose={handleCloseMenu}>
        <Box sx={{ width: 260 }}>
          <Header>
            <LogoCreatorHub />
            <FontAwesomeIcon
              className="icon-angles"
              onClick={handleCloseMenu}
              icon={faAnglesLeft}
            />
          </Header>
          <ContentSection>
            <SectionMenu>
              {menuItems.map((item: TypeMenuItems, index: number) => (
                <MenuItem
                  key={index}
                  className={` ${pathName === item.path && "border-item"}`}
                  onClick={() => handleRedirect(item.path)}
                >
                  <ImageGeneral src={item?.icon} />
                  <ContentMenu>{item?.text}</ContentMenu>
                </MenuItem>
              ))}
            </SectionMenu>

            {/* Mục Follow Us */}
            <FollowSocialMedia />
          </ContentSection>
        </Box>
      </StyledDrawerMenu>
    </WrapperMenu>
  );
};

export default MobileMenu;
