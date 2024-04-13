import { Rating } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageGeneral from '../../../../components/Ui/image'
import imgUser1 from '../../../../images/HomePage/img-user-1.svg'
import imgUser2 from '../../../../images/HomePage/img-user-2.svg'
import imgUser3 from '../../../../images/HomePage/img-user-3.svg'
import imgUser5 from '../../../../images/HomePage/img-user-5.svg'
import imgUser4 from '../../../../images/HomePage/img-user-6.svg'
import quotation from '../../../../images/HomePage/quote.e347b092352abe3f6114b8db4ecc70ff.svg'
import {
  BoxImages,
  ContainerImg,
  ContainerTestimonials,
  ContentGrid,
  CustomImgTestimonial,
  StyledBox,
  StyledCarousel,
  TestimonialAuthor,
  TestimonialText,
  TitleTestimonial,
  UserJob,
  UserName
} from './styles'

interface UserTestimonialType {
  id: number
  review: string
  userName: string
  userJob: string
  img: string
}
const UserTestimonialsData: UserTestimonialType[] = [
  {
    id: 1,
    review: 'review1',
    userName: 'DANNY',
    userJob: 'job1',
    img: imgUser1
  },
  {
    id: 2,
    review: 'review2',
    userName: 'EMILY',
    userJob: 'job2',
    img: imgUser2
  },
  {
    id: 3,
    review: 'review3',
    userName: 'THOMAS',
    userJob: 'job3',
    img: imgUser3
  },
  {
    id: 4,
    review: 'review4',
    userJob: 'job4',
    userName: 'MICHAEL',
    img: imgUser4
  },
  {
    id: 5,
    review: 'review5',
    userName: 'SARAH',
    userJob: 'job5',
    img: imgUser5
  }
]

export function UserTestimonial() {
  const [selected, setSelected] = useState<UserTestimonialType | null>(null)
  const [images, setImages] = useState(UserTestimonialsData)
  const { t } = useTranslation()

  const handleClick = (clickedImage: any) => {
    let newImages = [...images]
    // Nếu hình ảnh được chọn đã ở vị trí thứ hai, không cần thực hiện thêm bất kỳ hành động nào
    if (newImages[1] && clickedImage.id === newImages[1].id) {
      return
    }
    // Tìm chỉ số của hình ảnh được click trong mảng
    const index = newImages.findIndex((image) => image.id === clickedImage.id)
    newImages.splice(index, 1) // Xóa hình ảnh được click khỏi vị trí hiện tại của nó
    const firstImage = newImages.shift() // Lưu lại hình ảnh ở vị trí thứ nhất trước khi thực hiện thay đổi
    newImages.splice(1, 0, clickedImage) // Chèn hình ảnh được click vào vị trí thứ hai (bây giờ là vị trí đầu tiên sau khi shift)
    if (firstImage) {
      newImages.push(firstImage) // Đẩy hình ảnh ở vị trí thứ nhất trước đó xuống cuối mảng
    }
    setImages(newImages)
    setSelected(clickedImage)
  }

  useEffect(() => {
    if (UserTestimonialsData.length >= 2) {
      setSelected(UserTestimonialsData[1])
    }
  }, [])
  return (
    <StyledBox>
      <ContainerTestimonials>
        <TitleTestimonial>{t('What Our Users Are Saying')}</TitleTestimonial>
        <ImageGeneral className='quotation' src={quotation} />
        <ContentGrid item>
          <Rating name='read-only' value={5} readOnly />
          <TestimonialText variant='h6'>{t(selected?.review ?? '')}</TestimonialText>
          <TestimonialAuthor variant='subtitle1'>
            <span> ___ </span>
            <UserName> {selected?.userName}</UserName>
            <UserJob>{t(selected?.userJob as string)}</UserJob>
          </TestimonialAuthor>
        </ContentGrid>
        <ContainerImg>
          {images.map((item) => (
            <BoxImages key={item?.id}>
              <CustomImgTestimonial
                img={item.img}
                src={item.img}
                selected={selected}
                onClick={() => {
                  handleClick(item)
                }}
              />
            </BoxImages>
          ))}
        </ContainerImg>
      </ContainerTestimonials>
      <StyledCarousel autoPlay={false} animation='slide' indicators={false} navButtonsAlwaysVisible={true}>
        {UserTestimonialsData.map((item) => (
          <Box>
            <BoxImages key={item.id}>
              <ImageGeneral src={item.img} />
            </BoxImages>
            <ImageGeneral className='quotation' src={quotation} />
            <ContentGrid item>
              <Rating name='read-only' value={5} readOnly />
              <TestimonialText variant='h6'>{t(item?.review ?? '')}</TestimonialText>
              <TestimonialAuthor variant='subtitle1'>
                <span> ___ </span>
                <UserName> {item?.userName}</UserName>
                <UserJob>{t(item?.userJob)}</UserJob>
              </TestimonialAuthor>
            </ContentGrid>
          </Box>
        ))}
      </StyledCarousel>
    </StyledBox>
  )
}
