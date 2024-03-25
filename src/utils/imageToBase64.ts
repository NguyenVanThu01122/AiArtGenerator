// Chuyển đổi dữ liệu hình ảnh sang chuỗi base64
export const convertImageToBase64 = (imageData: string) => {
  return (
    "data:image/png;base64," +
    Buffer.from(imageData, "binary").toString("base64")
  );
};
