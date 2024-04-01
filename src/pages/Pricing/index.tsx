import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import { fetchPricing } from "../../reduxToolkit/Thunks/GetPricing/fetchPricing";
import { ROUTES } from "../../routes/routes";
import { stripeOder } from "../../services/pricing";
import { ERROR_MESSAGES } from "../../utils/constants";
import { useCheckLogin } from "../../utils/useCheckLogin";
import CreatorHubSection from "./components/CreatorHubSection";
import PricingOptions from "./components/PricingOptions";
import FrequentlyAskedQuestions from "./components/Questions";
import { BoxContent, WrapperPricing } from "./styles";

function Pricing() {
  const [selectPrice, setSelectPrice] = useState("");
  const { handleCheckLogin } = useCheckLogin();
  const { listPricing } = useSelector(
    (state: RootState) => state.getListPricingSlice
  );
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

  useEffect(() => {
    dispatch(fetchPricing()); //lấy danh sách pricing
  }, []);

  // hàm xử lý thanh toán credits
  const handleStripeOrder = (id: string) => {
    if (handleCheckLogin()) {
      return;
    }
    setSelectPrice(id);
    const body = {
      priceId: id,
      redirectUrl: ROUTES.BASE_URL,
    };
    stripeOder(body)
      .then((res) => {
        window.location.assign(res.data?.url);
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR));
  };

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
