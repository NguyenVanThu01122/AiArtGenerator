import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Hook này sẽ tự động thay đổi ngôn ngữ khi người dùng chọn ngôn ngữ
export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("LANG_STORAGE_KEY") || "eng");
  }, [i18n]);
};
