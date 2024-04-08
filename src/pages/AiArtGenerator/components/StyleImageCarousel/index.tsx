import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import ImageGeneral from "../../../../components/Ui/image";
import iconNoStyle from "../../../../images/icon-no-style.svg";
import useCarouselScroll from "../../../../utils/useCarouselScroll";
import { StyleType } from "../../types";
import {
  ChooseStyleTitle,
  CustomGrid,
  CustomPaper,
  NameStyle,
  None,
  StyledCarousel,
  StyledFontAwesomeIconLeft,
  StyledFontAwesomeIconRight,
  TextContent,
  Wrapper,
} from "./styles";
interface StyleImageCarouselProps {
  selectStyle: any;
  listStyle: StyleType[];
  handleClickNoneStyle: () => void;
  handleClickStyle: (item: any) => void;
}

const StyleImageCarousel = ({
  listStyle,
  selectStyle,
  handleClickNoneStyle,
  handleClickStyle,
}: StyleImageCarouselProps) => {
  const { t } = useTranslation();
  const { handleScrollCarousel, isScrollAtStart, isScrollAtEnd } =
    useCarouselScroll(".css-vj1n65-MuiGrid-root");

  return (
    <Wrapper>
      <ChooseStyleTitle>{t("Choose your style")}</ChooseStyleTitle>
      <TextContent>
        {t("We will adjust the image options to the optimal settings.")}
      </TextContent>
      <StyledCarousel
        navButtonsAlwaysVisible={true}
        stopAutoPlayOnHover={false}
        swipe={true}
        indicators={false}
        autoPlay
        cycleNavigation
        animation="slide"
        PrevIcon={
          <StyledFontAwesomeIconLeft
            onClick={() => handleScrollCarousel(-800)}
            icon={faAngleLeft}
            isScrollAtStart={isScrollAtStart}
          />
        }
        NextIcon={
          <StyledFontAwesomeIconRight
            onClick={() => handleScrollCarousel(800)}
            icon={faAngleRight}
            isScrollAtEnd={isScrollAtEnd}
          />
        }
      >
        <CustomGrid>
          <Grid
            className={`item-none ${selectStyle === "" && "active-none"}`}
            onClick={handleClickNoneStyle}
          >
            <ImageGeneral src={iconNoStyle} alt="" />
            <None>None</None>
          </Grid>
          <Grid sx={{ display: "flex" }}>
            {listStyle?.map((item: StyleType) => (
              <CustomPaper
                variant="outlined"
                square
                className={`${item?.id === selectStyle?.id && "active-style"}`}
                onClick={() => handleClickStyle(item)}
              >
                <ImageGeneral className="image-ai" src={item?.image} />
                <NameStyle>{item?.name}</NameStyle>
              </CustomPaper>
            ))}
          </Grid>
        </CustomGrid>
      </StyledCarousel>
    </Wrapper>
  );
};

export default StyleImageCarousel;
