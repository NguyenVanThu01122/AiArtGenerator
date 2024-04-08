import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "./styles";

export default function LanguageSelection() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("LANG_STORAGE_KEY") || "eng"
  );

  const changeLanguage = (e: any) => {
    const languageValue = e.target.value;
    setSelectedLanguage(languageValue);
    i18n.changeLanguage(languageValue);
    localStorage.setItem("LANG_STORAGE_KEY", languageValue);
  };

  return (
    <div>
      <SelectLanguage
        id="language"
        value={selectedLanguage}
        onChange={changeLanguage}
        color="primary"
      >
        <MenuItem value="eng">English</MenuItem>
        <MenuItem value="vie">Vietnamese</MenuItem>
      </SelectLanguage>
    </div>
  );
}
