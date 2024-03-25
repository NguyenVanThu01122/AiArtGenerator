import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonGeneral from "../../../../components/Ui/button";
import ImageGeneral from "../../../../components/Ui/image";
import icCopy from "../../../../images/ic-copy.svg";
import { useDownloadUtils } from "../../../../utils/useDownloadUtils";
import {
  BackItem,
  BoxResult,
  ButtonGroup,
  ContentBack,
  DetailResult,
  DisplayImage,
  IconBack,
  ImageResult,
  InformationResult,
  ItemPrompt,
  ResultsItem,
  SectionParameter,
  TextGroup,
  TextPrompt,
  TitlePage,
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
  const { handleCopyText, handleDownloadImage, textToCopyRef } =
    useDownloadUtils();

  return (
    <ResultsItem>
      <BackItem onClick={handleBack}>
        <IconBack icon={faAngleLeft} />
        <ContentBack>Back to Generate</ContentBack>
      </BackItem>
      <BoxResult>
        <DisplayImage>
          <ImageResult src={resultImage} alt="" />
        </DisplayImage>
        <SectionParameter>
          <TitlePage>AI Art Result</TitlePage>
          <InformationResult>
            <DetailResult>
              <TextGroup>
                <div>Style</div>
                <div>{selectStyle ? selectStyle.name : "-"}</div>
              </TextGroup>
              <TextGroup>
                <div>Step</div>
                <div>{sliderValueSteps}</div>
              </TextGroup>
            </DetailResult>
            <DetailResult>
              <TextGroup>
                <div>Created</div>
                <div>{new Date().toDateString()}</div>
              </TextGroup>
              <TextGroup>
                <div>Guidance Scale</div>
                <div>{sliderValueScale}</div>
              </TextGroup>
            </DetailResult>
            <DetailResult>
              <TextGroup>
                <div>Alpha</div>
                <div>{sliderValueAlpha}</div>
              </TextGroup>
            </DetailResult>
          </InformationResult>
          <ItemPrompt>
            <TextPrompt>
              <div>Prompt</div>
              <div ref={textToCopyRef}>
                {prompt.trim() ? prompt.trim() : "-"}
              </div>
            </TextPrompt>
            <TextPrompt>
              <div>Negative Prompt</div>
              <div>{negativePrompt.trim() ? negativePrompt.trim() : "-"}</div>
            </TextPrompt>
          </ItemPrompt>
          <ButtonGroup>
            <ButtonGeneral className="copy-button" onClick={handleCopyText}>
              <ImageGeneral src={icCopy} alt="" />
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
