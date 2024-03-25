import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import iconCloseSidebar from "../../images/icon-close-sidebar.svg";
import iconOpenSidebar from "../../images/icon-open-sidebar.svg";

import { saveCloseMenu, saveUser } from "../../reduxToolkit/Slices/AppSlice";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import {
  isAuthenticated,
  removeRefreshToken,
  removeToken,
} from "../../utils/handleTokenUtils";
import { LogoCreatorHub } from "../LogoCreatorHub";
import ButtonGeneral from "../Ui/button";
import ImageGeneral from "../Ui/image";
import MobileMenu from "./components/MobileMenu";
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
  const users = useSelector((state: RootState) => state.app?.user);
  const toggleVisibility = useSelector(
    (state: RootState) => state.app.closeMenu
  );
  const [isShowBoxProfile, setIsShowBoxProfile] = useState(false);
  const profileRef = useRef<HTMLImageElement | null>(null);
  const loggedIn = isAuthenticated();

  const filterListPathName = ["/", "/pricing", "/my-account", "/my-avatars"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // hàm xử lý lọc pathName
  const handleFilterPathName = () => {
    switch (pathName) {
      case "/":
        setSavePathName("Home");
        break;
      case "/pricing":
        setSavePathName("Pricing");
        break;
      case "/my-avatars":
        setSavePathName("My Avatars");
        break;
      case "/my-account":
        setSavePathName("My Account");
        break;
      case "/ai-art-generator":
        setSavePathName("/ AI Art Generator");
        break;
      case "/ai-photo-enhancer":
        setSavePathName("/ AI Photo Enhancer");
        break;
      case "/ai-background-remove":
        setSavePathName("/ AI Background Remove");
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
    // dispatch(saveLogin(false));
    navigate("/sign-in");
  };

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url);
    setIsShowBoxProfile(false);
  };

  const toggleMenuVisibility = () => dispatch(saveCloseMenu(!toggleVisibility));

  // hàm chuyển đổi trạng thái của boxProfile
  const toggleBoxProfile = () => setIsShowBoxProfile(!isShowBoxProfile);

  useEffect(() => {
    handleFilterPathName();
  }, [pathName]);

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
        {toggleVisibility ? (
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
              Products <span>{savePathName}</span>
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
          <UserInfo />
          <ContainerProfile ref={profileRef}>
            <ImageGeneral
              className="avatar"
              onClick={toggleBoxProfile}
              src={users?.avatar || imgAvatarDefault}
            />
            {isShowBoxProfile && (
              <BoxProfile>
                <ContentUser>
                  <ImageGeneral
                    className="avatar"
                    src={users?.avatar || imgAvatarDefault}
                  />

                  <UserInfo isShowBoxProfile={isShowBoxProfile} />
                </ContentUser>
                <SelectItem>
                  <MenuItem onClick={() => handleRedirect("/my-account")}>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </SelectItem>
              </BoxProfile>
            )}
          </ContainerProfile>
        </BoxAccount>
      ) : (
        <ButtonGeneral onClick={() => navigate("/sign-in")}>
          Log In
        </ButtonGeneral>
      )}
    </WrapperHeader>
  );
}
export default Header;
