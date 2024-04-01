import ButtonGeneral from "../../../../components/Ui/button";
import SelectGeneral from "../../../../components/Ui/select";
import { SELECT_SORT_DATE } from "../../../../utils/constants";
import { ImageType } from "../../types";
import {
  BoxOptions,
  GroupButton,
  ListPhoto,
  SelectImage,
  Wrapper,
} from "./styles";

export default function ImageManagementPanel({
  listId,
  sortDate,
  isCheckbox,
  listResultImg,
  setListId,
  setIsCheckbox,
  setSortDate,
  setIsModalDelete,
}: {
  listId: string[];
  sortDate: string;
  isCheckbox: boolean;
  listResultImg: ImageType[];
  setIsCheckbox: (value: boolean) => void;
  setListId: (value: string[]) => void;
  setSortDate: (value: string) => void;
  setIsModalDelete: (value: boolean) => void;
}) {
  // hàm hủy bỏ item đã chọn
  const handleClickCancelAll = () => {
    if (listId.length) {
      setListId([]);
    } else {
      setIsCheckbox(false);
    }
  };

  const handleClickSelect = () => setIsCheckbox(!isCheckbox);
  const showModalDeleteImg = () => setIsModalDelete(true);

  // hàm chọn tất cả checkbox muốn delete
  const handleClickSelectAll = () => {
    const arrId = listResultImg.map((item: ImageType) => item?.id);
    setListId(arrId);
  };

  return (
    <Wrapper>
      <ListPhoto>List of saved photos</ListPhoto>
      <BoxOptions>
        <SelectGeneral
          value={sortDate}
          onChange={(e) => setSortDate(e.target.value)}
          options={SELECT_SORT_DATE}
          className="select-date"
          disabled={isCheckbox}
        />

        <SelectImage>
          {isCheckbox ? (
            <GroupButton>
              {!listId?.length && (
                <ButtonGeneral
                  className="btn-select-all"
                  onClick={handleClickSelectAll}
                >
                  Select All
                </ButtonGeneral>
              )}
              <ButtonGeneral
                className="btn-cancel-all"
                onClick={handleClickCancelAll}
              >
                Cancel
              </ButtonGeneral>
            </GroupButton>
          ) : (
            <ButtonGeneral className="btn-select" onClick={handleClickSelect}>
              Select
            </ButtonGeneral>
          )}
          {listId.length > 0 && (
            <ButtonGeneral className="btn-delete" onClick={showModalDeleteImg}>
              Delete
            </ButtonGeneral>
          )}
        </SelectImage>
      </BoxOptions>
    </Wrapper>
  );
}
