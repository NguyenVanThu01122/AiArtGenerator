import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import ImageGeneral from "../../../../components/Ui/image";
import icPack from "../../../../images/Pricing/icon-pack.svg";
import imgSlider from "../../../../images/Pricing/icon-slider.svg";
import useCarouselScroll from "../../../../utils/useCarouselScroll";
import {
  StyledFontAwesomeIconLeft,
  StyledFontAwesomeIconRight,
} from "../../../AiArtGenerator/components/StyleImageCarousel/styles";
import {
  CarouselItem,
  CommentItem,
  ContentHeader,
  CreatorHub,
  DescriptionText,
  DetailFeedback,
  HeaderCreator,
  InfoUser,
  ItemImage,
  JobUser,
  NameUser,
  StyledBox,
  StyledCarousel,
  StyledGrid,
  Title,
} from "./styles";
interface CommentType {
  id: number;
  comment: string;
  name: string;
  job: string;
}

export const listComment = [
  {
    id: 1,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 2,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 3,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 4,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 5,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 6,
    comment: "COMMENT_KEY",
    name: "Danny",
    job: "Marketing Manager",
  },
];

function CreatorHubSection() {
  const { handleScrollCarousel, isScrollAtStart, isScrollAtEnd } =
    useCarouselScroll(".css-vj1n65-MuiGrid-root");
  const { t } = useTranslation();

  return (
    <StyledBox
      sx={{
        bgcolor: "common.background",
      }}
    >
      <HeaderCreator>
        <ContentHeader>
          <CreatorHub>{t("CREATORHUB")}</CreatorHub>
          <Title>{t("A trusted choice of thousands worldwide")}</Title>
          <DescriptionText>
            {t(
              "No matter the plan you select, you'll benefit from our top-notch customer support, regular updates,"
            )}
            {t(
              "and continuous improvements to ensure an exceptional experience throughout your creative endeavors."
            )}
          </DescriptionText>
        </ContentHeader>
        <ItemImage>
          <ImageGeneral src={imgSlider} alt="" />
        </ItemImage>
      </HeaderCreator>

      <CarouselItem>
        <StyledCarousel
          navButtonsAlwaysVisible={true}
          indicators={false}
          PrevIcon={
            <StyledFontAwesomeIconLeft
              onClick={() => handleScrollCarousel(-2000)}
              icon={faAngleLeft}
              isScrollAtStart={isScrollAtStart}
            />
          }
          NextIcon={
            <StyledFontAwesomeIconRight
              onClick={() => handleScrollCarousel(2000)}
              icon={faAngleRight}
              isScrollAtEnd={isScrollAtEnd}
            />
          }
        >
          <StyledGrid>
            {listComment.map((item: CommentType) => (
              <Grid container spacing={2} sx={{ marginRight: "10px" }}>
                <DetailFeedback key={item.id}>
                  <ImageGeneral src={icPack} alt="" />
                  <CommentItem>{`"${t(item?.comment)}"`}</CommentItem>
                  <InfoUser>
                    <NameUser>{item?.name}</NameUser>
                    <JobUser>{item?.job}</JobUser>
                  </InfoUser>
                </DetailFeedback>
              </Grid>
            ))}
          </StyledGrid>
        </StyledCarousel>
      </CarouselItem>
    </StyledBox>
  );
}

export default CreatorHubSection;
