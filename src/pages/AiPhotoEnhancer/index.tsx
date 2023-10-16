import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message } from "antd";
import axios from "axios";
import { Buffer } from "buffer";
import { useState } from "react";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import imgPhoto from "../../images/image-photo.svg";
import imgLoading from "../../images/img-loading1.gif";
import { FILE_FORMAT, MAX_SIZE_INBYTES } from "../../utils/contanst";
import { ItemFooter, PageAiPhotoEnhancer, SectionContents } from "./styles";

export function AiPhotoEnhancer() {
  const [uploadImage, setUploadImage] = useState<any>("");
  const [fileUpload, setFileUpload] = useState();
  const [resultImage, setResultImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // hàm upload ảnh lên
  const handleUploadImage = (e: any) => {
    const file = e.target.files[0]; // Lấy giá trị file vừa tải lên và gắn vào biến file

    if (file.size > MAX_SIZE_INBYTES) {
      message.error("File size exceeds the allowed limit.");
      return; // Dừng các dòng code phía sau nếu vượt quá giới hạn
    } else if (FILE_FORMAT.includes(file.type) === false) {
      message.error("Please upload type image jpeg, jpg, png");
      return; // file.type === false dừng các dòng code phía sau
    }
    setFileUpload(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      const base64String = reader.result; // Lưu trữ giá trị base64 string của ảnh vào biến base64String
      setUploadImage(base64String); // Gắn giá trị base64 string thu được vào state image
    };
  };

  // hàm generate ảnh
  const handleGenerateImage = () => {
    setIsLoading(true);
    const formData: any = new FormData(); // tạo mới đối tượng formData
    formData.append("file", fileUpload);
    axios
      .post("https://enhance-core.apero.vn/api/v1/image-enhance", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        const base64ImageString =
          "data:image/png;base64," +
          Buffer.from(res.data, "binary").toString("base64");
        setResultImage(base64ImageString);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        message.error("Error server");
      });
  };

  // hàm downdload ảnh
  const handleDowndloadImage = () => {
    const a = document.createElement("a");
    a.href = resultImage;
    a.download = "my-image.png";
    a.click();
  };

  const handleBack = () => {
    setUploadImage("");
    setResultImage("");
    setFileUpload(undefined);
  };

  return (
    <PageAiPhotoEnhancer>
      <SectionContents>
        {uploadImage ? (
          <div className="box-upload">
            <div className="item-back" onClick={handleBack}>
              <FontAwesomeIcon className="icon-back" icon={faAngleLeft} />
              <div>Back to Generate</div>
            </div>
            {resultImage ? (
              <div className="box-result">
                <div className="result-img">
                  <img src={resultImage} alt="" />
                </div>
                <Button
                  className="btn-downdload"
                  onClick={handleDowndloadImage}
                >
                  Downdload
                </Button>
              </div>
            ) : (
              <div className="item-upload">
                <div className="title-upload">
                  <div className="ai-photo">
                    <span>AI</span>
                    <div className="photo-enhance">
                      Photo Enhancer
                      <img className="icon-star" src={iconStar} alt="" />
                    </div>
                  </div>
                  <div>
                    Enhance colors, details, and sharpness effortlessly. Elevate
                    your images to new heights with our powerful AI Photo
                    Enhancer.
                  </div>
                </div>
                <div className="create-upload">
                  <div className="item-change">
                    <img className="image-upload" src={uploadImage} alt="" />
                    {isLoading && (
                      <div className="item-loading">
                        <img className="img-loading" src={imgLoading} alt="" />
                      </div>
                    )}

                    <div className="change-photo">
                      <img src={iconRotate} alt="" />
                      <div>Change Photo</div>
                      <input
                        className="input-upload"
                        type="file"
                        name="img"
                        accept=".jpg,.png,.jpeg"
                        onChange={handleUploadImage}
                      />
                    </div>
                  </div>
                  <Button
                    className="btn-generate"
                    onClick={handleGenerateImage}
                    loading={isLoading}
                  >
                    Enhance Image - 1 Credit
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="box-contents">
            <div className="create-photo">
              <img className="icon-star" src={iconStar} alt="" />
              <div>
                <span>AI</span>
                Photo Enhancer
              </div>
              <div>
                Enhance colors, details, and sharpness effortlessly. Elevate
                your images to new heights with our powerful AI Photo Enhancer.
              </div>
              <div className="select-upload-image">
                <div className="upload-image">
                  <div className="image">
                    <img src={iconUploadImg} alt="" />
                  </div>
                  <div>Upload or drop file here</div>
                  <div>
                    Supported formats: PNG, JPEG, JPG, File size limit:5MB.
                  </div>
                  <input
                    className="input-upload"
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleUploadImage}
                  />
                </div>
              </div>
              <div>
                By continuing, you accept our Terms of Service and acknowledge
                receipt of our Privacy and Cookie Policy.
              </div>
            </div>
            <div className="image-ai">
              <img src={imgPhoto} alt="" />
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </SectionContents>
      <ItemFooter>
        <div>© 2023 by VisionLab., Inc. All Rights Reserved.</div>
        <div className="select-item">
          <div>Privacy Policy</div>
          <div>Terms of Services</div>
          <div>Contact Us</div>
        </div>
      </ItemFooter>
    </PageAiPhotoEnhancer>
  );
}
