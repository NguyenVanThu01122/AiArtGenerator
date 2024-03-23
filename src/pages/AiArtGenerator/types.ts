export interface AiArtContentProps {
  prompt: string;
  setPrompt: (value: string) => void;
  negativePrompt: string;
  sliderValueAlpha: number;
  sliderValueSteps: number;
  sliderValueScale: number;
  uploadImage: string | null;
  selectStyle: any;
  listStyle: [];
  isLoading: boolean;
  handleGenerate: () => void;
  setNegativePrompt: (value: string) => void;
  setSliderValueAlpha: (value: number) => void;
  setSliderValueSteps: (value: number) => void;
  setSliderValueScale: (value: number) => void;
  setSelectStyle: React.Dispatch<React.SetStateAction<any>>;
  handleUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUploadImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface TypeConfig {
  alpha: number;
  guidanceScale: number;
  mode: number;
  negativePrompt: string;
  numInferenceSteps: number;
  positivePrompt: string;
  strength: number;
  style: string;
}
export interface TypeListImgAiArt {
  _id: string;
  key: string;
  name: string;
  config: TypeConfig[];
}
