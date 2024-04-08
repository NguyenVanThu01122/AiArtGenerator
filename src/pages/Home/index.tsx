import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
import { ROUTES } from "../../routes/routes";
import { NOTIFICATION } from "../../utils/constants";
import {
  ListBenefitsType,
  ListProductType,
  ListTestimonialsType,
  listBenefits,
  listProduct,
  listTestimonials,
} from "./Data";
import {
  BoxContent,
  ContainerBenefits,
  ContainerProducts,
  ContainerTestimonials,
  ItemCarousel,
  LastItem,
  SectionContents,
  TestimonialBox,
  WrapperHome,
} from "./styles";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNotification = () => toast.success(NOTIFICATION);

  return (
    <WrapperHome>
      <BoxContent>
        <AnimationStar />
        <ItemCarousel slidesToShow={1} dots={true} autoplay>
          <div className="introduce-item">
            <div className="contents">
              <div>{t("EXCLUSIVE OFFER")}</div>
              <div>{t("Essential AI Toolkit for Content Creators")}</div>
              <div>
                {t(
                  "We empower content creators like you to unleash their full creative potential."
                )}
                {t(
                  "Our essential AI Toolkit is designed to revolutionize your content creation process and help you stand out from the crowd."
                )}
              </div>
              <ButtonGeneral className="custom-btn">
                <ImageGeneral src={icTabBar} alt="" />
                <span>{t("Explore All Tools")}</span>
              </ButtonGeneral>
            </div>
            <div className="item-img">
              <ImageGeneral src={imgRemoval2} alt="" />
            </div>
          </div>
          <div className="introduce-item">
            <div className="contents">
              <div>{t("EXCLUSIVE OFFER")}</div>
              <div>{t("X2 Credits for the First 100 subscribers")}</div>
              <div>
                {t("Use code")}{" "}
                <span style={{ margin: "0px 5px" }}>EARLY100</span>
                {t(
                  "at checkout for x2 credits. Limited to the first 100 subscribers only. Unlock turbocharged content creation with our essential AI toolkit."
                )}
              </div>
              <ButtonGeneral className="custom-btn">
                <ImageGeneral src={icTabBar1} alt="" />
                <span>{t("Claim Your Discount")}</span>
              </ButtonGeneral>
            </div>
            <div className="item-img">
              <ImageGeneral src={imgRemoval1} alt="" />
            </div>
          </div>
        </ItemCarousel>
        <SectionContents>
          <ContainerProducts>
            <div className="title">
              <div>{t("PRODUCTS")}</div>
              <div>{t("One solution, countless content possibilities")}</div>
              <div>
                {t(
                  "Empower your creativity with Creatorhub The essential AI Toolkit for content creators. Elevate your content to new heights for all your business needs."
                )}
              </div>
            </div>
            <div className="list-products">
              {listProduct.map((item: ListProductType) => (
                <div className="detail-product" key={item?.id}>
                  <div className="item-img">
                    <ImageGeneral src={item?.image ?? ""} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>{t(item?.title as string)}</div>
                    <div>{t(item?.text as string)}</div>
                  </div>
                  <ButtonGeneral
                    className="btn-try-now"
                    onClick={() =>
                      item?.url ? navigate(item?.url) : handleNotification()
                    }
                  >
                    <span>{t("Try Now")}</span>
                    <ImageGeneral src={icArrow} alt="" />
                  </ButtonGeneral>
                </div>
              ))}
            </div>
          </ContainerProducts>

          <ContainerBenefits
            sx={{
              bgcolor: "common.background",
            }}
          >
            <div className="title">
              <div>{t("BENEFITS")}</div>
              <div>{t("Achieve more with less effort")}</div>
              <div>
                {t(
                  "Simplify complex tasks, streamline workflows, and amplify your creativity without breaking a sweat."
                )}
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
                    <div>{t(item?.title ?? "")}</div>
                    <div>{t(item?.text ?? "")}</div>
                  </div>
                </div>
              ))}
            </div>
          </ContainerBenefits>

          <ContainerTestimonials>
            <div className="title">
              <div>{t("TESTIMONIALS")}</div>
              <div>{t("Don't just take our word for it")}</div>
              <div>
                {t(
                  "From content creators to entrepreneurs, our solutions have revolutionized the way they work and create."
                )}
              </div>
            </div>
            <div className="list-testimonials">
              {listTestimonials.map((item: ListTestimonialsType) => (
                <TestimonialBox
                  key={item?.id}
                  sx={{
                    bgcolor: "common.background",
                  }}
                >
                  <ImageGeneral className="img-user" src={item?.image ?? ""} />
                  <ImageGeneral className="img-quote" src={iconQuote} alt="" />
                  <div className="contents">{t(item?.content)}</div>
                  <div className="information-user">
                    <div>{item?.name}</div>
                    <div>{item?.job}</div>
                  </div>
                </TestimonialBox>
              ))}
            </div>
          </ContainerTestimonials>
        </SectionContents>
        <LastItem>
          <div className="header">
            <div>{t("Ready to Elevate Your Creativity?")}</div>
            <div>
              {t(
                "Don't settle for the ordinary – take the leap into extraordinary possibilities. Join thousands of content creators, entrepreneurs, and professionals who have already harnessed the power of our innovative solutions."
              )}
            </div>
            <ButtonGeneral onClick={() => navigate(ROUTES.AI_ART_GENERATOR)}>
              {t("Get Started")}
            </ButtonGeneral>
          </div>
        </LastItem>
      </BoxContent>
      <Footer />
    </WrapperHome>
  );
}
export default Home;
