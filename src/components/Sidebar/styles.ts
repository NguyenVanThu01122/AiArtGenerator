import styled, { keyframes } from 'styled-components'
import ImageGeneral from '../Ui/image'

export const WrapperSidebar = styled.div<{ closeMenu: boolean }>`
  /* background-color: rgb(9, 9, 23); */
  width: ${(props) => (props?.closeMenu ? '120px' : '270px')};
  transition: 0.3s ease;
  height: 100%;
  border-right: 1px solid rgb(30, 36, 49);
  display: flex;
  flex-direction: column;
  .border {
    background-color: rgba(253, 169, 45, 0.08);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px violet;
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`

export const WrapperMenu = styled.div<{ closeMenu: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 8px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  justify-content: ${(props) => (props.closeMenu ? 'center' : 'flex-start')};
  span {
    color: var(--text-color);
    display: ${(props: any) => (props.closeMenu ? 'none' : 'inline')};
  }
  &:hover {
    border-radius: 5px;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgba(253, 169, 45, 0.08);
  }
  .icon {
    width: 27px;
    height: 27px;
    background-color: black;
    border-radius: 30%;
  }
`

export const SectionProductMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TitleMenu = styled.div<{ closeMenu: boolean }>`
  margin: 18px 0px;
  font-weight: 500;
  margin-left: 5px;
  font-style: italic;
  background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: ${(props) => (props.closeMenu ? '12px' : '18px')};
`

export const LogoCreator = styled.div`
  height: 75px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 22px;
  border-bottom: 1px solid rgb(30, 36, 49);
`

export const StyledImageGeneral = styled(ImageGeneral)`
  width: 25px;
  height: 25px;
  object-fit: cover;
`

export const movingGradient = keyframes`
  0% { background-position: 0% 50%; }//Chuyển động từ trái qua phải
  50% { background-position: 100% 50%; }//Chuyển động từ phải qua trái
  100% { background-position: 0% 50%; }//Chuyển động từ trái qua phải
`

export const NameApp = styled.span<{ closeMenu: boolean }>`
  display: ${(props) => (props.closeMenu ? 'none' : 'block')};
  font-size: 26px;
  -webkit-text-fill-color: transparent; //Chữ trong suốt
  font-weight: 900;
  letter-spacing: 4px;
  font-family: Barlow, sans-serif;
  animation: ${movingGradient} 8s linear infinite;
  background: -webkit-linear-gradient(
      300deg,
      rgb(0, 167, 111) 0%,
      rgb(255, 171, 0) 25%,
      rgb(0, 167, 111) 50%,
      rgb(255, 171, 0) 75%,
      rgb(0, 167, 111) 100%
    )
    0% 0% / 400% text; //Màu chữ
`

export const ContainerMenu = styled.div<{ closeMenu: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
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

export const BoxSocialMedia = styled.div<{ closeMenu: boolean }>`
  margin-bottom: 16px;
  display: ${(props) => (props?.closeMenu ? 'none' : 'block')};
`
