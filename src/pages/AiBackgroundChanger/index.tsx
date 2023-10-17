import { Button, message } from "antd";
import axios from "axios";
import { Buffer } from "buffer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import icBack from "../../images/ic-back.svg";
import iconCancel from "../../images/icon-cancel.svg";
import iconRotate from "../../images/icon-rotare.svg";
import iconStar from "../../images/icon-star.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import imgLoading from "../../images/img-loading1.gif";
import { privateAxios } from "../../service/axios";
import { FILE_FORMAT, MAX_SIZE_INBYTES } from "../../utils/contanst";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { useGetInforUser } from "../../utils/useGetInforUser";
import {
  BoxUpload,
  ItemBackgroundChange,
  ItemImage,
  WrapperAIBackgroundChanger,
} from "./styles";

function AiBackgroundChanger() {
  const [fileUpload, setFileUpload] = useState();
  const [uploadedImage, setUploadedImage] = useState<any>("");
  const [resultImage, setResultImage] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [login, navigateLogin] = useCheckLogin();
  const [getUser] = useGetInforUser();
  const user = useSelector((state: any) => state.app.user);
  const navigate = useNavigate();

  // hàm xử lý tải ảnh lên
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
      setUploadedImage(base64String); // Gắn giá trị base64 string thu được vào state image
    };
  };

  // hàm xóa background
  const handleRemoveBackground = () => {
    if (!login) {
      navigateLogin();
      return;
    }
    if (user.credits < 3) {
      message.error("Your credits is not enable. Please purchase credits!");
      navigate("/pricing");
      return;
    }
    setIsloading(true);
    const formData: any = new FormData();
    formData.append("file", fileUpload);
    axios
      .post(
        "https://bgrm-enhance-wrapper.apero.vn/api/v1/bg-remove",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // content-type đinh nghia  kiểu dữ liệu gửi lên
          },
          responseType: "arraybuffer", // responseType định nghĩa kiểu dữ liệi trả về.
        }
      )
      .then(async (res) => {
        const base64ImageString =
          "data:image/png;base64," +
          Buffer.from(res.data, "binary").toString("base64");
        setResultImage(base64ImageString);
        setIsloading(false);
        await privateAxios.get("/user/use-credits", {
          params: {
            type: "REMOVE_BACKGROUND",
          },
        });
        getUser();
      })
      .catch((error) => {
        setIsloading(false);
        message.error("Error server");
      });
  };
  const handleBack = () => {
    setResultImage("");
    setFileUpload(undefined);
  };

  const handleDowndloadImage = () => {
    const a = document.createElement("a");
    a.href = resultImage;
    a.download = "my-image.jpg";
    a.click();
  };
  return (
    <WrapperAIBackgroundChanger>
      {resultImage ? (
        <div className="item-result">
          <div className="back" onClick={handleBack}>
            <img src={icBack} alt="" />
            <div>Back to generate</div>
          </div>
          <div className="box-img">
            <img className="img-result" src={resultImage} alt="" />
          </div>
          <Button className="btn-downdload" onClick={handleDowndloadImage}>
            Downdload
          </Button>
        </div>
      ) : (
        <BoxUpload>
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
                remove background and photo edit tool. Quickly improve your
                photos for easy download or sharing on social media platforms.
              </div>
            </div>
            <div className={`create-upload ${fileUpload && "active-boder"}`}>
              {fileUpload ? (
                <div className="uploaded">
                  <img className="img-uploaded" src={uploadedImage} alt="" />
                  {isloading && (
                    <div className="item-loading">
                      <img className="img-loading" src={imgLoading} alt="" />
                    </div>
                  )}
                  <div className="box-change">
                    <img
                      className="icon-cancel"
                      onClick={() => setFileUpload(undefined)}
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
                        accept=".jpg,.jpeg,.png"
                        onChange={handleUploadImage}
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
                    accept=".jpg,.jpeg,.png"
                    onChange={handleUploadImage}
                  />
                </div>
              )}
            </div>
            <Button
              className="btn-change"
              onClick={handleRemoveBackground}
              disabled={!uploadedImage}
              loading={isloading}
            >
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
        </BoxUpload>
      )}
    </WrapperAIBackgroundChanger>
  );
}
export default AiBackgroundChanger;
