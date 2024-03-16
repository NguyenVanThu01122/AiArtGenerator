import styled from "styled-components";
import DialogCommon from "../Ui/dialog";

export const ItemVerifyEmail = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px;
  text-align: center;
  background-color: rgb(9, 9, 23) !important;

  & > div:last-child {
    margin-top: 50px;
    width: 80%;
    color: gray;
    padding-bottom: 5px;
    border-bottom: 1px solid aliceblue;
  }
`;

export const TitleDialog = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const ContentDialog = styled.div``;

export const TryAgain = styled.div`
  span {
    margin-left: 6px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
    &:hover {
      color: red;
    }
  }
`;

export const StyledDialogCommon = styled(DialogCommon)``;

export const BackSignIn = styled.div`
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: black;
  }

  & > div:last-child {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
`;
