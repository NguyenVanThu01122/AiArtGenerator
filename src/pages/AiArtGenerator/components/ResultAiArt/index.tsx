import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
  const { handleCopyText, handleDownloadImage } = useDownloadUtils();

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

  return (
    <ResultsItem>
      <BackItem onClick={handleBack}>
        <IconBack icon={faAngleLeft} />
        <BackToGenerate>Back to Generate</BackToGenerate>
      </BackItem>
      <BoxResult>
        <DisplayImage>
          <ImageResult src={resultImage} />
        </DisplayImage>
        <SectionParameter>
          <TitlePage>AI Art Result</TitlePage>
          <InfoParameter>
            {detailParameters.map((item, index) => (
              <ContentText key={index}>
                <TitleParameter>{item.title}</TitleParameter>
                <Content>{item.content}</Content>
              </ContentText>
            ))}
          </InfoParameter>
          <ButtonGroup>
            <ButtonGeneral
              className="copy-button"
              //onClick={() => handleCopyText(negativePrompt.trim())}
            >
              <ImageGeneral src={icCopy} />
              Copy Prompt
            </ButtonGeneral>
            <ButtonGeneral
              className="download-button"
              onClick={() => handleDownloadImage(resultImage, "img.jpg")}
            >
              Download - 1 Credit
            </ButtonGeneral>
          </ButtonGroup>
        </SectionParameter>
      </BoxResult>
    </ResultsItem>
  );
};

export default AiArtResult;
