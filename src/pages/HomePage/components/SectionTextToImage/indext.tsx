import { useMediaQuery, useTheme } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageGeneral from "../../../../components/Ui/image";
import icCrossbar from "../../../../images/HomePage/ic-crossbar.svg";
import icArrow from "../../../../images/HomePage/icon-arrow.svg";
import icRight from "../../../../images/HomePage/icon-right.svg";
import { ROUTES } from "../../../../routes/routes";
import {
  BoxTexToImage,
  BoxTextVideo,
  ContentTextImage,
  ContentTextVideo,
  StyledCard,
  StyledCardContent,
  StyledGridContent,
  StyledGridHead,
  TexToImage,
} from "./styles";
// import icRight from "../../images/HomePage/";

export default function SectionTextToImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [textToImage, setTextToImage] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickTexToImage = () => {
    setTextToImage(true);
  };
  const redirectSignIn = () => navigate(ROUTES.SIGN_IN);
  return (
    <Grid container>
      <StyledGridHead item>
        <div className="title">
          <div>SMART. FAST. INNOVATIVE AI</div>
          <div>
            Unleash Your <span className="empty"></span>{" "}
            <span> Social Media</span> Potential with AI
            <ImageGeneral src={icArrow} />
          </div>
        </div>
        <div className="content">
          <div>
            Your all-in-one solution to elevate your social media marketing.
            Whether you're an app, game or e-commerce marketer, we've designed
            Creatorhub with your success in mind.
          </div>
          <ImageGeneral src={icCrossbar} alt="" />
        </div>
      </StyledGridHead>

      <StyledGridContent item>
        <StyledCard
          theme={theme}
          textToImage={textToImage}
          onClick={() => setTextToImage(false)}
        >
          <StyledCardContent textToImage={textToImage}>
            <BoxTextVideo textToImage={textToImage}>
              <ContentTextVideo textToImage={textToImage}>
                <div>Social Post Generator</div>
                <div>
                  From basic idea to complete social media post with stunning
                  image and detailed caption, along with thousands of build-in
                  template
                </div>
              </ContentTextVideo>
              <ImageGeneral
                onClick={redirectSignIn}
                className="ic-arrow"
                src={icRight}
              />
            </BoxTextVideo>
          </StyledCardContent>
          <CardMedia
            component="video"
            src="https://creatorhub.ai/static/media/video-text-to-video.0608ea52e5f460d1561f.mp4"
            title="Contemplative Reptile"
            autoPlay
            loop
            preload="auto"
            playsInline
            controls
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          />
        </StyledCard>

        <BoxTexToImage
          theme={theme}
          textToImage={textToImage}
          onClick={handleClickTexToImage}
        >
          <TexToImage textToImage={textToImage}>
            <ContentTextImage textToImage={textToImage}>
              <div>Text to Image</div>
              <div>
                Easily create high-quality images that match your thoughts with
                one-line text input
              </div>
            </ContentTextImage>
            <ImageGeneral onClick={redirectSignIn} src={icRight} alt="" />
          </TexToImage>
        </BoxTexToImage>
      </StyledGridContent>
    </Grid>
  );
}
