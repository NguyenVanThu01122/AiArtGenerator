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

import { ItemCarousel, LastItem, SectionContents, WrapperHome } from "./styles";

function Home() {
  return (
    <WrapperHome>
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
            <div className="detail-product">
              <div className="item-img">
                <img src={imgProduct1} alt="" />
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
                <img src={imgProduct2} alt="" />
              </div>
              <div className="contents-products">
                <div>AI Background Changer</div>
                <div>
                  Effortlessly remove backgrounds from your images using our
                  AI-powered Background Remover.
                </div>
              </div>
              <Button className="btn-try-now">
                <span>Try Now</span>
                <img src={icArrow} alt="" />
              </Button>
            </div>
            <div className="detail-product">
              <div className="item-img">
                <img src={imgProduct3} alt="" />
              </div>
              <div className="contents-products">
                <div>AI Photo Enhancer</div>
                <div>
                  Enhance sharpness, clarity, colors, and reduce noise to give
                  your images a professional touch.
                </div>
              </div>
              <Button className="btn-try-now">
                <span>Try Now</span>
                <img src={icArrow} alt="" />
              </Button>
            </div>
            <div className="detail-product">
              <div className="item-img">
                <img src={imgProduct4} alt="" />
              </div>
              <div className="contents-products">
                <div>AI Social Posts Generator</div>
                <div>
                  Easily generate social media posts with spectacular by AI in
                  one minute.
                </div>
              </div>
              <Button className="btn-try-now">
                <span>Try Now</span>
                <img src={icArrow} alt="" />
              </Button>
            </div>
            <div className="detail-product">
              <div className="item-img">
                <img src={imgProduct5} alt="" />
              </div>
              <div className="contents-products">
                <div>AI Writing Assistant</div>
                <div>
                  AI Writing Assistant - your creative, fast, and flexible tool
                  to elevate every word.
                </div>
              </div>
              <Button className="btn-try-now">
                <span>Try Now</span>
                <img src={icArrow} alt="" />
              </Button>
            </div>
            <div className="detail-product">
              <div className="item-img">
                <img src={imgProduct6} alt="" />
              </div>
              <div className="contents-products">
                <div>New Features are coming!</div>
                <div>
                  Magical thing by our AI service is about to show up!Can’t wait
                  to suprise you guys.
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
          <div className="title-benefit">
            <div>BENEFITS</div>
            <div>Achieve more with less effort</div>
            <div>
              Simplify complex tasks, streamline workflows, and amplify your
              creativity without breaking a sweat.
            </div>
          </div>
          <div className="box-benefits">
            <div className="detail-benefit">
              <div className="empty-box"></div>
              <div className="item-img">
                <img src={imgbenefits1} alt="" />
              </div>
              <div className="contents">
                <div>Higher Efficiency</div>
                <div>Save time & effort with AI-powered editing.</div>
              </div>
            </div>
            <div className="detail-benefit">
              <div className="empty-box"></div>
              <div className="item-img">
                <img src={imgbenefits2} alt="" />
              </div>
              <div className="contents">
                <div>Limitless Creative</div>
                <div>Unleash creativity with inspiring content ideas.</div>
              </div>
            </div>
            <div className="detail-benefit">
              <div className="empty-box"></div>
              <div className="item-img">
                <img src={imgbenefits3} alt="" />
              </div>
              <div className="contents">
                <div>Faster Productivity</div>
                <div>Boost efficiency for engaging content creation.</div>
              </div>
            </div>
            <div className="detail-benefit">
              <div className="empty-box"></div>
              <div className="item-img">
                <img src={imgbenefits4} alt="" />
              </div>
              <div className="contents">
                <div>Professional Results</div>
                <div>
                  Achieve professional quality without extensive editing skills.
                </div>
              </div>
            </div>
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
            <div className="detail-item">
              <img className="img-user" src={imgPeople1} alt="" />
              <img className="img-quote" src={iconQuote} alt="" />
              <div className="contents">
                "The AI Social Post Generator is a game-changer! It saved me
                hours of work and boosted our engagement rates. Highly
                recommended!
              </div>
              <div className="information-user">
                <div>Danny</div>
                <div>Marketing Manager</div>
              </div>
            </div>
            <div className="detail-item">
              <img className="img-user" src={imgPeople2} alt="" />
              <img className="img-quote" src={iconQuote} alt="" />
              <div className="contents">
                "The AI Writing Assistant elevated my content quality.
                Correcting grammar and suggesting creative ideas, it's a
                must-have for creators!"
              </div>
              <div className="information-user">
                <div>Sarah</div>
                <div>Content Creator</div>
              </div>
            </div>
            <div className="detail-item">
              <img className="img-user" src={imgPeople3} alt="" />
              <img className="img-quote" src={iconQuote} alt="" />
              <div className="contents">
                "The AI Background Changer saved my time and enhanced product
                visuals. An essential tool for any entrepreneur!"
              </div>
              <div className="information-user">
                <div>Michael</div>
                <div>Entrepreneur</div>
              </div>
            </div>
            <div className="detail-item">
              <img className="img-user" src={imgPeople4} alt="" />
              <img className="img-quote" src={iconQuote} alt="" />
              <div className="contents">
                "The AI Background Changer saved my time and enhanced product
                visuals. An essential tool for any entrepreneur!"
              </div>
              <div className="information-user">
                <div>Emily</div>
                <div>Social Media Manager</div>
              </div>
            </div>
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
        <div className="footer">
          <div>© 2023 by VisionLab., Inc. All Rights Reserved.</div>
          <div className="group-text">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Policy</div>
          </div>
        </div>
      </LastItem>
    </WrapperHome>
  );
}
export default Home;
