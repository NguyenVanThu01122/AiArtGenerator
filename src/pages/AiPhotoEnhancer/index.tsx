import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import ButtonGeneral from "../../components/Ui/button";
import ImageGeneral from "../../components/Ui/image";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import imgPhoto from "../../images/image-photo.svg";
import imgLoading from "../../images/img-loading1.gif";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import {
  deductCreditsAiEnhancer,
  generateAiPhotoEnhancer,
} from "../../services/aiPhotoEnhancer";
import { ERROR_MESSAGES, FILE_FORMAT } from "../../utils/constants";
import { useUploadFile } from "../../utils/handleUploadFile";
import { convertImageToBase64 } from "../../utils/imageToBase64";
import { useCheckCredit } from "../../utils/useCheckCredit";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { useDownloadUtils } from "../../utils/useDownloadUtils";
import { useGetInfoUser } from "../../utils/useGetInfoUser";
import {
  AiPhotoEnhancerText,
  BackGenerate,
  BoxMainContent,
  BoxResult,
  BoxUploadedImage,
  ChangeItem,
  ChangePhoto,
  ChangePhotoItem,
  ContentNotUploaded,
  ContentText,
  CreateUpload,
  DescriptionEnhancer,
  FormatUploadFile,
  ImageItem,
  ImagePhotoEnhancer,
  ImageResult,
  InputFile,
  ItemBack,
  LoadingItem,
  NotUploaded,
  PhotoEnhancer,
  SectionContents,
  TermsOfService,
  TextContent,
  TitlePage,
  UploadImage,
  UploadItem,
  UploadText,
  WrapperPhotoEnhancer,
} from "./styles";

export function AiPhotoEnhancer() {
  const { t } = useTranslation();
  const [resultImage, setResultImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state: RootState) => state.app.user);
  const { handleDownloadImage } = useDownloadUtils();
  const { handleCheckCredit } = useCheckCredit();
  const [getUser] = useGetInfoUser();
  const { handleCheckLogin } = useCheckLogin();
  const {
    fileUpload,
    uploadImage,
    setFileUpload,
    setUploadImage,
    handleUploadImage,
  } = useUploadFile();

  // hàm generate ảnh
  const handleGenerateImage = () => {
    if (handleCheckLogin()) {
      return;
    }
    if (handleCheckCredit(user?.credits ?? 0, 4)) {
      return;
    }
    setIsLoading(true);
    const formData = new FormData(); // tạo mới đối tượng formData
    formData.append("file", fileUpload as File);
    generateAiPhotoEnhancer(formData) // call api generate ảnh
      .then(async (res) => {
        const base64ImageString = convertImageToBase64(res.data);
        setResultImage(await base64ImageString);
        setIsLoading(false);
        toast.success(res.data.message ?? "Generate success!");
        await deductCreditsAiEnhancer() // call api Trừ credits với các lần sử dụng
          .then(() => getUser()) // call user lại để cập nhật lại số credits
          .catch(() => toast.error(t(ERROR_MESSAGES.SERVER_ERROR)));
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(t(ERROR_MESSAGES.SERVER_ERROR));
      });
  };

  const handleBack = () => {
    setUploadImage("");
    setResultImage("");
    setFileUpload(undefined);
    setIsLoading(false);
  };

  return (
    <WrapperPhotoEnhancer>
      <SectionContents>
        {uploadImage ? (
          <BoxUploadedImage>
            <ItemBack onClick={handleBack}>
              <FontAwesomeIcon className="icon-back" icon={faAngleLeft} />
              <BackGenerate>{t("Back to Generate")}</BackGenerate>
            </ItemBack>
            {resultImage ? (
              <BoxResult>
                <ImageResult>
                  <ImageGeneral src={resultImage} alt="" />
                </ImageResult>
                <ButtonGeneral
                  i18nKey="Download"
                  className="btn-download"
                  onClick={() => handleDownloadImage(resultImage, "")}
                />
              </BoxResult>
            ) : (
              <NotUploaded>
                <ContentNotUploaded>
                  <TitlePage>
                    <span>{t("AI")}</span>
                    <PhotoEnhancer>
                      {t("PhotoEnhancer")}
                      <ImageGeneral className="icon-star" src={iconStar} />
                    </PhotoEnhancer>
                  </TitlePage>
                  <TextContent>{t("TextContent")}</TextContent>
                </ContentNotUploaded>
                <CreateUpload>
                  <ChangeItem loading={isLoading}>
                    <ImageGeneral className="image-upload" src={uploadImage} />
                    {isLoading && (
                      <LoadingItem>
                        <ImageGeneral
                          className="img-loading"
                          src={imgLoading}
                        />
                      </LoadingItem>
                    )}
                    <ChangePhotoItem>
                      <ImageGeneral src={iconRotate} alt="" />
                      <ChangePhoto>{t("changePhoto")}</ChangePhoto>
                      <InputFile
                        name="file"
                        type="file"
                        accept={FILE_FORMAT.join(",")}
                        onChange={(e) => handleUploadImage(e)}
                      />
                    </ChangePhotoItem>
                  </ChangeItem>
                  <ButtonGeneral
                    className="btn-generate"
                    onClick={handleGenerateImage}
                    loading={isLoading}
                    disabled={isLoading}
                    i18nKey="Enhance Image - 4 Credits"
                  />
                </CreateUpload>
              </NotUploaded>
            )}
          </BoxUploadedImage>
        ) : (
          <BoxMainContent>
            <ContentText>
              <ImageGeneral className="icon-star" src={iconStar} alt="" />
              <AiPhotoEnhancerText>
                <span>{t("AI")}</span>
                {t("PhotoEnhancer")}
              </AiPhotoEnhancerText>
              <DescriptionEnhancer>
                {t("enhanceDescription")}
              </DescriptionEnhancer>
              <UploadItem>
                <UploadImage>
                  <ImageItem>
                    <ImageGeneral src={iconUploadImg} alt="" />
                  </ImageItem>
                  <UploadText>{t("uploadOrDrop")}</UploadText>
                  <FormatUploadFile>{t("supportedFormats")}</FormatUploadFile>
                  <InputFile
                    name="file"
                    type="file"
                    className="input-upload"
                    accept={FILE_FORMAT.join(",")}
                    onChange={(e) => handleUploadImage(e)}
                  />
                </UploadImage>
              </UploadItem>
              <TermsOfService>{t("termsOfService")}</TermsOfService>
            </ContentText>
            <ImagePhotoEnhancer>
              <ImageGeneral src={imgPhoto} alt="" />
              <div></div>
              <div></div>
              <div></div>
            </ImagePhotoEnhancer>
          </BoxMainContent>
        )}
        <Footer />
      </SectionContents>
    </WrapperPhotoEnhancer>
  );
}
