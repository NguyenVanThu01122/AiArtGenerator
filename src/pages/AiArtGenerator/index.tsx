import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import { fetchListStyleAiImg } from "../../reduxToolkit/Thunks/GetStyleAiImages/fetchStyleAiImg";
import {
  deductCreditsAiArt,
  generateAiImage,
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
import { TypeConfig } from "./types";

function AiArtGenerator() {
  const { t } = useTranslation();
  const [sliderValueAlpha, setSliderValueAlpha] = useState(DEFAULT_ALPHA);
  const [sliderValueSteps, setSliderValueSteps] = useState(DEFAULT_STEPS);
  const [sliderValueScale, setSliderValueScale] = useState(DEFAULT_SCALE);
  const [prompt, setPrompt] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [selectStyle, setSelectStyle] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleUploadImage,
    fileUpload,
    uploadImage,
    setFileUpload,
    setUploadImage,
  } = useUploadFile();

  const { handleCheckCredit } = useCheckCredit();
  const user = useSelector((state: RootState) => state.app.user);
  const { listStyle } = useSelector((state: RootState) => state.getListStyle);
  const [getUser] = useGetInfoUser();
  const { handleCheckLogin } = useCheckLogin();
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  useEffect(() => {
    dispatch(fetchListStyleAiImg()); //lấy danh sách style imageAiArt
  }, []);

  // hàm click style imageAiArt
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
    if (selectStyle) {
      formData.append("style", selectStyle?.config?.style);
    }
    appendPromptsToFormData(formData);
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
    deductCreditsAiArt()
      .then(async (res) => {
        toast.success(res.data.message || "Success!");
        getUser(); // cập nhật lại credit
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
        await saveResultImageAi(body); // lưu kết quả hình ảnh
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message || ERROR_MESSAGES.SERVER_ERROR
        );
      });
  };

  // hàm create Image AiArt
  const handleGenerate = async () => {
    if (handleCheckLogin()) {
      return;
    }
    // Kiểm tra số lượng credit
    if (handleCheckCredit(user?.credits ?? 0, 5)) {
      return;
    }
    setIsLoading(true);
    const formData = prepareFormData();
    try {
      generateAiImage(formData).then(async (res) => {
        const base64ImageString = await convertImageToBase64(res.data);
        setResultImage(base64ImageString);
        setIsLoading(false);
        deductCreditsAndSaveResult(base64ImageString); // Trừ credits và lưu kết quả hình ảnh
      });
    } catch (error) {
      toast.error("Error. Please try again.");
      setIsLoading(false);
    }
  };

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

            <ImageUploader
              uploadImage={uploadImage}
              handleUploadImage={handleUploadImage}
              setUploadImage={setUploadImage}
            />

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
