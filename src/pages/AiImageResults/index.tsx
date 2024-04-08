import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React, { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ImageGeneral from "../../components/Ui/image";
import SelectGeneral from "../../components/Ui/select";
import icGif1 from "../../images/icon-gif1.gif";
import imgLoading from "../../images/img-loading1.gif";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import { fetchResultImageAi } from "../../reduxToolkit/Thunks/GetResultAiImage/fetchResultImgAi";
import { paramsType } from "../../services/aiImageResult";
import { calculateIndexes } from "../../utils/calculateIndexes";
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_SORT_DATE,
  OPTION_LIMIT,
} from "../../utils/constants";
import { useCheckLogin } from "../../utils/useCheckLogin";
import GeneratedImagesList from "./components/GeneratedImageList";
import ImageManagementPanel from "./components/ImageManagementPanel";
import {
  ContainerImageAi,
  DisplayTotalImage,
  Loading,
  MessageNoPhoto,
  NoPhoto,
  SectionPagination,
  StyledPagination,
  WrapperMyAvatars,
} from "./styles";
import { ImageType } from "./types";

const DialogDeleteImageLazy = React.lazy(
  () => import("./components/DialogDeleteImage")
);
const BoxDetailImageAiLazy = React.lazy(
  () => import("./components/BoxDetailImageAi")
);

function AiImageResult() {
  const { t } = useTranslation();
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [sortDate, setSortDate] = useState(DEFAULT_SORT_DATE);
  const [isModal, setIsModal] = useState(false);
  const [detailPhoto, setDetailPhoto] = useState({} as ImageType);
  const [isCheckbox, setIsCheckbox] = useState<boolean>(false);
  const [listId, setListId] = useState<any>([]);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const { handleCheckLogin, login } = useCheckLogin();
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  const { listResultImg, loading, total, imageAi } = useSelector(
    (state: RootState) => state.getResultAiImgSlice
  );

  const [indexStart, indexEnd, totalPage] = calculateIndexes(
    page,
    limit,
    total
  );

  const getListResultImage = () => {
    if (handleCheckLogin()) return;
    const params: paramsType = {
      page,
      limit,
      sortDate,
    };
    dispatch(fetchResultImageAi(params)); // Gọi action fetchResultImageAi để lấy dữ liệu ảnh
  };

  const showModalImage = (item: ImageType) => {
    setDetailPhoto(item);
    setIsModal(true);
  };

  const handleChangePage = (page: number) => setPage(page);

  const handleChangeLimit = (value: number) => {
    setLimit(value);
    setPage(1);
  };

  // hàm chọn checkbox muốn delete
  const clickCheckbox = (id: string) => {
    if (!listId.includes(id)) {
      listId.push(id);
      setListId([...listId]);
    } else {
      const newArr = listId.filter((item: string) => {
        if (item !== id) {
          return true;
        }
      });
      setListId(newArr);
    }
  };

  const loadingCommon = (
    <Loading>
      <ImageGeneral src={imgLoading} />
    </Loading>
  );

  useEffect(() => {
    getListResultImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, sortDate]);

  return (
    <WrapperMyAvatars>
      {listResultImg?.length > 0 && (
        <ContainerImageAi>
          <ImageManagementPanel
            listId={listId}
            sortDate={sortDate}
            isCheckbox={isCheckbox}
            listResultImg={listResultImg}
            setListId={setListId}
            setSortDate={setSortDate}
            setIsCheckbox={setIsCheckbox}
            setIsModalDelete={setIsModalDelete}
          />

          {/* list image Ai */}
          {!loading && listResultImg?.length && (
            <GeneratedImagesList
              listId={listId}
              isCheckbox={isCheckbox}
              listResultImg={listResultImg}
              showModalImage={showModalImage}
              clickCheckbox={clickCheckbox}
            />
          )}

          {/* Pagination */}
          <SectionPagination sx={{ bgcolor: "background.default" }}>
            <StyledPagination
              page={page}
              count={totalPage}
              variant="outlined"
              shape="rounded"
              color="secondary"
              defaultPage={6}
              boundaryCount={2} // số lượng hiển thị ở 2 đầu
              siblingCount={1} // số lượng hiển thị ở giữa
              onChange={(event, value) => handleChangePage(value)}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "primary.main",
                },
              }}
            />
            <DisplayTotalImage>
              {t("Displayed from")} {indexStart} {t("to")} {indexEnd}{" "}
              {t("out of")} {total} {t("photos")}
              <SelectGeneral
                value={limit}
                options={OPTION_LIMIT}
                className="select-limit"
                color="primary"
                onChange={(e) => handleChangeLimit(e.target.value)}
              />
              {t("on 1 page.")}
            </DisplayTotalImage>
          </SectionPagination>

          {/* Modal Detail Image */}
          <Suspense fallback={loadingCommon}>
            <BoxDetailImageAiLazy
              imageAi={imageAi}
              isModal={isModal}
              detailPhoto={detailPhoto}
              listResultImg={listResultImg}
              setIsModal={setIsModal}
              setDetailPhoto={setDetailPhoto}
            />
          </Suspense>
        </ContainerImageAi>
      )}

      {loading && loadingCommon}

      {/* Dialog Delete Image */}
      <Suspense fallback={loadingCommon}>
        <DialogDeleteImageLazy
          listId={listId}
          isModalDelete={isModalDelete}
          setListId={setListId}
          setIsModalDelete={setIsModalDelete}
          getListResultImage={getListResultImage}
        />
      </Suspense>

      {login && !loading && !listResultImg?.length && (
        <MessageNoPhoto>
          <ImageGeneral src={icGif1} alt="" />
          <NoPhoto>{t("No photos saved!")}</NoPhoto>
        </MessageNoPhoto>
      )}
    </WrapperMyAvatars>
  );
}
export default AiImageResult;
