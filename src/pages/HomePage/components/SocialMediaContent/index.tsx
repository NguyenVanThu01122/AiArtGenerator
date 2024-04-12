import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageGeneral from '../../../../components/Ui/image'
import image1 from '../../../../images/imageLogin1.png'
import image2 from '../../../../images/imageLogin2.png'
import image3 from '../../../../images/imageLogin3.png'
import {
  Description,
  ItemContent,
  ListItemSocial,
  NeverBeenEasier,
  StyledBox,
  StyledGrid,
  Title,
  TitleSocial,
  TitleText,
  Wrapper
} from './styles'
const socialMediaContent = [
  {
    stt: 1,
    title: 'postIdeaTitle',
    description: 'postIdeaDescription',
    img: image1
  },
  {
    stt: 2,
    title: 'aiPostsTitle',
    description: 'aiPostsDescription',
    img: image2
  },
  {
    stt: 3,
    title: 'connectScheduleTitle',
    description: 'connectScheduleDescription',
    img: image3
  }
]

export default function SocialMediaContent() {
  const { t } = useTranslation()
  const [selectedStt, setSelectedStt] = useState(1)
  const [chooseImage, setChooseImage] = useState(socialMediaContent[1]?.img)

  useEffect(() => {
    // Tìm item được chọn trong mảng socialMediaContent
    const selectItem = socialMediaContent.find((item) => item.stt === selectedStt)
    if (selectItem) {
      setChooseImage(selectItem.img)
    }
  }, [selectedStt])
  return (
    <Wrapper>
      <TitleSocial>
        <TitleText>{t('Creating Social Media Content')}</TitleText>
        <NeverBeenEasier>{t('Never Been Easier')}</NeverBeenEasier>
      </TitleSocial>
      <StyledBox>
        {<ImageGeneral src={chooseImage} />}
        <ListItemSocial>
          {socialMediaContent.map((item) => (
            <ItemContent
              key={item?.stt}
              chooseImage={chooseImage}
              selectedStt={selectedStt}
              stt={item?.stt}
              onClick={() => {
                setSelectedStt(item?.stt)
                setChooseImage(item?.img)
              }}
            >
              <div className='stt'>{item?.stt}</div>
              <StyledGrid>
                <Title>{t(item?.title)}</Title>
                <Description selectedStt={selectedStt} stt={item?.stt}>
                  {t(item?.description)}
                </Description>
              </StyledGrid>
            </ItemContent>
          ))}
        </ListItemSocial>
      </StyledBox>
    </Wrapper>
  )
}
