import { useTranslation } from "react-i18next";
import ButtonGeneral from "../../../../components/Ui/button";
import SelectGeneral from "../../../../components/Ui/select";
import { getSelectSortDateOptions } from "../../../../utils/constants";
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
  const { t } = useTranslation();
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
      <ListPhoto>{t("List of saved photos")}</ListPhoto>
      <BoxOptions>
        <SelectGeneral
          value={sortDate}
          onChange={(e) => setSortDate(e.target.value)}
          options={getSelectSortDateOptions()}
          className="select-date"
          disabled={isCheckbox}
          color="primary"
        />

        <SelectImage>
          {isCheckbox ? (
            <GroupButton>
              {!listId?.length && (
                <ButtonGeneral
                  i18nKey="SELECT_All"
                  className="btn-select-all"
                  onClick={handleClickSelectAll}
                />
              )}
              <ButtonGeneral
                i18nKey="Cancel"
                className="btn-cancel-all"
                onClick={handleClickCancelAll}
              />
            </GroupButton>
          ) : (
            <ButtonGeneral
              i18nKey="Select"
              className="btn-select"
              onClick={handleClickSelect}
            />
          )}
          {listId.length > 0 && (
            <ButtonGeneral
              i18nKey="Delete"
              className="btn-delete"
              onClick={showModalDeleteImg}
            />
          )}
        </SelectImage>
      </BoxOptions>
    </Wrapper>
  );
}
