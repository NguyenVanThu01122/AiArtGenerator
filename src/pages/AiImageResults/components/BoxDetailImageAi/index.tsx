import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ButtonGeneral from "../../../../components/Ui/button";
import CloseButton from "../../../../components/Ui/closeButton";
import ImageGeneral from "../../../../components/Ui/image";
import icCopy from "../../../../images/ic-copy.svg";
import { DEFAULT_CURRENT } from "../../../../utils/constants";
import { useDownloadUtils } from "../../../../utils/useDownloadUtils";
import { ConfigType, ImageType } from "../../types";
import {
  ContainerParameter,
  DetailParameter,
  DialogDetailImage,
  EndParameter,
  HeadParameter,
  ItemImage,
  Label,
  ProductParameters,
  StyledDialogActions,
  StyledDialogContent,
  Value,
} from "./styles";
export interface ImageResultType {
  id: string;
  url: string;
  createdAt: string;
  config: ConfigType;
}

interface ParameterType {
  label: string;
  value: string | number;
}

export default function BoxDetailImageAi({
  imageAi,
  isModal,
  detailPhoto,
  listResultImg,
  setDetailPhoto,
  setIsModal,
}: {
  isModal: boolean;
  imageAi: string;
  detailPhoto: ImageResultType;
  listResultImg: ImageType[];
  setIsModal: (value: boolean) => void;
  setDetailPhoto: (value: ImageType) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_CURRENT);
  const { handleDownloadImage, handleCopyText, textToCopyRef } =
    useDownloadUtils();

  // hàm click icPrev
  const handleClickPrevImg = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setDetailPhoto(listResultImg[prevIndex]);
      // listResultImg.forEach((item, index) => {
      //   if (index === prevIndex) {
      //     setdetailPhoto(item);
      //   }
      // });
    }
  };
  // hàm click icNext
  const handleClickNextImg = () => {
    if (currentIndex < listResultImg.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setDetailPhoto(listResultImg[nextIndex]);
    }
  };

  const cancelModalImage = () => setIsModal(false);

  const parameters: ParameterType[] = [
    { label: "Alpha", value: detailPhoto?.config?.alpha },
    { label: "Scale", value: detailPhoto?.config?.scale },
    { label: "Step", value: detailPhoto?.config?.step },
    { label: "Style", value: detailPhoto?.config?.style || "-" },
    {
      label: "NegativePrompt",
      value: detailPhoto?.config?.negativePrompt || "-",
    },
    {
      label: "PositivePrompt",
      value: detailPhoto?.config?.positivePrompt || "-",
    },
  ];

  return (
    <DialogDetailImage fullWidth open={isModal} onClose={cancelModalImage}>
      <CloseButton handleClose={cancelModalImage} />
      <StyledDialogContent>
        <ItemImage>
          <ImageGeneral src={detailPhoto?.url} alt="" />
        </ItemImage>
        <ContainerParameter>
          <ProductParameters>
            <HeadParameter>
              {parameters.slice(0, 3).map((item: ParameterType) => (
                <DetailParameter key={item.label}>
                  <Label>{item.label}</Label>
                  <Value>{item.value}</Value>
                </DetailParameter>
              ))}
            </HeadParameter>
            <EndParameter>
              {parameters.slice(3).map((item: ParameterType) => (
                <DetailParameter key={item.label}>
                  <Label>{item.label}</Label>
                  <Value ref={textToCopyRef}>{item.value}</Value>
                </DetailParameter>
              ))}
            </EndParameter>
          </ProductParameters>
          <StyledDialogActions>
            <ButtonGeneral
              className="download"
              onClick={() => handleDownloadImage(imageAi, "my-image")}
            >
              Download
            </ButtonGeneral>
            <ButtonGeneral className="copy" onClick={handleCopyText}>
              <ImageGeneral src={icCopy} alt="" />
              Copy
            </ButtonGeneral>
          </StyledDialogActions>
        </ContainerParameter>
      </StyledDialogContent>

      {currentIndex !== 0 && (
        <FontAwesomeIcon
          className="ic-prev"
          icon={faAngleLeft}
          onClick={handleClickPrevImg}
        />
      )}
      {currentIndex !== listResultImg.length - 1 && (
        <FontAwesomeIcon
          className="ic-next"
          icon={faAngleRight}
          onClick={handleClickNextImg}
        />
      )}
    </DialogDetailImage>
  );
}
