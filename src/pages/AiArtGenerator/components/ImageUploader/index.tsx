import { useDispatch } from "react-redux";
import ImageGeneral from "../../../../components/Ui/image";
import InputGeneral from "../../../../components/Ui/input";
import iconCancel from "../../../../images/icon-cancel.svg";
import iconRotate from "../../../../images/icon-rotare.svg";
import iconUploadImg from "../../../../images/icon-upload-img.svg";
import { uploadFile } from "../../../../reduxToolkit/Slices/AppSlice";
import { FILE_FORMAT } from "../../../../utils/constants";
import { useUploadFile } from "../../../../utils/handleUploadFile";
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

function ImageUploader() {
  const { handleUploadImage, uploadImage, setUploadImage } = useUploadFile();
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
              <ChangePhoto>Change Photo</ChangePhoto>
              <InputGeneral
                className="input-upload"
                type="file"
                inputProps={{ accept: FILE_FORMAT }}
                onChange={handleUploadImage}
              />
            </ChangeItem>
          </ChangeImage>
        </UploadedImage>
      ) : (
        <UploadImage>
          <IconUpload>
            <ImageGeneral src={iconUploadImg} alt="" />
          </IconUpload>
          <ContentUpload>Upload or drop file here</ContentUpload>
          <FormatFile>
            Supported formats: PNG, JPEG, JPG, File size limit:5MB.
          </FormatFile>
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
