import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Slider, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";
import icCopy from "../../images/ic-copy.svg";
import icHistory from "../../images/ic-history.svg";
import icRandom from "../../images/ic-random.svg";
import iconCancel from "../../images/icon-cancel.svg";
import iconRotate from "../../images/icon-rotare.svg";
import iconShow from "../../images/icon-show.svg";
import iconUploadImg from "../../images/icon-upload-img.svg";
import { privateAxios } from "../../service/axios";
import {
  DEFAULT_ALPHA,
  DEFAULT_SCALE,
  DEFAULT_STEPS,
  FILE_FORMAT,
  MAX_SIZE_INBYTES,
} from "../../utils/contanst";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { useGetInforUser } from "../../utils/useGetInforUser";
import {
  ModalNotificationLogin,
  ResultsItem,
  SectionContents,
  WrapperAiArtGenerator,
} from "./styles";

function AiArtGenerator() {
  const imageRef = useRef(null);
  const [focusIcon, setFocusIcon] = useState(false);
  const textToCopyRef = useRef(null);
  const clipboard = useClipboard();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sliderValueAlpha, setSliderValueAlpha] = useState(DEFAULT_ALPHA);
  const [sliderValueSteps, setSliderValueSteps] = useState(DEFAULT_STEPS);
  const [sliderValueScale, setSliderValueScale] = useState(DEFAULT_SCALE);

  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [uploadImage, setUploadImage] = useState<any>("");
  const [selectStyle, setSelectStyle] = useState<any>("");
  const [fileUpload, setFileUpload] = useState<any>();

  const [listStyle, setListStyle] = useState<any>([]);
  const [resultImage, setResultImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [login, navigateLogin] = useCheckLogin();
  const [curentNumber, setCurentNumber] = useState(0);

  const [isLoginNotification, setIsLoginNotification] = useState(false);

  const cancelModalNotification = () => {
    setIsLoginNotification(false);
  };

  const user = useSelector((state: any) => state.app.user);
  const [getUser] = useGetInforUser();

  // hàm lấy list image
  const handleGetListImage = async () => {
    try {
      const res = await axios.get(
        "https://style-management-api.dev.apero.vn/v2/styles?limit=1000000&page=1&project=Creatorhub_WEB"
      );
      const result = res.data.data.items?.map((item: any) => {
        return {
          id: item._id,
          image: item.key,
          name: item.name,
          config: item.config,
        };
      });
      setListStyle(result);
    } catch (error: any) {
      message.error("Error server");
    }
  };

  // hàm click image
  const handleClickStyle = (style: any) => {
    setSelectStyle(style);
    setSliderValueAlpha(style.config.alpha);
    setSliderValueSteps(style.config.numInferenceSteps);
    setSliderValueScale(style.config.guidanceScale);
  };

  // hàm click item none
  const handleClickNoneStyle = () => {
    setSelectStyle("");
    setSliderValueAlpha(DEFAULT_ALPHA);
    setSliderValueSteps(DEFAULT_STEPS);
    setSliderValueScale(DEFAULT_SCALE);
  };

  const handleBack = () => {
    setFileUpload(undefined);
    setResultImage("");
    setUploadImage("");
    setNegativePrompt("");
    setPrompt("");
    handleClickNoneStyle();
  };

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
      setUploadImage(base64String); // Gắn giá trị base64 string thu được vào state image
    };
  };

  const handlePrevImageAi = () => {
    (imageRef.current as any).prev();
    setCurentNumber(curentNumber - 1);
  };
  const handleNextImageAi = () => {
    (imageRef.current as any).next();
    setCurentNumber(curentNumber + 1);
  };

  // hàm create image
  const handleGenerate = async () => {
    try {
      if (!login) {
        setIsLoginNotification(true);
        return;
      }
      if (user?.credits < 5) {
        message.error("Your credits is not enable. Please purchase credits!");
        navigate("/pricing");
        return;
      }
      setIsLoading(true);
      const formData: any = new FormData(); // tạo mới đối tượng formData
      if (fileUpload) {
        formData.append("file", fileUpload);
      }

      if (prompt.trim()) {
        formData.append(
          "positivePrompt",
          selectStyle
            ? prompt.trim() + "," + selectStyle?.config?.positivePrompt
            : prompt.trim()
        );
      } else {
        if (selectStyle) {
          formData.append(
            "positivePrompt",
            selectStyle?.config?.positivePrompt
          );
        }
      }

      if (negativePrompt.trim()) {
        if (selectStyle) {
          formData.append(
            "negativePrompt",
            negativePrompt.trim() + ", " + selectStyle?.config?.negativePrompt
          );
        } else {
          formData.append("negativePrompt", negativePrompt.trim());
        }
      } else {
        if (selectStyle) {
          formData.append(
            "negativePrompt",
            selectStyle?.config?.negativePrompt
          );
        }
      }

      if (selectStyle) {
        formData.append("style", selectStyle?.config?.style);
      }
      formData.append("alpha", sliderValueAlpha);
      formData.append("guidanceScale", sliderValueScale);
      formData.append("numInferenceSteps", sliderValueSteps);
      const res = await axios.post(
        "https://api-img-gen-wrapper.apero.vn/api/v2/image-ai",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );
      const base64ImageString =
        "data:image/png;base64," +
        Buffer.from(res.data, "binary").toString("base64");
      setResultImage(base64ImageString);
      setIsLoading(false);
      // gọi api Trừ credits với các lần sử dụng
      await privateAxios.get("/user/use-credits", {
        params: {
          type: "AI_ART",
        },
      });
      getUser(); // goi api trừ tiền xong get user để cập nhập lại

      const body = {
        url: base64ImageString,
        config: {
          step: sliderValueSteps,
          style: selectStyle?.name || "None",
          alpha: sliderValueAlpha,
          scale: sliderValueScale,
          positivePrompt: prompt.trim() || "",
          negativePrompt: negativePrompt.trim() || "",
        },
      };
      // lưu result image
      await privateAxios.post("/store/save-image", body);
    } catch (error: any) {
      setIsLoading(false);
      message.error("Error. Please try again.");
    }
  };

  // hàm xử lý copy text
  const handleCopyText = () => {
    const textToCopy = (textToCopyRef.current as any).textContent; //lấy nội dung của ptu textToCopyRef.current đang trỏ đến.
    clipboard.copy(textToCopy); // sao chép nội dụng từ textToCopy
    message.success("Copy successfully");
  };

  // hàm tải ảnh
  const downloadImage = (base64String: string, filename: string) => {
    // Tạo một thẻ a để tạo link tải về
    const a = document.createElement("a");
    // gắn thuộc tính href có giá trị = đường dẫn ảnh
    a.href = base64String;
    // gắn thuộc tính download có giá trị =  filename
    a.download = filename;
    // gọi sự kiện click của thẻ a
    a.click();
    // <a href={base64string} download={filename} />
  };

  useEffect(() => {
    handleGetListImage();
  }, []);

  return (
    <WrapperAiArtGenerator>
      {resultImage ? (
        <ResultsItem>
          <div className="back-item" onClick={handleBack}>
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "18px", marginRight: "6px" }}
              icon={faAngleLeft}
            />
            <div>Back to Generate</div>
          </div>
          <div className="box-result">
            <div className="display-image">
              <img className="image-result" src={resultImage} alt="" />
            </div>
            <div className="section-parameter">
              <div>AI Art Result</div>
              <div className="information-result">
                <div className="detail-result">
                  <div className="text-group">
                    <div>Style</div>
                    <div>{selectStyle ? selectStyle.name : "-"}</div>
                  </div>
                  <div className="text-group">
                    <div>Step</div>
                    <div>{sliderValueSteps}</div>
                  </div>
                </div>
                <div className="detail-result">
                  <div className="text-group">
                    <div>Created</div>
                    <div>{new Date().toDateString()}</div>
                  </div>
                  <div className="text-group">
                    <div>Guidance Scale</div>
                    <div>{sliderValueScale}</div>
                  </div>
                </div>
                <div className="detail-result">
                  <div className="text-group">
                    <div>Alpha</div>
                    <div>{sliderValueAlpha}</div>
                  </div>
                </div>
              </div>
              <div className="item-prompt">
                <div className="text-prompt">
                  <div>Prompt</div>
                  <div ref={textToCopyRef}>
                    {prompt.trim() ? prompt.trim() : "-"}
                  </div>
                </div>
                <div className="text-prompt">
                  <div>Negative Prompt</div>
                  <div>
                    {negativePrompt.trim() ? negativePrompt.trim() : "-"}
                  </div>
                </div>
              </div>
              <div className="button-group">
                <Button className="copy-button" onClick={handleCopyText}>
                  <img src={icCopy} alt="" />
                  Copy Prompt
                </Button>
                <Button
                  className="download-button"
                  onClick={() => downloadImage(resultImage, "img.jpg")}
                >
                  Download - 1 Credit
                </Button>
              </div>
            </div>
          </div>
        </ResultsItem>
      ) : (
        <SectionContents>
          <div className="select-item">
            <div className="select-photo">
              <div>Choose your style</div>
              <div>
                We will adjust the image options to the optimal settings.
              </div>
              <div className="item-carousel">
                <Carousel
                  className="custom-carousel"
                  dots={false}
                  ref={imageRef}
                  variableWidth={true}
                  draggable={true}
                  slidesToScroll={2}
                  infinite={false} // ngăn chặn lặp lại
                >
                  <div
                    className={`item-none ${
                      selectStyle === "" && "active-none"
                    }`}
                    onClick={handleClickNoneStyle}
                  >
                    <img
                      src="https://creatorhub.ai/static/media/icon-no-style.d33035a216c7617296444019155e9933.svg"
                      alt=""
                    />
                    <div>None</div>
                  </div>
                  {listStyle.map((item: any) => (
                    <div
                      key={item?.id}
                      className={`custom-images ${
                        item.id === selectStyle?.id && "active-style"
                      }`}
                      onClick={() => handleClickStyle(item)}
                    >
                      <img className="image-ai" src={item?.image} />
                      <div className="name-style">{item?.name}</div>
                    </div>
                  ))}
                </Carousel>
                {curentNumber > 0 && (
                  <FontAwesomeIcon
                    className="ic-prev"
                    icon={faAngleLeft}
                    onClick={handlePrevImageAi}
                  />
                )}
                <FontAwesomeIcon
                  className="ic-next"
                  icon={faAngleRight}
                  onClick={handleNextImageAi}
                />
              </div>
            </div>
            <div className="select-upload-image">
              <div>Reference image</div>
              <div>
                Upload an image that will serve as the starting point of the
                result.
              </div>
              {uploadImage ? (
                <div className="box-image">
                  <img className="image" src={uploadImage} alt="" />
                  <div className="item-change">
                    <img
                      onClick={() => setUploadImage(false)}
                      className="icon-cancel"
                      src={iconCancel}
                    />
                    <div className="change-images">
                      <img src={iconRotate} alt="" />
                      <div>Change Photo</div>
                      <input
                        title=""
                        className="input-upload"
                        type="file"
                        name="img"
                        accept=".jpg,.png,.jpeg" // định dạng ảnh muốn chọn
                        onChange={handleUploadImage}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="upload-image">
                  <div className="image">
                    <img src={iconUploadImg} alt="" />
                  </div>
                  <div>Upload or drop file here</div>
                  <div>
                    Supported formats: PNG, JPEG, JPG, File size limit:5MB.
                  </div>
                  <input
                    title=""
                    className="input-upload"
                    type="file"
                    name="img"
                    accept=".jpg,.png,.jpeg" // định dạng ảnh muốn chọn
                    onChange={handleUploadImage}
                  />
                </div>
              )}
            </div>
            <div className="create-prompt">
              <div className="prompt-title">
                <div>Create your prompt</div>
                <div className="group-tool">
                  <img src={icHistory} alt="" />
                  <img src={icRandom} alt="" />
                </div>
              </div>
              <div>
                Describe whatever you want or directly click the Suggestion icon
                to quickly generate AI art.
              </div>
              <div>Prompt</div>
              <div className="textArea">
                <TextArea
                  style={{ resize: "none" }}
                  className="custom-textarea"
                  maxLength={1000}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter prompt..."
                />
              </div>
            </div>
            <div className="negative-prompt">
              <div>Negative Prompt</div>
              <TextArea
                style={{ resize: "none" }}
                className="custom-textarea"
                maxLength={1000}
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                placeholder="Enter negative prompt (optional)"
              />
            </div>
          </div>
          <div className="item-configs">
            <div className="content-configs">
              {/* <div className="header-config">
                <div>Image Resolution</div>
                <div>
                  The width and height of the image. The larger the image, the
                  longer it will take to generate.
                </div>
                <div>Width</div>
                <div className="item-slider">
                  <Slider
                    className="custom-slider"
                    min={128}
                    max={1024}
                    onChange={(newValue) => setSliderValueWidth(newValue)}
                    value={
                      typeof sliderValueWidth === "number"
                        ? sliderValueWidth
                        : 0
                    }
                  />
                  <div className="value-slider">{sliderValueWidth}</div>
                </div>
                <div>Height</div>
                <div className="item-slider">
                  <Slider
                    className="custom-slider"
                    min={128}
                    max={1024}
                    onChange={(newValue) => setSliderValueHeight(newValue)}
                    value={
                      typeof sliderValueHeight === "number"
                        ? sliderValueHeight
                        : 0
                    }
                  />
                  <div className="value-slider">{sliderValueHeight}</div>
                </div>
              </div> */}
              <div className="last-config">
                <div
                  className="advanced-settings"
                  onClick={() => setFocusIcon(!focusIcon)}
                >
                  <div>ADVANCED SETTINGS</div>
                  <img
                    className={`${
                      focusIcon ? "reverse-icon" : "reverse-initial"
                    }`}
                    src={iconShow}
                    alt=""
                  />
                </div>
                {!focusIcon && (
                  <div className="block-settings">
                    <div className="select-alpha">
                      <div>Alpha</div>
                      <div>
                        Adjust the level of control over output specificity.
                        Higher values provide more specific output control,
                        lower values allow for greater variation and creativity.
                      </div>
                      <div className="item-slider">
                        <Slider
                          className="custom-slider"
                          min={0}
                          max={1}
                          step={0.1}
                          onChange={(newValue) => setSliderValueAlpha(newValue)}
                          value={sliderValueAlpha}
                        />
                        <div className="value-slider">{sliderValueAlpha}</div>
                      </div>
                    </div>
                    <div className="select-steps">
                      <div>Steps</div>
                      <div>
                        Determine the level of iteration for text generation.
                        Higher values refine output, lower values increase
                        diversity.
                      </div>
                      <div className="item-slider">
                        <Slider
                          className="custom-slider"
                          min={10}
                          max={50}
                          onChange={(newValue) => setSliderValueSteps(newValue)}
                          value={sliderValueSteps}
                        />
                        <div className="value-slider">{sliderValueSteps}</div>
                      </div>
                    </div>
                    <div className="select-scale">
                      <div>Scale</div>
                      <div>
                        Control the balance between creativity and control in
                        text generation. Higher values increase control, lower
                        values enhance creativity.
                      </div>
                      <div className="item-slider">
                        <Slider
                          className="custom-slider"
                          min={0}
                          max={10}
                          onChange={(newValue) => setSliderValueScale(newValue)}
                          value={sliderValueScale}
                        />
                        <div className="value-slider">{sliderValueScale}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="button-create">
              <Button
                loading={isLoading}
                onClick={handleGenerate}
                disabled={!uploadImage && !prompt.trim()}
                className="button"
              >
                Generate - 2 credits
              </Button>
            </div>
          </div>
        </SectionContents>
      )}
      {isLoading && (
        <div className="item-loading">
          <img
            className="image-loading"
            src="https://i.imgur.com/iTQoJTn.gif"
            alt=""
          />
        </div>
      )}
      
      {isLoginNotification && (
        <ModalNotificationLogin
          open={isLoginNotification}
          onCancel={cancelModalNotification}
          footer={false}
          centered
          width={450}
        >
          <div className="content">Please log in to use the service</div>
          <div className="group-btn">
            <Button className="btn-login" onClick={() => navigate("/sign-in")}>
              Log In
            </Button>
            <Button className="btn-cancel" onClick={cancelModalNotification}>
              Cancel
            </Button>
          </div>
        </ModalNotificationLogin>
      )}
    </WrapperAiArtGenerator>
  );
}

export default AiArtGenerator;
