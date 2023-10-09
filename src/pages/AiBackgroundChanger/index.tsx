import { Button } from "antd";
import { useState } from "react";
import iconCancel from "../../images/icon-cancel.svg";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import {
  ItemBackgroundChange,
  ItemImage,
  PageAIBackgroundChanger,
} from "./styles";

function AiBackgroundChanger() {
  const [fileUpload, setFileUpload] = useState("");
  const [uploadedImage, setUploadedImage] = useState<any>("");

  // hàm xử lý tải ảnh lên
  const handleChangeImage = (e: any) => {
    const file = e.target.files[0]; // Lấy giá trị file vừa tải lên và gắn vào biến file
    setFileUpload(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      const base64String = reader.result; // Lưu trữ giá trị base64 string của ảnh vào biến base64String
      setUploadedImage(base64String); // Gắn giá trị base64 string thu được vào state image
    };
  };

  return (
    <PageAIBackgroundChanger>
      <ItemBackgroundChange>
        <div className="title-page">
          <div>AI BACKGROUND CHANGER</div>
          <div>
            <div>
              Effortless Background Changer Made Possible by <span>AI</span>
              <img src={iconStar} alt="" />
            </div>
          </div>
          <div>
            Add new outstanding background to your original photos using our
            remove background and photo edit tool. Quickly improve your photos
            for easy download or sharing on social media platforms.
          </div>
        </div>
        <div className={`create-upload ${fileUpload && "active-boder"}`}>
          {fileUpload ? (
            <div className="uploaded">
              <img className="img-uploaded" src={uploadedImage} alt="" />
              <div className="box-change">
                <img
                  className="icon-cancel"
                  onClick={() => setFileUpload("")}
                  src={iconCancel}
                  alt=""
                />
                <div className="item-change">
                  <div className="change-img">
                    <img src={iconRotate} alt="" />
                    <div>Change Photo</div>
                  </div>
                  <input
                    className="input-upload"
                    type="file"
                    name="img"
                    accept="image/*"
                    // accept=".jpg,.png" // định dạng ảnh muốn chọn
                    onChange={handleChangeImage}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="not-uploaded">
              <img src={iconUploadImg} alt="" />
              <div className="format-information">
                <div>Upload or drop file here or paste your image ULR</div>
                <div>
                  Supported formats: PNG, JPEG, JPG, File size limit:5MB.
                </div>
              </div>
              <input
                className="input-upload"
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </div>
          )}
        </div>
        <Button className="btn-change">
          <img
            src="https://creatorhub.ai/static/media/ic_btn_bg_maker.23aa8314df7e0308d4a5a859e0710546.svg"
            alt=""
          />
          Change Background - 2 Credit
        </Button>
      </ItemBackgroundChange>
      <ItemImage>
        <img
          src="https://creatorhub.ai/static/media/bg_background_maker_small.119c68722b2159d50e51.png"
          alt=""
        />
      </ItemImage>
    </PageAIBackgroundChanger>
  );
}
export default AiBackgroundChanger;
