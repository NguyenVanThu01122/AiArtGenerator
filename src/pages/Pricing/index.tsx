import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

import { toast } from "react-toastify";
import { getPricing, stripeOder } from "../../services/pricing";
import { ERROR_MESSAGES } from "../../utils/constants";
import { useCheckLogin } from "../../utils/useCheckLogin";
import CreatorHubSection from "./components/CreatorHubSection";
import PricingOptions from "./components/PricingOptions";
import FrequentlyAskedQuestions from "./components/Questions";
import { BoxContent, WrapperPricing } from "./styles";

function Pricing() {
  const [listPricing, setListPricing] = useState([]);
  const [selectPrice, setSelectPrice] = useState("");
  const { handleCheckLogin } = useCheckLogin();

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
    setSelectPrice(id);
    const body = {
      priceId: id,
      redirectUrl: "http://localhost:3000",
    };
    stripeOder(body)
      .then((res) => {
        window.location.assign(res.data?.url);
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR));
  };

  useEffect(() => {
    getListPricing();
  }, []);

  return (
    <WrapperPricing>
      <BoxContent>
        <PricingOptions
          listPricing={listPricing}
          selectPrice={selectPrice}
          handleStripeOrder={handleStripeOrder}
        />
        <CreatorHubSection />

        {/* List of questions */}
        <FrequentlyAskedQuestions />
      </BoxContent>
      <Footer />
    </WrapperPricing>
  );
}
export default Pricing;
