import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useState } from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import imgPhoto from "../../images/image-photo.svg";
import {
  ItemFooter,
  PageAiPhotoEnhancer,
  SectionContents,
  WrapperAiPhotoEnhancer,
} from "./styles";

export function AiPhotoEnhancer() {
  const [uploadImage, setUploadImage] = useState<any>("");

  // hàm xử lý tải ảnh lên
  const handleChangeImage = (e: any) => {
    const file = e.target.files[0]; // Lấy giá trị file vừa tải lên và gắn vào biến file
    // setFileUpload(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      const base64String = reader.result; // Lưu trữ giá trị base64 string của ảnh vào biến base64String
      setUploadImage(base64String); // Gắn giá trị base64 string thu được vào state image
    };
  };
  return (
    <PageAiPhotoEnhancer>
      <Sidebar />
      <WrapperAiPhotoEnhancer>
        <Header />
        <SectionContents>
          {uploadImage ? (
            <div className="box-upload">
              <div className="item-back" onClick={() => setUploadImage("")}>
                <FontAwesomeIcon className="icon-back" icon={faAngleLeft} />
                <div>Back to Generate</div>
              </div>
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
                    <div className="change-photo">
                      <img src={iconRotate} alt="" />
                      <div>Change Photo</div>
                      <input
                        className="input-upload"
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                  <Button>Enhance Image - 1 Credit</Button>
                </div>
              </div>
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
                  your images to new heights with our powerful AI Photo
                  Enhancer.
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
                      onChange={handleChangeImage}
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
      </WrapperAiPhotoEnhancer>
    </PageAiPhotoEnhancer>
  );
}
