import { createSlice } from "@reduxjs/toolkit";
import { ListPricingType } from "../../../pages/Pricing/components/PricingOptions";
import { fetchPricing } from "./fetchPricing";

interface PricingState {
  listPricing: ListPricingType[];
  error: any;
}

const initialState: PricingState = {
  listPricing: [],
  error: null,
};

export const getListPricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricing.pending, (state) => {
        state.listPricing = [];
      })
      .addCase(fetchPricing.fulfilled, (state, action) => {
        state.listPricing = action.payload;
      })
      .addCase(fetchPricing.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default getListPricingSlice.reducer;
