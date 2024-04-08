import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import ButtonGeneral from "../../components/Ui/button";
import ImageGeneral from "../../components/Ui/image";
import imgRemove from "../../images/AiBackgroundRemove/ic_btn_bg_maker.23aa8314df7e0308d4a5a859e0710546.svg";
import imgPhoto from "../../images/AiBackgroundRemove/image-photo.f0322254af0bf8d296f1926c692203a9.svg";
import icBack from "../../images/ic-back.svg";
import iconCancel from "../../images/icon-cancel.svg";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import imgLoading from "../../images/img-loading1.gif";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import {
  deductCreditsRemoveBackground,
  removeBackground,
} from "../../services/aiBackgroundRemove";
import { ERROR_MESSAGES, FILE_FORMAT } from "../../utils/constants";
import { useUploadFile } from "../../utils/handleUploadFile";
import { convertImageToBase64 } from "../../utils/imageToBase64";
import { useCheckCredit } from "../../utils/useCheckCredit";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { useDownloadUtils } from "../../utils/useDownloadUtils";
import { useGetInfoUser } from "../../utils/useGetInfoUser";
import {
  AdditionalInfo,
  BackGenerate,
  BoxChange,
  BoxResult,
  BoxUploadImage,
  ChangeItem,
  ChangePhoto,
  ContainerContent,
  ContentHeader,
  FormatFile,
  FormatInfo,
  ImageResult,
  InputFile,
  ItemBack,
  ItemBackgroundChange,
  ItemImage,
  ItemLoading,
  NotUploaded,
  SectionContent,
  SectionUploadImage,
  StyledButton,
  TextChange,
  TextContent,
  TextFormat,
  TitlePage,
  Uploaded,
  WrapperAIBackgroundChanger,
} from "./styles";

function AiBackgroundRemove() {
  const { t } = useTranslation();
  const [resultImage, setResultImage] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.app.user);
  const { handleDownloadImage } = useDownloadUtils();
  const { handleCheckCredit } = useCheckCredit();
  const { handleCheckLogin } = useCheckLogin();
  const [getUser] = useGetInfoUser();

  const {
    handleUploadImage,
    fileUpload,
    setFileUpload,
    uploadImage,
    setUploadImage,
  } = useUploadFile();

  // hàm xóa background
  const handleRemoveBackground = () => {
    if (handleCheckLogin()) {
      return;
    }
    if (handleCheckCredit(user?.credits ?? 0, 2)) {
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", fileUpload as File);

    removeBackground(formData)
      .then(async (res) => {
        const base64ImageString = convertImageToBase64(res.data);
        setResultImage(await base64ImageString);
        setLoading(false);
        await deductCreditsRemoveBackground() // gọi api Trừ credits với các lần sử dụng
          .then(() => getUser()) // cập nhật lại user khi trừ credits success
          .catch(() => toast.error(ERROR_MESSAGES.CREDIT_DEDUCTION_FAILED));
      })
      .catch((error) => {
        setLoading(false);
        toast.error(ERROR_MESSAGES.SERVER_ERROR);
      });
  };

  const handleBack = () => {
    setResultImage("");
    setUploadImage("");
    setFileUpload(undefined);
  };

  return (
    <WrapperAIBackgroundChanger>
      <ContainerContent>
        {resultImage ? (
          <BoxResult>
            <ItemBack onClick={handleBack}>
              <ImageGeneral src={icBack} alt="" />
              <BackGenerate>{t("backToGenerate")}</BackGenerate>
            </ItemBack>
            <ImageResult>
              <ImageGeneral className="img-result" src={resultImage} alt="" />
            </ImageResult>
            <ButtonGeneral
              i18nKey="Download"
              className="btn-download"
              onClick={() => handleDownloadImage(resultImage, "my-image.jpg")}
            />
          </BoxResult>
        ) : (
          <BoxUploadImage>
            <ItemBackgroundChange>
              <SectionContent>
                <TitlePage> {t("AI BACKGROUND REMOVE")}</TitlePage>
                <TextContent>
                  <ContentHeader>
                    {t("Effortless Background Remove Made Possible by")}
                    <span>{t("AI")}</span>
                    <ImageGeneral src={iconStar} alt="" />
                    <ImageGeneral src={iconStar} alt="" />
                  </ContentHeader>
                </TextContent>
                <AdditionalInfo>{t("Content Additional Info")}</AdditionalInfo>
              </SectionContent>
              <SectionUploadImage fileUpload={fileUpload} loading={loading}>
                {fileUpload ? (
                  <Uploaded>
                    <ImageGeneral className="img-uploaded" src={uploadImage} />
                    {loading && (
                      <ItemLoading>
                        <ImageGeneral
                          className="img-loading"
                          src={imgLoading}
                        />
                      </ItemLoading>
                    )}
                    <BoxChange loading={loading}>
                      <ImageGeneral
                        className="icon-cancel"
                        onClick={() => handleBack()}
                        src={iconCancel}
                      />
                      <ChangeItem>
                        <TextChange>
                          <ImageGeneral src={iconRotate} alt="" />
                          <ChangePhoto>{t("changePhoto")}</ChangePhoto>
                        </TextChange>
                        <InputFile
                          name="file"
                          type="file"
                          accept={FILE_FORMAT.join(",")}
                          onChange={handleUploadImage}
                        />
                      </ChangeItem>
                    </BoxChange>
                  </Uploaded>
                ) : (
                  <NotUploaded>
                    <ImageGeneral src={iconUploadImg} alt="" />
                    <FormatInfo>
                      <TextFormat>{t("uploadOrDrop")}</TextFormat>
                      <FormatFile>{t("supportedFormats")}</FormatFile>
                    </FormatInfo>
                    <InputFile
                      name="file"
                      type="file"
                      accept={FILE_FORMAT.join(",")}
                      onChange={handleUploadImage}
                    />
                  </NotUploaded>
                )}
              </SectionUploadImage>
              <StyledButton
                fileUpload={fileUpload}
                onClick={handleRemoveBackground}
                disabled={!uploadImage && !fileUpload}
                loading={loading}
              >
                <ImageGeneral src={imgRemove} alt="" />
                {t("Remove Background - 2 Credit")}
              </StyledButton>
            </ItemBackgroundChange>
            <ItemImage>
              <ImageGeneral src={imgPhoto} />
            </ItemImage>
          </BoxUploadImage>
        )}
      </ContainerContent>

      <Footer />
    </WrapperAIBackgroundChanger>
  );
}
export default AiBackgroundRemove;
