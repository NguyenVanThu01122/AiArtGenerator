import DialogContent from "@mui/material/DialogContent/DialogContent";
import { toast } from "react-toastify";
import { Transition } from "../../../../components/SentEmailDialog";
import ButtonGeneral from "../../../../components/Ui/button";
import CloseButton from "../../../../components/Ui/closeButton";
import { DialogMaxWidth } from "../../../../components/Ui/dialog";
import ImageGeneral from "../../../../components/Ui/image";
import icDeleteBlue from "../../../../images/ic-delete-blue.png";
import { deleteImageAi } from "../../../../services/aiImageResult";
import { ERROR_MESSAGES } from "../../../../utils/constants";
import {
  ConfirmText,
  MessageText,
  StyledDialogActions,
  StyledDialogDelete,
} from "./styles";

export default function DialogDeleteImage({
  listId,
  isModalDelete,
  setListId,
  setIsModalDelete,
  getListResultImage,
}: {
  listId: string[] | any;
  isModalDelete: boolean;
  setIsModalDelete: (value: boolean) => void;
  setListId: (value: string[]) => void;
  getListResultImage: () => void;
}) {
  const cancelDeleteImg = () => {
    setIsModalDelete(false);
    setListId([]);
  };

  // hàm xóa img
  const handleDeleteImg = () => {
    deleteImageAi(listId)
      .then((res) => {
        getListResultImage();
        cancelDeleteImg();
        toast.success(res.data?.message);
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR));
  };

  return (
    <StyledDialogDelete
      open={isModalDelete}
      onClose={cancelDeleteImg}
      maxWidth={DialogMaxWidth.sm}
      TransitionComponent={Transition}
    >
      <CloseButton handleClose={cancelDeleteImg} />
      <DialogContent>
        <ConfirmText>
          <ImageGeneral src={icDeleteBlue} alt="" />
          <MessageText>Are you sure you want to delete the photo?</MessageText>
        </ConfirmText>
      </DialogContent>
      <StyledDialogActions>
        <ButtonGeneral
          className="btn-cancel"
          onClick={cancelDeleteImg}
          color="primary"
        >
          Cancel
        </ButtonGeneral>
        <ButtonGeneral
          className="btn-delete"
          onClick={handleDeleteImg}
          color="primary"
        >
          Delete
        </ButtonGeneral>
      </StyledDialogActions>
    </StyledDialogDelete>
  );
}
