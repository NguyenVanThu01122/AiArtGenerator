import { FormControl, FormGroup } from '@mui/material'
import styled from 'styled-components'

export const WrapperChangePassword = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  background-color: #1a202f;
  display: flex;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 3px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
`

export const ItemImage = styled.div`
  width: 50%;
  padding: 20px;
  color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(29, 25, 45);
  /* background-color: rgb(13, 18, 32); */
  img {
    width: 65%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContentImage = styled.div`
  padding: 0px 50px;
`

export const TextContent = styled.div`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  line-height: 150%;
  margin: 24px 0px;
`

export const ItemIfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Youtube = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 8px;
`

export const LouisTomlin = styled.div`
  color: rgb(194, 255, 234);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.122px;
`

export const FormChangePassword = styled(FormControl)`
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ContentForm = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  .btn {
    width: 100%;
    color: white !important;
    font-weight: bold;
    font-size: large;
    border: none;
    height: 46px;
    background: linear-gradient(217deg, rgb(226, 80, 229) 0%, rgb(75, 80, 230) 100%);
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`

export const TitleForm = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const SetNewPassword = styled.div`
  font-size: 35px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
  }
`

export const ItemBack = styled.div`
  width: max-content;
  margin: auto;
  margin-top: 50px;
  display: flex;
  gap: 15px;
  cursor: pointer;
  div {
    font-weight: bold;
  }
`

export const BackToSigIn = styled.div``

export const VisionLab = styled.div`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: rgb(102, 112, 133);
`
