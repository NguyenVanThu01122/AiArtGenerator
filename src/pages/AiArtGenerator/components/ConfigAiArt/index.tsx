import { useState } from "react";
import ImageGeneral from "../../../../components/Ui/image";
import iconShow from "../../../../images/icon-show.svg";

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
  sliderValueSteps,
  setSliderValueAlpha,
  setSliderValueSteps,
  setSliderValueScale,
  handleGenerate,
  negativePrompt,
}: ConfigAiArtProps) {
  const [focusIcon, setFocusIcon] = useState(false);
  const uploadFile = useSelector((state: RootState) => state.app.uploadFile);

  const configData: ConfigData[] = [
    {
      title: "Alpha",
      description:
        "Adjust the level of control over output specificity. Higher values provide more specific output control, lower values allow for greater variation and creativity.",
      value: sliderValueAlpha,
      onChange: setSliderValueAlpha,
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      title: "Steps",
      description:
        "Determine the level of iteration for text generation. Higher values refine output, lower values increase diversity.",
      value: sliderValueSteps,
      onChange: setSliderValueSteps,
      min: 10,
      max: 50,
    },
    {
      title: "Scale",
      description:
        "Control the balance between creativity and control in text generation. Higher values increase control, lower values enhance creativity.",
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
          <AdvancedSetting>ADVANCED SETTINGS</AdvancedSetting>
          <ImageGeneral
            className={`${focusIcon ? "reverse-icon" : "reverse-initial"}`}
            src={iconShow}
          />
        </AdvancedSettings>
        {!focusIcon && (
          <BlockSettings>
            {configData.map((item: ConfigData, index: number) => (
              <DetailConfigs key={index}>
                <TitleConfig>{item.title}</TitleConfig>
                <DescriptionConfig>{item.description}</DescriptionConfig>
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
          <span>Generate - 2 credits</span>
        </CustomLoadingButton>
      </ItemBtnGenerate>
    </Wrapper>
  );
}
