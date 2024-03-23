import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import AnimationStar from "../../components/AnimationStar";
import Footer from "../../components/Footer";
import ButtonGeneral from "../../components/Ui/button";
import ImageGeneral from "../../components/Ui/image";
import iconQuote from "../../images/Home/icon-quote.png";
import icArrow from "../../images/ic-arrow.png";
import icTabBar1 from "../../images/icTabBar1.png";
import icTabBar from "../../images/icon-tab-bar.png";
import imgRemoval1 from "../../images/img-removal1.png";
import imgRemoval2 from "../../images/img-removal2.png";
import { saveLogin, saveToken } from "../../redux/Actions/app";
import { NOTIFICATION } from "../../utils/constants";
import {
  ListBenefitsType,
  ListProductType,
  ListTestimonialsType,
  listBenefits,
  listProduct,
  listTestimonials,
} from "./Data";
import { ItemCarousel, LastItem, SectionContents, WrapperHome } from "./styles";

function Home() {
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParam.get("token");
    const refreshToken = searchParam.get("refresh_token");
    if (token && refreshToken) {
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
  }, [searchParam]);

  const handleNotification = () => toast.success(NOTIFICATION);

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
            <ButtonGeneral className="custom-btn">
              <ImageGeneral src={icTabBar} alt="" />
              <span>Explore All Tools</span>
            </ButtonGeneral>
          </div>
          <div className="item-img">
            <ImageGeneral src={imgRemoval2} alt="" />
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
            <ButtonGeneral className="custom-btn">
              <ImageGeneral src={icTabBar1} alt="" />
              <span>Claim Your Discount</span>
            </ButtonGeneral>
          </div>
          <div className="item-img">
            <ImageGeneral src={imgRemoval1} alt="" />
          </div>
        </div>
      </ItemCarousel>
      <SectionContents>
        <div className="item-products">
          <div className="title">
            <div>PRODUCTS</div>
            <div>One solution, countless content possibilities</div>
            <div>
              Empower your creativity with Creatorhub: The essential AI toolkit
              for content creators. Elevate your content to new heights for all
              your business needs.
            </div>
          </div>
          <div className="list-products">
            {listProduct.map((item: ListProductType) => (
              <div className="detail-product" key={item?.id}>
                <div className="item-img">
                  <ImageGeneral src={item?.image ?? ""} alt="" />
                </div>
                <div className="contents-products">
                  <div>{item?.title}</div>
                  <div>{item?.text}</div>
                </div>
                <ButtonGeneral
                  className="btn-try-now"
                  onClick={() =>
                    item?.url ? navigate(item?.url) : handleNotification()
                  }
                >
                  <span>Try Now</span>
                  <ImageGeneral src={icArrow} alt="" />
                </ButtonGeneral>
              </div>
            ))}
          </div>
        </div>
        <div className="item-benefits">
          <div className="title">
            <div>BENEFITS</div>
            <div>Achieve more with less effort</div>
            <div>
              Simplify complex tasks, streamline workflows, and amplify your
              creativity without breaking a sweat.
            </div>
          </div>
          <div className="box-benefits">
            {listBenefits.map((item: ListBenefitsType) => (
              <div className="detail-benefit" key={item?.id}>
                <div className="empty-box"></div>
                <div className="item-img">
                  <ImageGeneral src={item?.image ?? ""} alt="" />
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
          <div className="title">
            <div>TESTIMONIALS </div>
            <div>Don't just take our word for it</div>
            <div>
              From content creators to entrepreneurs, our solutions have
              revolutionized the way they work and create.
            </div>
          </div>
          <div className="list-testimonials">
            {listTestimonials.map((item: ListTestimonialsType) => (
              <div className="detail-item" key={item?.id}>
                <ImageGeneral
                  className="img-user"
                  src={item?.image ?? ""}
                  alt=""
                />
                <ImageGeneral className="img-quote" src={iconQuote} alt="" />
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
          <ButtonGeneral onClick={() => navigate("/pricing")}>
            Get Started
          </ButtonGeneral>
        </div>
        <Footer />
      </LastItem>
    </WrapperHome>
  );
}
export default Home;
