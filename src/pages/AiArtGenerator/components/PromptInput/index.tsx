import { useTranslation } from "react-i18next";
import ImageGeneral from "../../../../components/Ui/image";
import TextAreaGeneral from "../../../../components/Ui/textArea";
import icHistory from "../../../../images/ic-history.svg";
import icRandom from "../../../../images/ic-random.svg";
import {
  BoxPrompt,
  ContentPrompt,
  GroupTool,
  HeaderPrompt,
  PromptNegative,
  PromptTitle,
  TitleHeader,
  TitleNegative,
  Wrapper,
} from "./styles";
type PromptInputProps = {
  prompt: string;
  setPrompt: (value: string) => void;
  negativePrompt: string;
  setNegativePrompt: (value: string) => void;
};
const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  setPrompt,
  negativePrompt,
  setNegativePrompt,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <BoxPrompt>
        <HeaderPrompt>
          <TitleHeader>{t("Create your prompt")}</TitleHeader>
          <GroupTool>
            <ImageGeneral src={icHistory} alt="" />
            <ImageGeneral src={icRandom} alt="" />
          </GroupTool>
        </HeaderPrompt>
        <ContentPrompt>
          {t(
            "Describe whatever you want or directly click the Suggestion icon to quickly generate AI art."
          )}
        </ContentPrompt>
        <PromptTitle>{t("Prompt")}</PromptTitle>
        <TextAreaGeneral
          style={{ resize: "none" }}
          className="custom-textarea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t("Enter prompt...")}
        />
      </BoxPrompt>
      <PromptNegative>
        <TitleNegative>{t("Negative Prompt")}</TitleNegative>
        <TextAreaGeneral
          style={{ resize: "none" }}
          className="custom-textarea"
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
          placeholder={t("Enter negative prompt (optional)")}
        />
      </PromptNegative>
    </Wrapper>
  );
};

export default PromptInput;
