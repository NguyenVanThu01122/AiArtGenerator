import { useRef } from "react";
import { toast } from "react-toastify";
import { useClipboard } from "use-clipboard-copy";

export const useDownloadUtils = () => {
  const clipboard = useClipboard();
  const textToCopyRef = useRef<HTMLDivElement | null>(null);

  const handleCopyText = () => {
    const textToCopy = textToCopyRef.current?.textContent; //lấy nội dung của ptu textToCopyRef.current đang trỏ đến.
    if (textToCopy) {
      clipboard.copy(textToCopy); // sao chép nội dụng từ textToCopy
      toast.success("Copy successfully");
    }
  };

  const handleDownloadImage = (
    base64String: string | any,
    filename: string
  ) => {
    const downloadImage = document.createElement("a"); // Tạo một thẻ a để tạo link tải về
    downloadImage.href = base64String; // gắn thuộc tính href có giá trị = đường dẫn ảnh
    downloadImage.download = filename; // gắn thuộc tính download có giá trị =  filename
    document.body.appendChild(downloadImage); // Thêm thẻ <a> vào phần tử <body> của trang web
    downloadImage.click(); // gọi sự kiện click của thẻ a
    document.body.removeChild(downloadImage); //Xóa thẻ <a> khỏi phần tử <body> sau khi người dùng đã nhấp vào liên kết và bắt đầu tải xuống.
  };

  return { handleCopyText, handleDownloadImage, textToCopyRef };
};
