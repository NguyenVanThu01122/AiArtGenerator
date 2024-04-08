// import icRight from "../../images/HomePage/";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HeaderHomePage from "./components/Header";
import SectionTextToImage from "./components/SectionTextToImage/indext";
import { BoxContent, HeaderPage, StyledContainer } from "./home.styles";

export function HomePage() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showMenu = () => setIsOpenMenu(true);

  return (
    <StyledContainer>
      <BoxContent>
        <HeaderPage>
          <FontAwesomeIcon
            className="ic-menu"
            icon={faBars}
            onClick={showMenu}
          />
          <HeaderHomePage
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </HeaderPage>

        <SectionTextToImage />
      </BoxContent>
    </StyledContainer>
  );
}
