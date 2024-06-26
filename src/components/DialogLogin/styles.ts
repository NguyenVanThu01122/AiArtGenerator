import styled from "styled-components";
import DialogCommon from "../Ui/dialog";
export const StyledDialogCommon = styled(DialogCommon)`
  .MuiDialog-paper {
    width: 450px;
    padding: 10px;
    background-color: rgba(20, 20, 50, 57);
  }
  .MuiDialogTitle-root {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .MuiDialogActions-root {
    justify-content: center;
    gap: 10px;
    display: flex;
    .btn-login {
      font-weight: bold;
      color: white !important ;
      width: 30%;
      border: none;
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      &:hover {
        filter: brightness(0.8);
      }
    }
    .btn-cancel {
      width: 25%;
      border: none;
      font-weight: bold;
      color: red !important;
      background-color: orange;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .MuiDialog-paper {
      padding: 10px;
      margin: 0px;
    }
    .MuiDialogTitle-root {
      font-size: 16px;
    }
    .MuiDialogActions-root {
      .btn-login,
      .btn-cancel {
        width: 100%;
      }
    }
  }
`;
