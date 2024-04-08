// Chuyển đổi dữ liệu hình ảnh sang chuỗi base64
//export const convertImageToBase64 = (imageData: string) => {
//return (
//  "data:image/png;base64," +
//   Buffer.from(imageData, "binary").toString("base64")
// );
//};

// Chuyển đổi dữ liệu hình ảnh sang chuỗi base64
export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string); // Kết quả của việc đọc tập tin sẽ được lưu trữ trong thuộc tính result của đối tượng FileReader.
    reader.onerror = reject; // Xảy ra khi có lỗi xảy ra trong quá trình đọc tập tin.
    reader.readAsDataURL(file); // Phương thức này chấp nhận một đối tượng File làm đối số và bắt đầu quá trình đọc dữ liệu từ tập tin.
  });
};
