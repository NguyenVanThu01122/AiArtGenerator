import { Button } from "antd";
import { LogoCreatorHub } from "../../components/LogoCreatorHub";
import icCrossbar from "../../images/HomeNew/ic-crossbar.svg";
import icRight from "../../images/HomeNew/icon-right.svg";
// import icRight from "../../images/HomeNew/";
import { BoxContents, Header, Wrapper } from "./styles";

export function HomeNew() {
  return (
    <Wrapper>
      <Header>
        <LogoCreatorHub />
        <div className="item-menu">
          <div>Home</div>
          <div>Pricing</div>
        </div>
        <Button className="btn-signUp">Sign up for free</Button>
      </Header>
      <BoxContents>
        <div className="first-child">
          <div className="parent-contents">
            <div className="title">
              <div>SMART. FAST. INNOVATIVE AI</div>
              <div>
                Unleash Your <span> Social Media</span> Potential with AI
              </div>
            </div>
            <div className="content">
              <div>
                Your all-in-one solution to elevate your social media marketing.
                Whether you're an app, game or e-commerce marketer, we've
                designed Creatorhub with your success in mind.
              </div>
              <img src={icCrossbar} alt="" />
            </div>
          </div>

          <div className="parent-text">
            <div className="child-text">
              <div className="video-container">
                <video
                  className="background-video"
                  autoPlay
                  loop
                  preload="auto"
                  playsInline
                  controls
                >
                  <source
                    src="https://creatorhub.ai/static/media/video-text-to-video.0608ea52e5f460d1561f.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="text-to-video">
                <div className="detail-contents">
                  <div>Social Post Generator</div>
                  <div>
                    From basic idea to complete social media post with stunning
                    image and detailed caption, along with thousands of build-in
                    template
                  </div>
                </div>
                <img className="ic-arrow" src={icRight} alt="" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </BoxContents>
    </Wrapper>
  );
}
