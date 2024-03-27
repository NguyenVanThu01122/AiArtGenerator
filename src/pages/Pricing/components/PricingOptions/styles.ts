import styled from "styled-components";

export const Header = styled.div`
  margin: 80px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Pricing = styled.div`
  color: #b69aff;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: 2px;
`;

export const PlansTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%; /* 48px */
`;

export const PlansDescription = styled.div`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const ListPricing = styled.div`
  width: 100%;
  display: flex !important;
  gap: 24px;
`;

export const DetailPricing = styled.div<{ namePricing: string }>`
  width: 100%;
  border-radius: 12px;
  background: #10101f;
  padding: 25px;
  padding-top: 35px;
  position: relative;
  & {
    border: ${(props) =>
      props.namePricing === "Basic" ? "2px solid rgb(151, 80, 230)" : "none"};
  }
  .btn-eco {
    width: 100%;
    margin-bottom: 28px;
    height: 35px;
    border-radius: 8px;
    background: #24c6b2 !important;
    color: white !important;
    font-weight: bold;
    border: none;
    font-size: 16px;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .btn-basic {
    width: 100%;
    margin-bottom: 28px;
    height: 35px;
    border-radius: 8px;
    background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
    color: white !important;
    font-weight: bold;
    border: none;
    font-size: 16px;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .btn-pro {
    width: 100%;
    margin-bottom: 28px;
    height: 35px;
    border-radius: 8px;
    background: #242c3d !important;
    color: white !important;
    font-weight: bold;
    border: none;
    font-size: 16px;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const ItemPopular = styled.div`
  position: absolute;
  border-top: 2px solid rgb(151, 80, 230);
  border-left: 2px solid rgb(151, 80, 230);
  border-right: 2px solid rgb(151, 80, 230);
  left: -1.5px;
  right: -1.6px;
  top: -25px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgb(16, 16, 31);
  padding: 16px;
`;

export const Popular = styled.div`
  border-radius: 24px;
  background: rgba(182, 154, 255, 0.2);
  box-shadow: 0px 4.23407px 7.40962px 0px rgba(30, 14, 49, 0.63);
  color: #b69aff;
  font-size: 12px;
  padding: 6px;
  font-weight: 700;
  line-height: 150%; //18px
`;

export const InfoPricing = styled.div`
  .title-eco {
    font-size: 18px;
    color: #00ffe0;
    font-weight: 600;
    line-height: 150%; /* 27px */
    margin-bottom: 8px;
  }
  .title-basic {
    color: #e250e5;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 150%; /* 27px */
  }
  .title-pro {
    color: #67acff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 150%; /* 27px */
  }

  .pricing {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 100%; /* 32px */
    span {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      line-height: 100%; /* 12px */
    }
  }
  .credits-eco {
    margin: 18px 0px;
    color: #02e1c8;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%; /* 16px */
  }
  .credits-basic {
    margin: 18px 0px;
    color: #e250e5;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%; /* 16px */
  }
  .credits-pro {
    margin: 18px 0px;
    color: #67acff;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%; /* 16px */
  }
  .content {
    height: 80px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 170%; /* 20.4px */
  }
`;

export const ListBenefit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TitleBenefit = styled.div`
  color: #fff;
  font-weight: 600;
  line-height: 100%; /* 16px */
`;

export const ContentBenefits = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 25.404px;
    height: 25.404px;
  }
`;

export const BenefitText = styled.div`
  color: #d2d2d2;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const WrapperPricing = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    ${Header} {
      margin: 20px 0px;
      ${PlansTitle} {
        font-size: 20px;
        font-weight: 600;
      }
      ${PlansDescription} {
        font-size: 12px;
      }
    }
    ${ListPricing} {
      flex-direction: column;
      gap: 20px;
      ${DetailPricing} {
        width: 100%;
      }
    }
  }
`;
