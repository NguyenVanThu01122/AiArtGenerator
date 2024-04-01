import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";
import iconOpenSidebar from "../../images/icon-open-sidebar.svg";

import { saveCloseMenu, saveUser } from "../../reduxToolkit/Slices/AppSlice";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import { ROUTES } from "../../routes/routes";
import {
  isAuthenticated,
  removeRefreshToken,
  removeToken,
} from "../../utils/handleTokenUtils";
import { LogoCreatorHub } from "../LogoCreatorHub";
import ButtonGeneral from "../Ui/button";
import ImageGeneral from "../Ui/image";
import MobileMenu from "./components/MobileMenu";
import ModeToggle from "./components/ModeToggle";
import UserInfo from "./components/UserInfo";
import {
  BoxAccount,
  BoxProfile,
  ContainerProfile,
  ContentUser,
  DisPlayPathName,
  MenuItem,
  MobileLogoCreator,
  PathNameItem,
  PathNameProducts,
  SelectItem,
  WrapperHeader,
} from "./styles";

function Header() {
  const pathName = window.location.pathname;
  const [savePathName, setSavePathName] = useState("");
  const { user, closeMenu } = useSelector((state: RootState) => state.app);

  const [isShowBoxProfile, setIsShowBoxProfile] = useState(false);
  const profileRef = useRef<HTMLImageElement | null>(null);
  const loggedIn = isAuthenticated();

  const filterListPathName = [
    ROUTES.HOME,
    ROUTES.PRICING,
    ROUTES.MY_ACCOUNT,
    ROUTES.AI_IMAGE_RESULT,
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // hàm xử lý lọc pathName
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterPathName = () => {
    switch (pathName) {
      case ROUTES.HOME:
        setSavePathName("Home");
        break;
      case ROUTES.PRICING:
        setSavePathName("Pricing");
        break;
      case ROUTES.AI_IMAGE_RESULT:
        setSavePathName("AI Image Result");
        break;
      case ROUTES.MY_ACCOUNT:
        setSavePathName("My Account");
        break;
      case ROUTES.AI_ART_GENERATOR:
        setSavePathName("AI Art Generator");
        break;
      case ROUTES.AI_PHOTO_ENHANCER:
        setSavePathName("AI Photo Enhancer");
        break;
      case ROUTES.AI_BACKGROUND_REMOVE:
        setSavePathName("AI Background Remove");
        break;
      default:
        setSavePathName("");
    }
  };

  // hàm sign out
  const handleLogout = () => {
    removeToken();
    removeRefreshToken();
    dispatch(saveUser(null));
    navigate(ROUTES.SIGN_IN);
  };

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setIsShowBoxProfile(false);
  };

  const toggleMenuVisibility = () => dispatch(saveCloseMenu(!closeMenu));

  // hàm chuyển đổi trạng thái của boxProfile
  const toggleBoxProfile = () => setIsShowBoxProfile(!isShowBoxProfile);

  useEffect(() => {
    handleFilterPathName();
  }, [handleFilterPathName, pathName]);

  // Sử dụng useEffect để theo dõi sự kiện click trên document
  useEffect(() => {
    // Hàm xử lý khi click ra ngoài hộp profile
    const handleDocumentClick = (e: any) => {
      const target = e.target; // Lấy phần tử mà người dùng đã click vào
      if (
        isShowBoxProfile &&
        profileRef.current &&
        !profileRef.current.contains(target) // Kiểm tra xem phần tử mà user đã click vào có nằm trong hộp profile hay không
      ) {
        setIsShowBoxProfile(false); // Nếu click ra ngoài hộp menu, ẩn hộp profile
      }
    };
    document.addEventListener("click", handleDocumentClick); // Dòng này lắng nghe sự kiện click lên toàn bộ tài liệu (document). Khi một sự kiện click xảy ra bất kỳ nơi nào trên trang, handleDocumentClick sẽ được gọi.
    return () => document.removeEventListener("click", handleDocumentClick); // Cleanup listener khi component unmount
  }, [isShowBoxProfile]);

  return (
    <WrapperHeader>
      <DisPlayPathName>
        {closeMenu ? (
          <ImageGeneral
            className="ic-close"
            onClick={toggleMenuVisibility}
            src={iconOpenSidebar}
            alt=""
          />
        ) : (
          <ImageGeneral
            className="ic-close"
            onClick={toggleMenuVisibility}
            src={iconCloseSidebar}
            alt=""
          />
        )}
        <PathNameItem>
          {filterListPathName.includes(pathName) ? (
            savePathName
          ) : (
            <PathNameProducts>
              Products /<span>{savePathName}</span>
            </PathNameProducts>
          )}
        </PathNameItem>
      </DisPlayPathName>

      <MobileMenu />
      <MobileLogoCreator>
        <LogoCreatorHub />
      </MobileLogoCreator>

      {loggedIn ? (
        <BoxAccount>
          <ModeToggle />
          <UserInfo />
          <ContainerProfile ref={profileRef}>
            <ImageGeneral
              className="avatar"
              onClick={toggleBoxProfile}
              src={user?.avatar || imgAvatarDefault}
            />
            {isShowBoxProfile && (
              <BoxProfile>
                <ContentUser>
                  <ImageGeneral
                    className="avatar"
                    src={user?.avatar || imgAvatarDefault}
                  />

                  <UserInfo isShowBoxProfile={isShowBoxProfile} />
                </ContentUser>
                <SelectItem>
                  <MenuItem onClick={() => handleRedirect(ROUTES.MY_ACCOUNT)}>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </SelectItem>
              </BoxProfile>
            )}
          </ContainerProfile>
        </BoxAccount>
      ) : (
        <ButtonGeneral onClick={() => navigate(ROUTES.SIGN_IN)}>
          Log In
        </ButtonGeneral>
      )}
    </WrapperHeader>
  );
}
export default Header;
