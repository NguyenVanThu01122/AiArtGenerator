import styled from 'styled-components'
import DialogCommon from '../../../../components/Ui/dialog'

export const DialogPasswordForgot = styled(DialogCommon)`
  .css-ploc9f-MuiPaper-root-MuiDialog-paper {
    padding: 20px;
    background-color: rgb(9, 9, 23);
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
    margin: 0px;
  }
  @media screen and (max-width: 768px) {
    .css-ploc9f-MuiPaper-root-MuiDialog-paper {
      padding: 40px 20px;
    }
  }
`

export const ContentForgotPassword = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PasswordReset = styled.div`
  margin: 40px 0px;
  .custom-label {
    color: gray;
  }

  .MuiOutlinedInput-input {
    color: white;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
  }

  .custom-button {
    margin-top: 20px;
    width: 100%;
    height: 45px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 18px;
    background: linear-gradient(217deg, rgb(226, 80, 229) 0%, rgb(75, 80, 230) 100%);
    &:hover {
      filter: brightness(0.6);
    }
    &:disabled {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0px;
    .custom-button {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`

export const ContentText = styled.div`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin: 0px;
    font-size: 16px;
  }
`

export const ItemHeader = styled.div`
  text-align: center;
`

export const TitleForgot = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const ItemBack = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 15px;
  &:hover {
    filter: brightness(0.5);
  }
`

export const BackToSignIn = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

export const ItemVerifyEmail = styled.div`
  margin: 40px 0px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  .ic-logo {
  }

  & > div:nth-child(4) {
    span {
      margin-left: 4px;
      cursor: pointer;
      font-size: 17px;
      font-weight: bold;
      font-style: italic;
    }
  }
  .item-back {
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 15px;
    & > div:last-child {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }
  & > div:last-child {
    margin-top: 50px;
    width: 80%;
    color: gray;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
  }
`

export const SentEmail = styled.div`
  font-size: 40px;
  font-weight: bold;
`
