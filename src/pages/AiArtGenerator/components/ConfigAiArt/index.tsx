import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reduxToolkit/Slices/RootReducer";
import {
  AdvancedSetting,
  AdvancedSettings,
  BlockSettings,
  BoxSlider,
  ContentConfigs,
  CustomLoadingButton,
  CustomSlider,
  DescriptionConfig,
  DetailConfigs,
  ItemBtnGenerate,
  TitleConfig,
  ValueConfig,
  Wrapper,
} from "./styles";
interface ConfigAiArtProps {
  prompt: string;
  isLoading: boolean;
  sliderValueAlpha: number;
  sliderValueScale: number;
  sliderValueSteps: number;
  negativePrompt: string;
  handleGenerate: () => void;
  setSliderValueAlpha: (value: number) => void;
  setSliderValueSteps: (value: number) => void;
  setSliderValueScale: (value: number) => void;
}
interface ConfigData {
  title?: string;
  description?: string;
  value?: number;
  onChange: (newValue: any) => void;
  min?: number | undefined;
  max?: number;
  step?: number;
}

export default function ConfigAiArt({
  prompt,
  isLoading,
  sliderValueAlpha,
  sliderValueScale,
  negativePrompt,
  sliderValueSteps,
  setSliderValueAlpha,
  setSliderValueSteps,
  setSliderValueScale,
  handleGenerate,
}: ConfigAiArtProps) {
  const { t } = useTranslation();
  const [focusIcon, setFocusIcon] = useState(false);
  const uploadFile = useSelector((state: RootState) => state.app.uploadFile);

  const configData: ConfigData[] = [
    {
      title: "Alpha",
      description: "DESCRIPTION_ALPHA",
      value: sliderValueAlpha,
      onChange: setSliderValueAlpha,
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      title: "STEPS",
      description: "DESCRIPTION_STEPS",
      value: sliderValueSteps,
      onChange: setSliderValueSteps,
      min: 10,
      max: 50,
    },
    {
      title: "SCALE",
      description: "DESCRIPTION_SCALE",
      value: sliderValueScale,
      onChange: setSliderValueScale,
      min: 0,
      max: 10,
    },
  ];

  return (
    <Wrapper>
      <ContentConfigs>
        <AdvancedSettings onClick={() => setFocusIcon(!focusIcon)}>
          <AdvancedSetting>{t("ADVANCED SETTINGS")}</AdvancedSetting>
          <FontAwesomeIcon
            className={`${focusIcon ? "reverse-icon" : "reverse-initial"}`}
            icon={faChevronUp}
          />
        </AdvancedSettings>
        {!focusIcon && (
          <BlockSettings>
            {configData.map((item: ConfigData, index: number) => (
              <DetailConfigs key={index}>
                <TitleConfig>{t(item.title as string)}</TitleConfig>
                <DescriptionConfig>
                  {t(item.description as string)}
                </DescriptionConfig>
                <BoxSlider>
                  <CustomSlider
                    min={item.min}
                    max={item.max}
                    step={item.step || 1}
                    onChange={(e: any, value: number | number[]) =>
                      item?.onChange(value as number)
                    }
                    value={item.value}
                    valueLabelDisplay="auto"
                    color="info"
                  />

                  <ValueConfig>{item.value}</ValueConfig>
                </BoxSlider>
              </DetailConfigs>
            ))}
          </BlockSettings>
        )}
      </ContentConfigs>
      <ItemBtnGenerate>
        <CustomLoadingButton
          onClick={handleGenerate}
          loading={isLoading}
          disabled={!uploadFile && !prompt.trim() && !negativePrompt.trim()}
        >
          <span>{t("Generate - 5 credits")}</span>
        </CustomLoadingButton>
      </ItemBtnGenerate>
    </Wrapper>
  );
}
