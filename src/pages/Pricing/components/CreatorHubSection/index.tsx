import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
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
  StyledCarousel,
  StyledGrid,
  Title,
  Wrapper,
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
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 2,
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 3,
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 4,
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 5,
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 6,
    comment:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
];

function CreatorHubSection() {
  const { handleScrollCarousel, isScrollAtStart, isScrollAtEnd } =
    useCarouselScroll(".css-vj1n65-MuiGrid-root");

  return (
    <Wrapper>
      <HeaderCreator>
        <ContentHeader>
          <CreatorHub>CREATORHUB</CreatorHub>
          <Title>A trusted choice of thousands worldwide</Title>
          <DescriptionText>
            No matter the plan you select, you'll benefit from our top-notch
            customer support, regular updates, and continuous improvements to
            ensure an exceptional experience throughout your creative endeavors.
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
                  <CommentItem>{item?.comment}</CommentItem>
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
    </Wrapper>
  );
}

export default CreatorHubSection;
