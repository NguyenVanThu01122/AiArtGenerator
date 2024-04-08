import { useTranslation } from "react-i18next";
import { ImageType } from "../../types";
import {
  ClickToView,
  ContainerImage,
  ResultImage,
  SelectItem,
  StyledImageGeneral,
  StyledInputCheckbox,
} from "./styles";

export default function GeneratedImagesList({
  listId,
  isCheckbox,
  listResultImg,
  showModalImage,
  clickCheckbox,
}: {
  listId: string[];
  isCheckbox: boolean;
  listResultImg: ImageType[];
  clickCheckbox: (id: string) => void;
  showModalImage: (item: ImageType, index: number) => void;
}) {
  const { t } = useTranslation();
  const handleClickItemCheckbox = (e: React.MouseEvent) => e.stopPropagation(); // ngăn chạn lan truyền sự kiện click từ con lên mẹ.
  return (
    <ContainerImage>
      {listResultImg.map((item: ImageType, index: number) => (
        <ResultImage key={item?.id} onClick={() => showModalImage(item, index)}>
          <StyledImageGeneral src={item?.url} alt="" />
          <ClickToView>
            {t("Please click on the photo to see details")}
          </ClickToView>
          {isCheckbox && (
            <SelectItem onClick={(e) => handleClickItemCheckbox(e)}>
              <StyledInputCheckbox
                type="checkbox"
                onChange={() => clickCheckbox(item?.id)}
                checked={listId?.includes(item?.id)}
              />
            </SelectItem>
          )}
        </ResultImage>
      ))}
    </ContainerImage>
  );
}
