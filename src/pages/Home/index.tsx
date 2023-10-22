import { Button } from "antd";
import iconQuote from "../../images/Home/icon-quote.png";
import imgbenefits1 from "../../images/Home/img-benefits1.png";
import imgbenefits2 from "../../images/Home/img-benefits2.png";
import imgbenefits3 from "../../images/Home/img-benefits3.png";
import imgbenefits4 from "../../images/Home/img-benefits4.png";
import imgPeople1 from "../../images/Home/img-people1.png";
import imgPeople2 from "../../images/Home/img-people2.png";
import imgPeople3 from "../../images/Home/img-people3.png";
import imgPeople4 from "../../images/Home/img-people4.png";
import imgProduct1 from "../../images/Home/img-product1.png";
import imgProduct2 from "../../images/Home/img-product2.png";
import imgProduct3 from "../../images/Home/img-product3.png";
import imgProduct4 from "../../images/Home/img-product4.png";
import imgProduct5 from "../../images/Home/img-product5.png";
import imgProduct6 from "../../images/Home/img-product6.png";
import imgRemoval1 from "../../images/img-removal1.png";
import imgRemoval2 from "../../images/img-removal2.png";

import icArrow from "../../images/ic-arrow.png";
import icTabBar1 from "../../images/icTabBar1.png";
import icTabBar from "../../images/icon-tab-bar.png";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import AnimationStar from "../../components/AnimationStar";
import Footer from "../../components/Footer";
import { saveLogin, saveToken } from "../../redux/Actions/app";
import { ItemCarousel, LastItem, SectionContents, WrapperHome } from "./styles";

const listProduct = [
  {
    id: 1,
    image: imgProduct1,
    title: "AI Art Generator",
    text: "Transform photos into stunning artistic pieces or create original artwork effortlessly.",
    url: "/ai-art-generator",
  },
  {
    id: 2,
    image: imgProduct2,
    title: "AI Background Changer",
    text: "Effortlessly remove backgrounds from your images using our AI-powered Background Remover.",
    url: "/ai-background-changer",
  },
  {
    id: 3,
    image: imgProduct3,
    title: "AI Photo Enhancer",
    text: " Enhance sharpness, clarity, colors, and reduce noise to give your images a professional touch.",
    url: "/ai-photo-enhancer",
  },
  {
    id: 4,
    image: imgProduct4,
    title: "AI Social Posts Generator",
    text: "Easily generate social media posts with spectacular by AI in one minute.",
  },
  {
    id: 5,
    image: imgProduct5,
    title: "AI Writing Assistant",
    text: " AI Writing Assistant - your creative, fast, and flexible tool to elevate every word.",
  },
  {
    id: 6,
    image: imgProduct6,
    title: "New Features are coming!",
    text: "Magical thing by our AI service is about to show up!Can’t wait to suprise you guys.",
  },
];
const listBenefits = [
  {
    id: 1,
    image: imgbenefits1,
    title: "Higher Efficiency",
    text: "Save time & effort with AI-powered editing.",
  },
  {
    id: 2,
    image: imgbenefits2,
    title: "Limitless Creative",
    text: "Unleash creativity with inspiring content ideas.",
  },
  {
    id: 3,
    image: imgbenefits3,
    title: "Faster Productivity",
    text: "Boost efficiency for engaging content creation.",
  },
  {
    id: 4,
    image: imgbenefits4,
    title: "Professional Results",
    text: " Achieve professional quality without extensive editing skills.",
  },
];
const listTestimonials = [
  {
    id: 1,
    image: imgPeople1,
    content:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 2,
    image: imgPeople2,
    content:
      '"The AI Writing Assistant elevated my content quality. Correcting grammar and suggesting creative ideas, it`s a must-have for creators!"',
    name: "Sarah",
    job: "Content Creator",
  },
  {
    id: 3,
    image: imgPeople3,
    content:
      '"The AI Background Changer saved my time and enhanced product visuals. An essential tool for any entrepreneur!"',
    name: "Michael",
    job: "Social Media Manager",
  },
  {
    id: 4,
    image: imgPeople4,
    content:
      '"The AI Background Changer saved my time and enhanced product visuals. An essential tool for any entrepreneur!"',
    name: "Emily",
    job: "Social Media Manager",
  },
];

