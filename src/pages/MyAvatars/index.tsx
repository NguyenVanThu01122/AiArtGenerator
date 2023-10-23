import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Pagination, Select, message } from "antd";
import { useEffect, useRef, useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import icCopy from "../../images/ic-copy.svg";
// import icDeleteRed from "../../images/ic-delete-red.jpg";
import icDeleteBlue from "../../images/ic-delete-blue.png";
import { privateAxios } from "../../service/axios";
import {
  BoxImage,
  ModalDeleteImg,
  ModalDetailImage,
  WrapperMyAvatars,
} from "./styles";

const selectSortDate = [
  {
    value: "DEFAULT",
    label: "DEFAULT",
  },
  {
    value: "INCREASE",
    label: "INCREASE",
  },
  {
    value: "DECREASE",
    label: "DECREASE",
  },
];
const optionLimit = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
  { value: 20, label: 20 },
];

function MyAvatars() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortDate, setSortDate] = useState("DEFAULT");
  const [listResultImg, setListResultImg] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [dataImg, setDataImg] = useState<any>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isCheckbox, setIsCheckbox] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<any>("");
  const [listId, setListId] = useState<any>([]);
  const [isModalDelete, setIsModalDelete] = useState(false);

  const textToCopyRef = useRef(null);
  const clipboard = useClipboard();
  const [image, setImage] = useState("");

  // lấy danh sách result img
  const getListResultImage = () => {
    const params = {
      page,
      limit,
      sortDate,
    };
    privateAxios
      .get("/store", {
        params,
      })
      .then((res) => {
        setListResultImg(res.data?.data);
        setTotal(res.data?.total);
        const base64ImageString =
          "data:image/png;base64," +
          Buffer.from(res.data, "binary").toString("base64");
        setImage(base64ImageString);
      })
      .catch((error) => {});
  };

  // hàm copy text
  const handleCopyText = () => {
    const textToCopy = (textToCopyRef.current as any).textContent; //lấy nội dung của ptu textToCopyRef.current đang trỏ đến.
    clipboard.copy(textToCopy); // sao chép nội dụng từ textToCopy
    message.success("Copy successfully");
  };

  // hàm download img
  const handleDownloadImg = () => {
    const a = document.createElement("a");
    a.href = image;
    a.download = "avatar-img.png";
    a.click();
  };

  const showModalImage = (item: any, index: number) => {
    setCurrentIndex(index);
    setDataImg(item);
    setIsModal(true);
  };

  const handleCancelModalImage = () => {
    setIsModal(false);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };
  const handleChangeLimit = (value: number) => {
    setLimit(value);
    setPage(1);
  };

  // hàm click icPrev
  const handleClickPrevImg = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setDataImg(listResultImg[prevIndex]);
      // listResultImg.forEach((item, index) => {
      //   if (index === prevIndex) {
      //     setDataImg(item);
      //   }
      // });
    }
  };

  // hàm click icNext
  const handleClickNextImg = () => {
    if (currentIndex < listResultImg.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setDataImg(listResultImg[nextIndex]);
    }
  };

  const handleClickSelect = () => {
    setIsCheckbox(!isCheckbox);
  };
  // hàm chọn tất cả checkbox muốn delete
  const handleClickSelectAll = () => {
    const arrId = listResultImg.map((item: any) => item?.id);
    setListId(arrId);
  };
  // hàm hủy bỏ item đã chọn
  const handleClickCancelAll = () => {
    setIsCheckbox(false);
    setCheckbox("");
    setListId([]);
  };

  const handleClickItemCheckbox = (e: any) => {
    e.stopPropagation(); // ngăn chạn lan truyền sự kiện click từ con lên mẹ.
  };

  // hàm chọn checkbox muốn delete
  const clickCheckbox = (id: string) => {
    if (!listId.includes(id)) {
      // kiểm tra id có tồn tại trong listId k, nếu id k tồn tại thì khối if dc thực thi.
      listId.push(id); // nếu id k tồn tại trong listId thì thêm id vào cuối mảng listId.
      setListId([...listId]); // cập nhật lại listId, dùng toán tư trải rộng để tạo ra 1 bản sao của mảng hiện tại.
    } else {
      //else: Nếu id tồn tại trong mảng listId, khối code trong phần else sẽ được thực thi.
      const newArr = listId.filter((item: any) => {
        //dùng filter tạo một mảng mới từ listId nhưng loại bỏ giá trị id.//Cách này được sử dụng để xóa một giá trị cụ thể khỏi mảng.
        if (item !== id) {
          return true;
        }
      });
      setListId(newArr); //: Dòng này cập nhật giá trị của listId bằng giá trị của newArr, loại bỏ id khỏi mảng.
    }
  };

  // hàm xóa img
  const handleDeleteImg = () => {
    privateAxios
      .delete("/store", {
        params: {
          idArr: listId,
        },
      })
      .then((res) => {
        getListResultImage();
        handleCancelDeleteImg();
        message.success(res.data?.message);
      })
      .catch((error) => {});
  };

  const showModalDeleteImg = () => {
    setIsModalDelete(true);
  };
  const handleCancelDeleteImg = () => {
    setIsModalDelete(false);
    setListId([]);
  };

  useEffect(() => {
    getListResultImage();
  }, [page, limit, sortDate]);

  return (
    <WrapperMyAvatars>
      {listResultImg.length > 0 ? (
        <BoxImage>
          <div className="header">
            <div className="content-header">List of saved photos</div>
            <div className="item-select">
              <div className="select-sort-date">
                <Select
                  className="select-date"
                  placeholder="Sort by photo creation time"
                  value={sortDate}
                  onChange={(value) => setSortDate(value)}
                  options={selectSortDate}
                  disabled={isCheckbox}
                />
              </div>
              <div className="select-img">
                {isCheckbox ? (
                  <div className="group-btn">
                    {listId.length === 0 && (
                      <Button
                        className="btn-select-all"
                        onClick={handleClickSelectAll}
                      >
                        Select All
                      </Button>
                    )}
                    <Button
                      className="btn-cancel-all"
                      onClick={handleClickCancelAll}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button className="btn-select" onClick={handleClickSelect}>
                    Select
                  </Button>
                )}
                {listId.length > 0 && (
                  <Button className="btn-delete" onClick={showModalDeleteImg}>
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="list-image">
            {listResultImg.map((item: any, index: number) => (
              <div
                className="result-img"
                key={item?.id}
                onClick={() => showModalImage(item, index)}
              >
                <img src={item?.url} alt="" />
                {isCheckbox && (
                  <div
                    className="item-select"
                    onClick={(e) => handleClickItemCheckbox(e)}
                  >
                    <Input
                      onClick={() => clickCheckbox(item?.id)}
                      className="custom-checkbox"
                      type="checkbox"
                      id="checkbox"
                      checked={listId?.includes(item?.id)} // nếu item.id có tồn tại trong listId thì trả về true ngược lại về false
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="item-pagination">
            <Pagination
              className="custom-pagination"
              pageSize={limit}
              current={page}
              total={total}
              onChange={handleChangePage}
            />
            <div className="display-total-img">
              Displayed from {(page - 1) * limit + 1} to{" "}
              {page * limit > total ? total : page * limit} out of {total}{" "}
              photos{" "}
              <Select
                onChange={handleChangeLimit}
                value={limit}
                options={optionLimit}
              />{" "}
              on 1 page.
            </div>
          </div>

          <ModalDetailImage
            width={800}
            open={isModal}
            footer={false}
            onCancel={handleCancelModalImage}
            centered={true}
          >
            <div className="box-detail">
              <div className="item-img">
                <img src={dataImg?.url} alt="" />
              </div>
              <div className="product-parameters">
                <div className="item-parameters">
                  <div className="head-box">
                    <div className="detail-parameter">
                      <div>Alpha</div>
                      <div>{dataImg?.config?.alpha}</div>
                    </div>
                    <div className="detail-parameter">
                      <div>Scale</div>
                      <div>{dataImg?.config?.scale}</div>
                    </div>
                    <div className="detail-parameter">
                      <div>Step</div>
                      <div>{dataImg?.config?.step}</div>
                    </div>
                  </div>
                  <div className="end-box">
                    <div className="detail-parameter">
                      <div>Slyte</div>
                      <div>{dataImg?.config?.slyte || "-"}</div>
                    </div>
                    <div className="detail-parameter">
                      <div>NegativePrompt</div>
                      <div className="prompt">
                        {dataImg?.config?.negativePrompt || "-"}
                      </div>
                    </div>
                    <div className="detail-parameter">
                      <div>PositivePrompt</div>
                      <div className="prompt" ref={textToCopyRef}>
                        {dataImg?.config?.positivePrompt || "-"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-btn">
                  <Button className="download" onClick={handleDownloadImg}>
                    Download
                  </Button>
                  <Button className="copy" onClick={handleCopyText}>
                    <img src={icCopy} alt="" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
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
          </ModalDetailImage>
        </BoxImage>
      ) : (
        <div className="error-text">No photos saved!</div>
      )}

      <ModalDeleteImg
        open={isModalDelete}
        centered
        onCancel={handleCancelDeleteImg}
        width={500}
        footer={false}
      >
        <div className="item-remind">
          <img src={icDeleteBlue} alt="" />
          <div>Are you sure you want to delete the photo?</div>
        </div>
        <div className="group-btn">
          <Button className="btn-cancel" onClick={handleCancelDeleteImg}>
            Cancel
          </Button>
          <Button className="btn-delete" onClick={handleDeleteImg}>
            Delete
          </Button>
        </div>
      </ModalDeleteImg>
    </WrapperMyAvatars>
  );
}
export default MyAvatars;
