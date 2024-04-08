import { useDispatch } from "react-redux";
import ImageGeneral from "../../../../components/Ui/image";
import InputGeneral from "../../../../components/Ui/input";
import iconCancel from "../../../../images/icon-cancel.svg";
import iconRotate from "../../../../images/icon-rotare.svg";
import iconUploadImg from "../../../../images/icon-upload-img.svg";
import { uploadFile } from "../../../../reduxToolkit/Slices/AppSlice";
import { FILE_FORMAT } from "../../../../utils/constants";

import { useTranslation } from "react-i18next";
import {
  ChangeImage,
  ChangeItem,
  ChangePhoto,
  ContentUpload,
  CustomInput,
  FormatFile,
  IconUpload,
  UploadImage,
  UploadedImage,
  Wrapper,
} from "./styles";
interface ImageUploaderProps {
  handleUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage: string | null;
  setUploadImage: React.Dispatch<React.SetStateAction<string | null>>;
}

function ImageUploader({
  uploadImage,
  handleUploadImage,
  setUploadImage,
}: ImageUploaderProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRemoveImage = () => {
    setUploadImage(null);
    dispatch(uploadFile(false));
  };

  return (
    <Wrapper>
      {uploadImage ? (
        <UploadedImage>
          <ImageGeneral className="image" src={uploadImage} alt="" />
          <ChangeImage>
            <ImageGeneral
              onClick={handleRemoveImage}
              className="icon-cancel"
              src={iconCancel}
              alt="Cancel"
            />
            <ChangeItem>
              <ImageGeneral src={iconRotate} alt="" />
              <ChangePhoto>{t("changePhoto")}</ChangePhoto>
              <InputGeneral
                className="input-upload"
                type="file"
                inputProps={{ accept: FILE_FORMAT }}
                onChange={(e) => handleUploadImage(e)}
              />
            </ChangeItem>
          </ChangeImage>
        </UploadedImage>
      ) : (
        <UploadImage>
          <IconUpload>
            <ImageGeneral src={iconUploadImg} alt="" />
          </IconUpload>
          <ContentUpload>{t("uploadOrDrop")}</ContentUpload>
          <FormatFile>{t("supportedFormats")}</FormatFile>
          <CustomInput
            type="file"
            onChange={handleUploadImage}
            accept={FILE_FORMAT.join(",")}
          />
        </UploadImage>
      )}
    </Wrapper>
  );
}

export default ImageUploader;
