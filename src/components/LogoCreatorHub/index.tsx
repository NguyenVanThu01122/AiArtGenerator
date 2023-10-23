import logoCreator from "../../images/iconLogin1.png";
import { WrapperLogo } from "./styles";
export function LogoCreatorHub() {
  return (
    <WrapperLogo>
      <img src={logoCreator} alt="iconAiArt" />
      <span>CreatorHub</span>
    </WrapperLogo>
  );
}
