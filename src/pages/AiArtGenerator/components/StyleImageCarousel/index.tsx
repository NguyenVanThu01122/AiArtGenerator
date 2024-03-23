import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ImageGeneral from "../../../../components/Ui/image";
import iconNoStyle from "../../../../images/icon-no-style.svg";
import {
  ChooseStyleTitle,
  CustomGrid,
  CustomPaper,
  StyledCarousel,
  StyledFontAwesomeIconLeft,
  StyledFontAwesomeIconRight,
  TextContent,
  Wrapper,
} from "./styles";
interface StyleImageCarouselProps {
  selectStyle: any;
  listStyle: any[];
  handleClickNoneStyle: () => void;
  handleClickStyle: (item: any) => void;
}

const StyleImageCarousel = ({
  listStyle,
  selectStyle,
  handleClickNoneStyle,
  handleClickStyle,
}: StyleImageCarouselProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleScrollCarousel = (distance: number) => {
    const carousel = document.querySelector(".css-vj1n65-MuiGrid-root");
    if (carousel) {
      carousel.scrollBy({
        left: distance, // khoảng cách cuộn theo chiều ngang
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = document.querySelector(".css-vj1n65-MuiGrid-root");
    const handleCarouselScroll = () => {
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        setIsBeginning(scrollLeft === 0);
        setIsEnd(scrollLeft === scrollWidth - clientWidth);
      }
    };
    carousel?.addEventListener("scroll", handleCarouselScroll);
    return () => carousel?.removeEventListener("scroll", handleCarouselScroll);
  }, [isEnd, isBeginning]);

  return (
    <Wrapper>
      <ChooseStyleTitle>Choose your style</ChooseStyleTitle>
      <TextContent>
        We will adjust the image options to the optimal settings.
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
            onClick={() => handleScrollCarousel(-1000)}
            icon={faAngleLeft}
            style={{ display: isBeginning ? "none" : "block" }}
          />
        }
        NextIcon={
          <StyledFontAwesomeIconRight
            onClick={() => handleScrollCarousel(1000)}
            icon={faAngleRight}
            style={{ display: isEnd ? "none" : "block" }}
          />
        }
      >
        <CustomGrid>
          <Grid
            className={`item-none ${selectStyle === "" && "active-none"}`}
            onClick={handleClickNoneStyle}
          >
            <ImageGeneral src={iconNoStyle} alt="" />
            <div>None</div>
          </Grid>
          <Grid sx={{ display: "flex" }}>
            {listStyle.map((item: any) => (
              <CustomPaper
                variant="outlined"
                square
                className={`${item.id === selectStyle?.id && "active-style"}`}
                onClick={() => handleClickStyle(item)}
              >
                <ImageGeneral className="image-ai" src={item?.image} />
                <div className="name-style">{item?.name}</div>
              </CustomPaper>
            ))}
          </Grid>
        </CustomGrid>
      </StyledCarousel>
    </Wrapper>
  );
};

export default StyleImageCarousel;
