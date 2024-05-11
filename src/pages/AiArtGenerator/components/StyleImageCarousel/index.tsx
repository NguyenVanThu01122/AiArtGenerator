import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material'
import Translations from '../../../../components/Translations'
import ImageGeneral from '../../../../components/Ui/image'
import iconNoStyle from '../../../../images/icon-no-style.svg'
import useCarouselScroll from '../../../../utils/useCarouselScroll'
import { StyleType } from '../../types'
import {
  ChooseStyleTitle,
  CustomGrid,
  CustomPaper,
  ItemNone,
  NameStyle,
  None,
  StyledCarousel,
  StyledFontAwesomeIconLeft,
  StyledFontAwesomeIconRight,
  TextContent,
  Wrapper
} from './styles'
interface StyleImageCarouselProps {
  selectStyle: any
  listStyle: StyleType[]
  handleClickNoneStyle: () => void
  handleClickStyle: (item: any) => void
}

const StyleImageCarousel = ({
  listStyle,
  selectStyle,
  handleClickNoneStyle,
  handleClickStyle
}: StyleImageCarouselProps) => {
  const { handleScrollCarousel, isScrollAtStart, isScrollAtEnd } = useCarouselScroll('.css-vj1n65-MuiGrid-root')

  return (
    <Wrapper>
      <ChooseStyleTitle>
        <Translations text={'Choose your style'} />
      </ChooseStyleTitle>
      <TextContent>
        <Translations text={'We will adjust the image options to the optimal settings.'} />
      </TextContent>
      <StyledCarousel
        navButtonsAlwaysVisible={true}
        stopAutoPlayOnHover={false}
        swipe={true}
        indicators={false}
        autoPlay
        cycleNavigation
        animation='slide'
        PrevIcon={
          <StyledFontAwesomeIconLeft
            onClick={() => handleScrollCarousel(-850)}
            icon={faAngleLeft}
            isScrollAtStart={isScrollAtStart}
          />
        }
        NextIcon={
          <StyledFontAwesomeIconRight
            onClick={() => handleScrollCarousel(860)}
            icon={faAngleRight}
            isScrollAtEnd={isScrollAtEnd}
          />
        }
      >
        <CustomGrid>
          <ItemNone selectStyle={selectStyle} onClick={handleClickNoneStyle}>
            <ImageGeneral src={iconNoStyle} alt='' />
            <None>None</None>
          </ItemNone>
          <Grid sx={{ display: 'flex' }}>
            {listStyle?.map((item: StyleType) => (
              <CustomPaper
                variant='outlined'
                square
                className={`${item?.id === selectStyle?.id && 'active-style'}`}
                onClick={() => handleClickStyle(item)}
              >
                <ImageGeneral className='image-ai' src={item?.image} />
                <NameStyle>{item?.name}</NameStyle>
              </CustomPaper>
            ))}
          </Grid>
        </CustomGrid>
      </StyledCarousel>
    </Wrapper>
  )
}

export default StyleImageCarousel
