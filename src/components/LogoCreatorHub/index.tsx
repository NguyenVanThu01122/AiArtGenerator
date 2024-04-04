import logoCreator from "../../images/iconLogin1.png";
import ImageGeneral from "../Ui/image";
import { WrapperLogo } from "./styles";
export function LogoCreatorHub() {
  return (
    <WrapperLogo>
      <ImageGeneral src={logoCreator} alt="iconAiArt" />
      <span>CreatorHub</span>
    </WrapperLogo>
  );
}
