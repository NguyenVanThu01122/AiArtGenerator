import { Button } from "antd";
import icCheckBlue from "../../images/Pricing/ic-check-blue.png";
import icCheckGreen from "../../images/Pricing/ic-check-green.png";
import icCheckviolet from "../../images/Pricing/ic-check-violet.png";
import icNext from "../../images/Pricing/icon-next.svg";
import icPack from "../../images/Pricing/icon-pack.svg";
import icPrev from "../../images/Pricing/icon-prev.svg";
import imgSlider from "../../images/Pricing/icon-slider.svg";

import { useRef } from "react";
import Footer from "../../components/Footer";
import {
  BlockContents,
  ItemCarousel,
  ItemCollase,
  WrapperPricing,
} from "./styles";

const items = [
  {
    key: "1",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          01
        </span>
        Can I try before signing up?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        As a free user, you have access to all our tools with 25 credits, and
        once you run out of credits, you'll be limited. By upgrading to a Paid
        Account, you'll have access to more credits.
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          02
        </span>
        I want to purchase the yearly package. Will I get a discount?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        CreatorHub already offers very affordable pricing. Currently, we only
        provide a 20% discount for annual membership compared to the monthly
        price.
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          03
        </span>
        Can I cancel my paid subscription?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        Yes, you can pay with one credit card for multiple accounts. Just
        provide the email addresses of the members in your group, and your paid
        package will be automatically upgraded.
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          04
        </span>
        Can I cancel my paid subscription?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        Absolutely! If our service doesn't meet your needs, you can cancel your
        subscription at any time.
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          05
        </span>
        What if I want to change my paid package in the middle?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        You can purchase and cancel a paid package as needed from your Account.
        Similarly, you can upgrade your paid package, and we'll automatically
        adjust the fee accordingly.
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <div style={{ fontWeight: "500" }}>
        <span
          style={{ fontSize: "18px", fontWeight: "600", marginRight: "15px" }}
        >
          06
        </span>
        Will I own the images I make?
      </div>
    ),
    children: (
      <div style={{ fontSize: "12px" }}>
        Yes, you own all the content you generate using the platform and can use
        it for commercial purposes. This includes any images or assets that are
        generated based on the input prompts you provide.
      </div>
    ),
  },
];

const listComment = [
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
function Pricing() {
  const textRef = useRef<any>();

  const handlePrev = () => {
    (textRef.current as any).prev(); 
  };
  const handleNext = () => {
    (textRef.current as any).next();
  };
  return (
    <WrapperPricing>
      <BlockContents>
        <div className="box-pricing">
          <div className="title-pricing">
            <div>PRICING</div>
            <div>Explore Flexible Pricing Plans for AI-Powered Creativity</div>
            <div>
              Choose your suitable plans and access a world of AI-powered tools
              designed to elevate your content creation.
            </div>
          </div>
          <div className="list-pricing">
            <div className="option-container">
              <div className="detail-pricing">
                <div className="title-eco">Eco</div>
                <div className="pricing">
                  $4.99 <span>/ month</span>
                </div>
                <div className="credits-eco">+ 300 credits per month</div>
                <div className="content">
                  Suitable for those who want to discover the potential of AI
                  through our essential toolkit.
                </div>
              </div>
              <Button className="btn-eco">Active</Button>
              <div className="list-benefit">
                <div className="all-benefit">
                  All the basic features, include:
                </div>
                <div className="conten-benefit">
                  <img src={icCheckGreen} alt="" />
                  <div>No advertisement</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckGreen} alt="" />
                  <div>
                    Long-form content length and medium resolution download
                    quality
                  </div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckGreen} alt="" />
                  <div>Access to premium art styles</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckGreen} alt="" />
                  <div>Remove Watermark</div>
                </div>
              </div>
            </div>
            <div className="option-container option2">
              <div className="detail-pricing">
                <div id="popular">
                  <div>MOST POPULAR</div>
                </div>
                <div className="title-basic">Basic</div>
                <div className="pricing">
                  $9.99<span>/ month</span>
                </div>
                <div className="credits-basic">+ 1,000 credits per month</div>
                <div className="content">
                  Ideal for individual users who need to create 2-5 social media
                  posts or 6-20 images using AI per day.
                </div>
              </div>
              <Button className="btn-basic">Start 3 days trial</Button>
              <div className="list-benefit">
                <div className="all-benefit">
                  All the basic features, include:
                </div>
                <div className="conten-benefit">
                  <img src={icCheckviolet} alt="" />
                  <div>No advertisement</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckviolet} alt="" />
                  <div>
                    Long-form content length and medium resolution download
                    quality
                  </div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckviolet} alt="" />
                  <div>Access to premium art styles</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckviolet} alt="" />
                  <div>Remove Watermark</div>
                </div>
              </div>
            </div>
            <div className="option-container">
              <div className="detail-pricing">
                <div className="title-pro">Pro</div>
                <div className="pricing">
                  $19.99 <span>/ month</span>
                </div>
                <div className="credits-pro">+ 3,000 credits per month</div>
                <div className="content">
                  Perfect for professional users who require generating 6-15
                  social media posts or 12-60 images using AI per day.
                </div>
              </div>
              <Button className="btn-pro">Start 3 days trial</Button>
              <div className="list-benefit">
                <div className="all-benefit">
                  All the greatness of Plus, and:
                </div>
                <div className="conten-benefit">
                  <img src={icCheckBlue} alt="" />
                  <div>Brand management</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckBlue} alt="" />
                  <div>
                    Unlimited content length and high resolution download
                    quality
                  </div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckBlue} alt="" />
                  <div>Priority support</div>
                </div>
                <div className="conten-benefit">
                  <img src={icCheckBlue} alt="" />
                  <div>Beta access to new feature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-choosers">
          <div className="header-choosers">
            <div className="title">
              <div>CREATORHUB</div>
              <div>A trusted choice of thousands worldwide</div>
              <div>
                No matter the plan you select, you'll benefit from our top-notch
                customer support, regular updates, and continuous improvements
                to ensure an exceptional experience throughout your creative
                endeavors.
              </div>
            </div>
            <div className="item-img">
              <img src={imgSlider} alt="" />
            </div>
          </div>
          <div className="item-carousel">
            <ItemCarousel
              autoplay={true}
              variableWidth={true}
              dots={false}
              ref={textRef}
              draggable
              // slidesToScroll={3}
            >
              {listComment.map((item: any) => (
                <div className="section-feedback" key={item.id}>
                  <img src={icPack} alt="" />
                  <div className="content">{item?.comment}</div>
                  <div className="information-user">
                    <div>{item?.name}</div>
                    <div>{item?.job}</div>
                  </div>
                </div>
              ))}
            </ItemCarousel>
            <img
              className="icon-prev"
              onClick={handlePrev}
              src={icPrev}
              alt=""
            />
            <img
              className="icon-next"
              onClick={handleNext}
              src={icNext}
              alt=""
            />
          </div>
        </div>
        <div className="box-question">
          <div className="title-question">
            <div>Frequently Asked Questions</div>
            <div>
              Check out our frequently asked questions below to find answers to
              common inquiries.
            </div>
          </div>
          <ItemCollase items={items} defaultActiveKey={["1"]} ghost={false} />
        </div>
      </BlockContents>
      <Footer />
    </WrapperPricing>
  );
}
export default Pricing;
