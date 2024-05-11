import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FILE_FORMAT, MAX_SIZE_INBYTES } from './constants'
import { uploadFile } from '../redux/Slices/AppSlice'

export const useUploadFile = () => {
  const [fileUpload, setFileUpload] = useState<File | undefined>()
  const [uploadImage, setUploadImage] = useState<any>()
  const dispatch = useDispatch()

  // hàm xử lý tải ảnh lên
  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] // Lấy giá trị file vừa tải lên và gắn vào biến file
    if (file && file.size > MAX_SIZE_INBYTES) {
      toast.error('File size exceeds the allowed limit.')
      return
    } else if (file && !FILE_FORMAT.includes(file.type)) {
      toast.error('Please upload type image jpeg, jpg, png')
      return
    }

    setFileUpload(file)
    const reader = new FileReader() //để đọc nội dung của tập tin được chọn từ máy tính của người dùng.
    if (file) {
      reader.readAsDataURL(file) //Phương thức này chấp nhận một đối tượng File làm đối số và bắt đầu quá trình đọc dữ liệu từ tập tin.
    }
    // Hàm này sẽ được gọi khi phương thức readAsDataURL() đã hoàn thành việc đọc tập tin.
    reader.onloadend = () => {
      const base64String = reader.result as string // Lưu trữ giá trị base64 string của ảnh vào biến base64String
      if (base64String) {
        setUploadImage(base64String) // Gắn giá trị base64 string thu được vào state image
        dispatch(uploadFile(true)) // Gửi action uploadFile lên store
      }
    }
  }

  return {
    handleUploadImage,
    fileUpload,
    uploadImage,
    setFileUpload,
    setUploadImage
  }
}
