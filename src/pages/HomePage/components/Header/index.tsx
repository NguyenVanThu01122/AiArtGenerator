// import icRight from "../../images/HomePage/";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import FollowSocialMedia from "../../../../components/FollowSocialMedia";
import { TypeMenuItems } from "../../../../components/Header/components/MobileMenu";
import {
  ContentMenu,
  ContentSection,
  Header,
  MenuItem,
  SectionMenu,
  StyledBox,
  StyledDrawerMenu,
} from "../../../../components/Header/components/MobileMenu/styles";
import ModeToggle from "../../../../components/Header/components/ModeToggle";
import { LogoCreatorHub } from "../../../../components/LogoCreatorHub";
import ButtonGeneral from "../../../../components/Ui/button";
import ImageGeneral from "../../../../components/Ui/image";
import iconPricing from "../../../../images/ic-pricing.svg";
import iconHome from "../../../../images/iconHome.svg";
import { ROUTES } from "../../../../routes/routes";
import { BoxLogo, GridItem, StyledGrid } from "./styles";

export default function HeaderHomePage({
  isOpenMenu,
  setIsOpenMenu,
}: {
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setIsOpenMenu(false);
  };

  const handleCloseMenu = () => setIsOpenMenu(false);

  const menuItems = [
    { path: ROUTES.HOME, text: "Home", icon: iconHome },
    { path: ROUTES.PRICING, text: "Pricing", icon: iconPricing },
  ];

  return (
    <StyledGrid container>
      <StyledDrawerMenu open={isOpenMenu} onClose={handleCloseMenu}>
        <StyledBox sx={{ width: 300 }}>
          <Header>
            <LogoCreatorHub />
            <FontAwesomeIcon
              className="icon-angles"
              onClick={handleCloseMenu}
              icon={faAnglesLeft}
            />
          </Header>
          <ModeToggle />
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
        </StyledBox>
      </StyledDrawerMenu>
      <BoxLogo>
        <LogoCreatorHub />
      </BoxLogo>
      <GridItem item>
        <ButtonGeneral variant="outlined" color="primary">
          Home
        </ButtonGeneral>
        <ButtonGeneral
          onClick={() => handleRedirect(ROUTES.PRICING)}
          sx={{ marginLeft: "16px" }}
          color="inherit"
        >
          Pricing
        </ButtonGeneral>
      </GridItem>
      <ButtonGeneral
        onClick={() => handleRedirect(ROUTES.REGISTER)}
        variant="contained"
        color="primary"
      >
        Sign up for free
      </ButtonGeneral>
    </StyledGrid>
  );
}
