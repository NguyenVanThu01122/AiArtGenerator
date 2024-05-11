import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import faDiscord from "../../images/iconDiscordAiArt.svg";
import faFacebook from "../../images/iconFacebookAiArt.svg";
import faTiktok from "../../images/iconTiktok.svg";
import faInstagram from "../../images/iconTwitter.svg";
import { NOTIFICATION } from "../../utils/constants";
import ImageGeneral from "../Ui/image";
import { FollowOptions, SelectSocialMedia, TitleFollow } from "./styles";
import { RootState } from "../../redux/Slices/RootReducer";

const socialMediaLinks = [
  {
    image: faInstagram,
    link: "https://instagram.com/vanthu_0112?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
    alt: "Instagram",
  },
  {
    image: faTiktok,
    link: "https://www.tiktok.com/@creatorhub.ai?_t=8gVOwiPr5P8&_r=1",
    alt: "Tiktok",
  },
  {
    image: faFacebook,
    link: "https://www.facebook.com/profile.php?id=100065754240272",
    alt: "Facebook",
  },
  {
    image: faDiscord,
    link: "",
    alt: "Discord",
  },
];

export default function FollowSocialMedia() {
  const { t } = useTranslation();
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu);

  return (
    <FollowOptions>
      <TitleFollow>{t("FOLLOW US ON")}</TitleFollow>
      <SelectSocialMedia closeMenu={closeMenu}>
        {socialMediaLinks.map((item: any, index: number) => (
          <ImageGeneral
            key={index}
            alt={item?.alt}
            src={item?.image}
            onClick={() =>
              item?.link
                ? window.location.assign(item?.link)
                : toast.error(t(NOTIFICATION))
            }
          />
        ))}
      </SelectSocialMedia>
    </FollowOptions>
  );
}
