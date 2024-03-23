import LoadingButton from "@mui/lab/LoadingButton";
import { Slider } from "@mui/material";
import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-left: 1px solid rgb(30, 36, 49);
  border-top: 1px solid rgb(30, 36, 49);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentConfigs = styled.div`
  flex: 1;
  padding: 24px 16px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
`;

export const AdvancedSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
  .reverse-icon {
    transition: all 0.2s ease 0s;
    transform: rotate(180deg);
  }
  .reverse-initial {
    transform: rotate(0deg);
    transition: all 0.2s ease 0s;
  }
`;

export const AdvancedSetting = styled.div`
  color: white;
  margin: 10px 0px;
  font-size: 14px;
`;

export const BlockSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailConfigs = styled.div`
  /* Ẩn các mũi tên lên xuống của input number */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const TitleConfig = styled.div`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionConfig = styled.div`
  margin: 10px 0px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;

export const BoxSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0px;
`;

export const ValueConfig = styled.div`
  color: white;
`;

export const CustomSlider = styled(Slider)`
  .css-14pt78w-MuiSlider-rail {
  }
  .css-1gv0vcd-MuiSlider-track {
    background: var(
      --linear,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
  }
  .MuiSlider-valueLabel {
    line-height: 1.2;
    font-size: 12px;
    background: unset;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    background-color: #52af77;
    transform-origin: bottom left;
    transform: translate(50%, -100%) rotate(-45deg) scale(0);
    &::before {
      display: none;
    }
    &.MuiSlider-valueLabelOpen {
      transform: translate(50%, -100%) rotate(-45deg) scale(1);
    }
    & > * {
      transform: rotate(45deg);
    }
  }
  .MuiSlider-track {
    border: none;
    background: var(
      --linear,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
  }
  .MuiSlider-thumb {
    height: 20px;
    width: 20px;
    background: var(
      --linear,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: inherit;
    }
    &::before {
      display: none;
    }
  }
`;

export const CustomLoadingButton = styled(LoadingButton)`
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  color: white !important;
  padding: 0px 16px;
  border-radius: 8px;
  background: linear-gradient(
    190deg,
    rgb(226, 80, 229) 0%,
    rgb(75, 80, 230) 100%
  );
  cursor: pointer;
  font-weight: 600 !important;
  font-size: 18px;
  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.7);
  }
  &:hover {
    filter: brightness(0.7);
  }
`;
export const ItemBtnGenerate = styled.div`
  padding: 16px;
`;
