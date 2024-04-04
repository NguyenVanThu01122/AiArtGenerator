import CircularProgress from "@mui/material/CircularProgress";
import ImageGeneral from "../../../../components/Ui/image";
import { LoadingButtonGeneral } from "../../../../components/Ui/loadingButton";
import icCheckBlue from "../../../../images/Pricing/ic-check-blue.png";
import icCheckGreen from "../../../../images/Pricing/ic-check-green.png";
import icCheckViolet from "../../../../images/Pricing/ic-check-violet.png";
import {
  BenefitText,
  ContentBenefits,
  DetailPricing,
  Header,
  InfoPricing,
  ItemPopular,
  ListBenefit,
  ListPricing,
  PlansDescription,
  PlansTitle,
  Popular,
  Pricing,
  TitleBenefit,
  WrapperPricing,
} from "./styles";
interface PackageInfoType {
  [key: string]: {
    icon: string;
    benefits: string[];
  };
}
export interface ListPricingType {
  id: string;
  name: string;
  price: number;
  credits: number;
}
interface PricingOptionsProps {
  listPricing: ListPricingType[];
  selectPrice: string;
  handleStripeOrder: (id: string) => void;
}
interface ClassNameType {
  [key: string]: string;
}

export default function PricingOptions({
  listPricing,
  selectPrice,
  handleStripeOrder,
}: PricingOptionsProps) {
  const getButtonClassName = (name: string) => {
    const classNames: ClassNameType = {
      Lite: "btn-eco",
      Basic: "btn-basic",
      default: "btn-pro",
    };
    return classNames[name] || classNames.default;
  };

  const getTitleClassName = (name: string) => {
    const classNames: ClassNameType = {
      Lite: "title-eco",
      Basic: "title-basic",
      default: "title-pro",
    };
    return classNames[name] || classNames.default;
  };

  const getCreditsClassName = (id: string) => {
    const classNames: ClassNameType = {
      Lite: "credits-eco",
      Basic: "credits-basic",
      default: "credits-pro",
    };
    return classNames[id] || classNames.default;
  };

  const getDescription = (name: string) => {
    switch (name) {
      case "Lite":
        return " Suitable for those who want to discover the potential of AI through our essential toolkit.";
      case "Basic":
        return "Ideal for individual users who need to create 2-5 social media posts or 6-20 images using AI per day.";
      default:
        return "Perfect for professional users who require generating 6-15 social media posts or 12-60 images using AI per day.";
    }
  };

  //  chứa thông tin chung cho các loại gói
  const packageInfo: PackageInfoType = {
    Lite: {
      icon: icCheckGreen,
      benefits: [
        "No advertisement",
        "Long-form content length and medium resolution download quality",
        "Access to premium art styles",
        "Remove Watermark",
      ],
    },
    Basic: {
      icon: icCheckViolet,
      benefits: [
        "No advertisement",
        "Long-form content length and medium resolution download quality",
        "Access to premium art styles",
        "Remove Watermark",
      ],
    },
    Premium: {
      icon: icCheckBlue,
      benefits: [
        "Brand management",
        "Unlimited content length and high resolution download quality",
        "Priority support",
        "Beta access to new feature",
      ],
    },
  };

  return (
    <WrapperPricing>
      <Header>
        <Pricing>PRICING</Pricing>
        <PlansTitle>
          Explore Flexible Pricing Plans for AI-Powered Creativity
        </PlansTitle>
        <PlansDescription>
          Choose your suitable plans and access a world of AI-powered tools
          designed to elevate your content creation.
        </PlansDescription>
      </Header>

      <ListPricing>
        {listPricing.map((item: ListPricingType) => (
          <DetailPricing
            sx={{
              bgcolor: "common.background",
            }}
            namePricing={item.name}
          >
            <InfoPricing>
              {item.name === "Basic" && (
                <ItemPopular
                  sx={{
                    bgcolor: "common.background",
                  }}
                >
                  <Popular>MOST POPULAR</Popular>
                </ItemPopular>
              )}
              <div className={getTitleClassName(item?.name)}>{item?.name}</div>
              <div className="pricing">${item?.price}</div>
              <div className={getCreditsClassName(item?.id)}>
                + {item?.credits} credits
              </div>
              <div className="content">{getDescription(item?.name)}</div>
            </InfoPricing>
            <LoadingButtonGeneral
              className={getButtonClassName(item?.name)}
              onClick={() => handleStripeOrder(item?.id)}
              disabled={selectPrice === item?.id}
              startIcon={
                selectPrice === item?.id && (
                  <CircularProgress size={20} color="inherit" />
                )
              }
            >
              Payment
            </LoadingButtonGeneral>
            {Object.keys(packageInfo).map(
              (packageName: string) =>
                item.name === packageName && (
                  <ListBenefit key={packageName}>
                    <TitleBenefit>
                      {packageName === "Premium"
                        ? "All the greatness of Plus, and:"
                        : "All the basic features, include:"}
                    </TitleBenefit>
                    {packageInfo[packageName].benefits.map(
                      (benefit: string, index: number) => (
                        <ContentBenefits key={index}>
                          <ImageGeneral src={packageInfo[packageName].icon} />
                          <BenefitText>{benefit}</BenefitText>
                        </ContentBenefits>
                      )
                    )}
                  </ListBenefit>
                )
            )}
          </DetailPricing>
        ))}
      </ListPricing>
    </WrapperPricing>
  );
}
