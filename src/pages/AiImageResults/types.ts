export interface ConfigType {
  step: number;
  style: string;
  alpha: number;
  scale: number;
  positivePrompt: string;
  negativePrompt: string;
}

export interface ImageType {
  config: ConfigType;
  alpha: number;
  negativePrompt: string;
  positivePrompt: string;
  scale: number;
  step: number;
  style: string;
  createdAt: string;
  id: string;
  url: string;
}

