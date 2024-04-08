import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useClipboard } from "use-clipboard-copy";
import ButtonGeneral from "../../../../components/Ui/button";
import ImageGeneral from "../../../../components/Ui/image";
import icCopy from "../../../../images/ic-copy.svg";
import { useDownloadUtils } from "../../../../utils/useDownloadUtils";

import {
  BackItem,
  BackToGenerate,
  BoxResult,
  ButtonGroup,
  Content,
  ContentText,
  DisplayImage,
  IconBack,
  ImageResult,
  InfoParameter,
  ResultsItem,
  SectionParameter,
  TitlePage,
  TitleParameter,
} from "./styles";

type AiArtResultProps = {
  resultImage: string;
  selectStyle: any;
  sliderValueSteps: number;
  sliderValueScale: number;
  sliderValueAlpha: number;
  prompt: string;
  negativePrompt: string;
  handleBack: () => void;
};

const AiArtResult = ({
  resultImage,
  selectStyle,
  sliderValueSteps,
  sliderValueScale,
  sliderValueAlpha,
  prompt,
  negativePrompt,
  handleBack,
}: AiArtResultProps) => {
  const { t } = useTranslation();
  const { handleDownloadImage } = useDownloadUtils();
  const clipboard = useClipboard();

  const detailParameters = [
    {
      title: "Style",
      content: selectStyle ? selectStyle.name : "-",
    },
    {
      title: "Step",
      content: sliderValueSteps,
    },
    {
      title: "Created",
      content: new Date().toDateString(),
    },
    {
      title: "Guidance Scale",
      content: sliderValueScale,
    },
    {
      title: "Alpha",
      content: sliderValueAlpha,
    },
    {
      title: "Prompt",
      content: prompt.trim() ? prompt.trim() : "-",
    },
    {
      title: "Negative Prompt",
      content: negativePrompt.trim() ? negativePrompt.trim() : "-",
    },
  ];

  const [textToCopyRef] = useState<any>(null);

  const handleCopyText = () => {
    clipboard.copy(textToCopyRef);
    toast.success("Copy successfully");
  };

  useEffect(() => {
    const negativePromptItem = detailParameters.find(
      (item) => item.title === "NEGATIVE_PROMPT"
    );
    if (negativePromptItem) {
      textToCopyRef.current = negativePromptItem.content;
    }
  }, []);

  return (
    <ResultsItem>
      <BackItem onClick={handleBack}>
        <IconBack icon={faAngleLeft} />
        <BackToGenerate>{t("Back to Generate")}</BackToGenerate>
      </BackItem>
      <BoxResult>
        <DisplayImage>
          <ImageResult src={resultImage} />
        </DisplayImage>
        <SectionParameter>
          <TitlePage>{t("AI Art Result")}</TitlePage>
          <InfoParameter>
            {detailParameters.map((item, index) => (
              <ContentText key={index}>
                <TitleParameter>{t(item.title)}</TitleParameter>
                <Content>{item.content}</Content>
              </ContentText>
            ))}
          </InfoParameter>
          <ButtonGroup>
            <ButtonGeneral
              i18nKey="Copy Prompt"
              className="copy-button"
              onClick={() => handleCopyText()}
              sx={{ bgcolor: "primary.main" }}
            >
              <ImageGeneral src={icCopy} />
            </ButtonGeneral>
            <ButtonGeneral
              i18nKey="Download"
              className="download-button"
              onClick={() => handleDownloadImage(resultImage, "img.jpg")}
            />
          </ButtonGroup>
        </SectionParameter>
      </BoxResult>
    </ResultsItem>
  );
};

export default AiArtResult;