function Home() {
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParam.get("token") && searchParam.get("refresh_token")) {
      localStorage.setItem("token", searchParam.get("token") || "");
      localStorage.setItem(
        "refreshToken",
        searchParam.get("refresh_token") || ""
      );
      // lưu lại token và refresh token khi đăng nhập hoặc đăng ký bằng google và facebook thành công
      dispatch(saveLogin(true));
      dispatch(saveToken(searchParam.get("token") || ""));
      // set lại login và token vào redux
      setSearchParam({});
    }
  }, []);
  return (
    <WrapperHome>
      <AnimationStar />
      <ItemCarousel slidesToShow={1} dots={true} autoplay>
        <div className="introduce-item">
          <div className="contents">
            <div>EXCLUSIVE OFFER</div>
            <div>Essential AI Toolkit for Content Creators </div>
            <div>
              We empower content creators like you to unleash their full
              creative potential. Our essential AI Toolkit is designed to
              revolutionize your content creation process and help you stand out
              from the crowd.
            </div>
            <Button className="custom-btn">
              <img src={icTabBar} alt="" />
              <span>Explore All Tools</span>
            </Button>
          </div>
          <div className="item-img">
            <img src={imgRemoval2} alt="" />
          </div>
        </div>
        <div className="introduce-item">
          <div className="contents">
            <div>EXCLUSIVE OFFER</div>
            <div>X2 Credits for the First 100 subscribers</div>
            <div>
              Use code <span>EARLY100</span> at checkout for x2 credits. Limited
              to the first 100 subscribers only. Unlock turbocharged content
              creation with our essential AI toolkit.
            </div>
            <Button className="custom-btn">
              <img src={icTabBar1} alt="" />
              <span>Claim Your Discount</span>
            </Button>
          </div>
          <div className="item-img">
            <img src={imgRemoval1} alt="" />
          </div>
        </div>
      </ItemCarousel>
      <SectionContents>
        <div className="item-products">
          <div className="title-products">
            <div>PRODUCTS</div>
            <div>One solution, countless content possibilities</div>
            <div>
              Empower your creativity with Creatorhub: The essential AI toolkit
              for content creators. Elevate your content to new heights for all
              your business needs.
            </div>
          </div>
          <div className="list-products">
            {listProduct.map((item: any) => (
              <div className="detail-product" key={item?.id}>
                <div className="item-img">
                  <img src={item?.image} alt="" />
                </div>
                <div className="contents-products">
                  <div>{item?.title}</div>
                  <div>{item?.text}</div>
                </div>
                <Button
                  className="btn-try-now"
                  onClick={() => navigate(item?.url)}
                >
                  <span>Try Now</span>
                  <img src={icArrow} alt="" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="item-benefits">
          <div className="title-benefit">
            <div>BENEFITS</div>
            <div>Achieve more with less effort</div>
            <div>
              Simplify complex tasks, streamline workflows, and amplify your
              creativity without breaking a sweat.
            </div>
          </div>
          <div className="box-benefits">
            {listBenefits.map((item: any) => (
              <div className="detail-benefit" key={item?.id}>
                <div className="empty-box"></div>
                <div className="item-img">
                  <img src={item?.image} alt="" />
                </div>
                <div className="contents">
                  <div>{item?.title}</div>
                  <div>{item?.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="item-testimonials">
          <div className="title-testimonials">
            <div>TESTIMONIALS </div>
            <div>Don't just take our word for it</div>
            <div>
              From content creators to entrepreneurs, our solutions have
              revolutionized the way they work and create.
            </div>
          </div>
          <div className="list-testimonials">
            {listTestimonials.map((item: any) => (
              <div className="detail-item" key={item?.id}>
                <img className="img-user" src={item?.image} alt="" />
                <img className="img-quote" src={iconQuote} alt="" />
                <div className="contents">{item?.content}</div>
                <div className="information-user">
                  <div>{item?.name}</div>
                  <div>{item?.job}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContents>
      <LastItem>
        <div className="header">
          <div>Ready to Elevate Your Creativity?</div>
          <div>
            Don't settle for the ordinary – take the leap into extraordinary
            possibilities.
            <br />
            Join thousands of content creators, entrepreneurs, and professionals
            who have already harnessed the power of our innovative solutions.
          </div>
          <Button>Get Started</Button>
        </div>
        <Footer />
      </LastItem>
    </WrapperHome>
  );
}
export default Home;
