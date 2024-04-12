import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../routes/routes";
import { verifytoken } from "../../services/auth";
import { SUCCESS_MESSAGE } from "../../utils/constants";
import { useChangeLanguage } from "../../utils/useChangeLanguage";
import { Content, Wrapper } from "./styles";

export default function VerifyRegister() {
  const navigate = useNavigate();
  const [isErrorVerify, setIsErrorVerify] = useState<boolean>();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  useChangeLanguage(); // custom hook này sẽ tự động save language khi user f5

  useEffect(() => {
    // hàm xác thực người dùng mới
    const handleVerifyToken = async () => {
      try {
        const token = searchParams.get("token"); // lấy token từ url
        await verifytoken(token ?? "");
        navigate(ROUTES.SIGN_IN);
        toast.success(t(SUCCESS_MESSAGE.SUCCESS_REGISTER));
      } catch (error) {
        setIsErrorVerify(true);
      }
    };
    if (searchParams.get("token")) {
      handleVerifyToken();
    }
  }, []);

  return (
    <Wrapper>
      {!isErrorVerify && (
        <Content>
          {t("Your link has expired. Please")}
          <span onClick={() => navigate(ROUTES.REGISTER)}>{t("Register")}</span>
          {t("again from the beginning to get the new link again.")}
        </Content>
      )}
    </Wrapper>
  );
}
