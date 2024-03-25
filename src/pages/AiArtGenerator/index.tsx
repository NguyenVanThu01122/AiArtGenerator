import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import {
  deductCreditsAiArt,
  generateAiImage,
  getListImage,
  saveResultImageAi,
} from "../../services/aiArtGenerator";
import {
  DEFAULT_ALPHA,
  DEFAULT_SCALE,
  DEFAULT_STEPS,
  ERROR_MESSAGES,
} from "../../utils/constants";
import { useUploadFile } from "../../utils/handleUploadFile";
import { convertImageToBase64 } from "../../utils/imageToBase64";
import { useCheckCredit } from "../../utils/useCheckCredit";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { useGetInfoUser } from "../../utils/useGetInfoUser";
import ConfigAiArt from "./components/ConfigAiArt";
import ImageUploader from "./components/ImageUploader";
import Loading from "./components/Loading";
import PromptInput from "./components/PromptInput";
import AiArtResult from "./components/ResultAiArt";
import StyleImageCarousel from "./components/StyleImageCarousel";
import { MainContent, SectionContents, WrapperAiArtGenerator } from "./styles";
import { TypeConfig, TypeListImgAiArt } from "./types";

function AiArtGenerator() {
  const [sliderValueAlpha, setSliderValueAlpha] = useState(DEFAULT_ALPHA);
  const [sliderValueSteps, setSliderValueSteps] = useState(DEFAULT_STEPS);
  const [sliderValueScale, setSliderValueScale] = useState(DEFAULT_SCALE);
  const [prompt, setPrompt] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [selectStyle, setSelectStyle] = useState<any>();
  const [listStyle, setListStyle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fileUpload, setFileUpload, setUploadImage } = useUploadFile();
  const { handleCheckCredit } = useCheckCredit();
  const user = useSelector((state: RootState) => state.app.user);
  const [getUser] = useGetInfoUser();
  const { handleCheckLogin } = useCheckLogin();

  const getListImageAiArt = async () => {
    try {
      const res = await getListImage();
      const result = res.data.data.items?.map((item: TypeListImgAiArt) => {
        return {
          id: item._id,
          image: item.key,
          name: item.name,
          config: item.config,
        };
      });
      setListStyle(result);
    } catch (error) {
      toast.error(ERROR_MESSAGES.SERVER_ERROR);
    }
  };

  // hàm click image
  const handleClickStyle = (style: { config: TypeConfig }) => {
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

  // hàm back
  const handleBack = () => {
    setFileUpload(undefined);
    setResultImage("");
    setUploadImage("");
    setNegativePrompt("");
    setPrompt("");
    handleClickNoneStyle();
  };

  // Chuẩn bị dữ liệu form để gửi lên server
  const prepareFormData = () => {
    const formData = new FormData();
    if (fileUpload) {
      formData.append("file", fileUpload);
    }
    appendPromptsToFormData(formData);
    if (selectStyle) {
      formData.append("style", selectStyle?.config?.style);
    }
    formData.append("alpha", sliderValueAlpha.toString());
    formData.append("guidanceScale", sliderValueScale.toString());
    formData.append("numInferenceSteps", sliderValueSteps.toString());
    return formData;
  };

  // Thêm các thông điệp vào formData
  const appendPromptsToFormData = (formData: FormData) => {
    if (prompt.trim()) {
      formData.append(
        "positivePrompt",
        selectStyle
          ? prompt.trim() + "," + selectStyle?.config?.positivePrompt
          : prompt.trim()
      );
    } else {
      if (selectStyle) {
        formData.append("positivePrompt", selectStyle?.config?.positivePrompt);
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
        formData.append("negativePrompt", selectStyle?.config?.negativePrompt);
      }
    }
  };

  // Trừ credits và lưu kết quả hình ảnh
  const deductCreditsAndSaveResult = async (base64ImageString: string) => {
    await deductCreditsAiArt();
    getUser(); // cập nhật lại credits
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
    await saveResultImageAi(body);
  };

  // Xử lý lỗi khi không thể tạo hình ảnh
  const handleGenerateError = () => {
    setIsLoading(false);
    toast.error("Error. Please try again.");
  };

  // hàm create Image AiArt
  const handleGenerate = async () => {
    try {
      // Kiểm tra đăng nhập
      if (handleCheckLogin()) {
        return;
      }
      // Kiểm tra số lượng credit
      if (handleCheckCredit(user?.credits ?? 0, 2)) {
        return;
      }
      setIsLoading(true);
      const formData = prepareFormData();
      const res = await generateAiImage(formData); // create ImageAi
      const base64ImageString = convertImageToBase64(res.data);
      setResultImage(base64ImageString);
      setIsLoading(false);
      await deductCreditsAndSaveResult(base64ImageString); // Trừ credits và lưu kết quả hình ảnh
    } catch (error) {
      handleGenerateError();
    }
  };

  useEffect(() => {
    getListImageAiArt();
  }, []);
  return (
    <WrapperAiArtGenerator>
      {resultImage ? (
        <AiArtResult
          prompt={prompt}
          resultImage={resultImage}
          selectStyle={selectStyle}
          sliderValueSteps={sliderValueSteps}
          sliderValueScale={sliderValueScale}
          sliderValueAlpha={sliderValueAlpha}
          negativePrompt={negativePrompt}
          handleBack={handleBack}
        />
      ) : (
        <SectionContents>
          <MainContent>
            <StyleImageCarousel
              listStyle={listStyle}
              selectStyle={selectStyle}
              handleClickNoneStyle={handleClickNoneStyle}
              handleClickStyle={handleClickStyle}
            />
            <ImageUploader />
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              negativePrompt={negativePrompt}
              setNegativePrompt={setNegativePrompt}
            />
          </MainContent>

          <ConfigAiArt
            prompt={prompt}
            isLoading={isLoading}
            negativePrompt={negativePrompt}
            sliderValueAlpha={sliderValueAlpha}
            sliderValueSteps={sliderValueSteps}
            sliderValueScale={sliderValueScale}
            setSliderValueAlpha={setSliderValueAlpha}
            setSliderValueSteps={setSliderValueSteps}
            setSliderValueScale={setSliderValueScale}
            handleGenerate={handleGenerate}
          />
        </SectionContents>
      )}

      {isLoading && <Loading />}
    </WrapperAiArtGenerator>
  );
}

export default AiArtGenerator;
