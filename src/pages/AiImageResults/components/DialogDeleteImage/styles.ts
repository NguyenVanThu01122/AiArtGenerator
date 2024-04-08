import DialogActions from "@mui/material/DialogActions/DialogActions";
import styled from "styled-components";
import DialogCommon from "../../../../components/Ui/dialog";

export const StyledDialogDelete = styled(DialogCommon)`
  .css-ypiqx9-MuiDialogContent-root {
    padding: 0px 30px;
  }
  .css-ploc9f-MuiPaper-root-MuiDialog-paper {
    background-color: #f5f5f5;
  }
  .css-knqc4i-MuiDialogActions-root {
    padding: 20px;
  }
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    padding-top: 0px;
  }

  @media screen and (max-width: 768px) {
    .css-ypiqx9-MuiDialogContent-root {
      padding: 0px 10px;
    }
  }
`;
export const ConfirmText = styled.div`
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const MessageText = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

export const StyledDialogActions = styled(DialogActions)`
  width: 100%;
  display: flex;
  gap: 12px;
  margin: auto !important;

  .btn-cancel {
    width: 50%;
    background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
    color: white;
    font-weight: bold;
    border: none;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .btn-delete {
    width: 50%;
    font-weight: bold;
    border: none;
    background-color: red !important;
    color: white;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;
