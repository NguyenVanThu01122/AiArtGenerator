import { Button } from "antd";
import icCheckBlue from "../../images/Pricing/ic-check-blue.png";
import icCheckGreen from "../../images/Pricing/ic-check-green.png";
import icCheckViolet from "../../images/Pricing/ic-check-violet.png";
import icNext from "../../images/Pricing/icon-next.svg";
import icPack from "../../images/Pricing/icon-pack.svg";
import icPrev from "../../images/Pricing/icon-prev.svg";
import imgSlider from "../../images/Pricing/icon-slider.svg";

import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";

import { toast } from "react-toastify";
import { getPricing, stripeOder } from "../../services/pricing";
import { ERROR_MESSAGES } from "../../utils/constants";
import { useCheckLogin } from "../../utils/useCheckLogin";
import { items, listComment } from "./Data/items";
import {
  BlockContents,
  ItemCarousel,
  ItemCollase,
  WrapperPricing,
} from "./styles";

function Pricing() {
  const [listPricing, setListPricing] = useState([]);
  const [selectPrice, setSelectPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { handleCheckLogin } = useCheckLogin();
  const textRef = useRef<any>(null);

  const getListPricing = () => {
    getPricing()
      .then((res) => {
        setListPricing(res.data);
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR));
  };

  // hàm xử lý thanh toán credits
  const handleStripeOrder = (id: string) => {
    if (handleCheckLogin()) {
      return;
    }
    setIsLoading(true);
    setSelectPrice(id);
    const body = {
      priceId: id,
      redirectUrl: "http://localhost:3000",
    };
    stripeOder(body)
      .then((res) => {
        setIsLoading(false);
        window.location.assign(res.data?.url);
      })
      .catch((error) => setIsLoading(false));
  };

  const handlePrev = () => {
    (textRef.current as any).prev();
  };
  const handleNext = () => {
    (textRef.current as any).next();
  };

  useEffect(() => {
    getListPricing();
  }, []);

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
            {listPricing.map((item: any) => (
              <div
                className={`option-container ${
                  item?.name === "Basic" && "option2"
                }`}
              >
                <div className="detail-pricing">
                  {item.name === "Basic" && (
                    <div id="popular">
                      <div>MOST POPULAR</div>
                    </div>
                  )}
                  <div
                    className={`${
                      item?.name === "Lite"
                        ? "title-eco"
                        : item?.name == "Basic"
                        ? "title-basic"
                        : "title-pro"
                    }`}
                  >
                    {item?.name}
                  </div>
                  <div className="pricing">${item?.price}</div>
                  <div
                    className={`${
                      item?.name === "Lite"
                        ? "credits-eco"
                        : item?.name === "Basic"
                        ? "credits-basic"
                        : "credits-pro"
                    }`}
                  >
                    + {item?.credits} credits
                  </div>
                  <div className="content">
                    {item?.name === "Lite"
                      ? " Suitable for those who want to discover the potential of AI through our essential toolkit."
                      : item?.name === "Basic"
                      ? "Ideal for individual users who need to create 2-5 social media posts or 6-20 images using AI per day."
                      : "Perfect for professional users who require generating 6-15 social media posts or 12-60 images using AI per day."}
                  </div>
                </div>
                <Button
                  className={` ${
                    item?.name === "Lite"
                      ? "btn-eco"
                      : item?.name === "Basic"
                      ? "btn-basic"
                      : "btn-pro"
                  }`}
                  onClick={() => handleStripeOrder(item?.id)}
                  loading={selectPrice === item?.id && isLoading}
                >
                  Payment
                </Button>
                {item?.name === "Lite" ? (
                  <div className="list-benefit">
                    <div className="all-benefit">
                      All the basic features, include:
                    </div>
                    <div className="conten-benefit">
                      <img src={icCheckGreen} alt="" />
                      <div>No advertiseme</div>
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
                ) : item?.name === "Basic" ? (
                  <div className="list-benefit">
                    <div className="all-benefit">
                      All the basic features, include:
                    </div>
                    <div className="conten-benefit">
                      <img src={icCheckViolet} alt="" />
                      <div>No advertisement</div>
                    </div>
                    <div className="conten-benefit">
                      <img src={icCheckViolet} alt="" />
                      <div>
                        Long-form content length and medium resolution download
                        quality
                      </div>
                    </div>
                    <div className="conten-benefit">
                      <img src={icCheckViolet} alt="" />
                      <div>Access to premium art styles</div>
                    </div>
                    <div className="conten-benefit">
                      <img src={icCheckViolet} alt="" />
                      <div>Remove Watermark</div>
                    </div>
                  </div>
                ) : (
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
                )}
              </div>
            ))}
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
