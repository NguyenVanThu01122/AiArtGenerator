import { Button } from "antd";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import icArrow from "../../images/ic-arrow.png";
import icTabBar1 from "../../images/icTabBar1.png";
import icTabBar from "../../images/icon-tab-bar.png";
import imgProduct from "../../images/img-product.png";
import imgRemoval2 from "../../images/img-removal1 (2).png";
import imgRemoval1 from "../../images/img-removal1.png";
import {
  BoxContents,
  ItemCarousel,
  PageHome,
  SectionContents,
  WrapperHome,
} from "./styles";

function Home() {
  return (
    <PageHome>
      <Sidebar />
      <WrapperHome>
        <Header />
        <BoxContents>
          <ItemCarousel slidesToShow={1} dots={true} autoplay>
            <div className="introduce-item">
              <div className="contents">
                <div>EXCLUSIVE OFFER</div>
                <div>Essential AI Toolkit for Content Creators </div>
                <div>
                  We empower content creators like you to unleash their full
                  creative potential. Our essential AI Toolkit is designed to
                  revolutionize your content creation process and help you stand
                  out from the crowd.
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
                  Use code <span>EARLY100</span> at checkout for x2 credits.
                  Limited to the first 100 subscribers only. Unlock turbocharged
                  content creation with our essential AI toolkit.
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
                  Empower your creativity with Creatorhub: The essential AI
                  toolkit for content creators. Elevate your content to new
                  heights for all your business needs.
                </div>
              </div>
              <div className="list-products">
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
                <div className="detail-product">
                  <div className="item-img">
                    <img src={imgProduct} alt="" />
                  </div>
                  <div className="contents-products">
                    <div>AI Art Generator</div>
                    <div>
                      Transform photos into stunning artistic pieces or create
                      original artwork effortlessly.
                    </div>
                  </div>
                  <Button className="btn-try-now">
                    <span>Try Now</span>
                    <img src={icArrow} alt="" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="item-benefits">
              <div>
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div className="item-testimonials"></div>
          </SectionContents>
          <div>footer</div>
        </BoxContents>
      </WrapperHome>
    </PageHome>
  );
}
export default Home;
