import { createSlice } from "@reduxjs/toolkit";
import { ListPricingType } from "../../../pages/Pricing/components/PricingOptions";
import { fetchPricing } from "./fetchPricing";

interface PricingState {
  listPricing: ListPricingType[];
  error: any;
  loading: boolean;
}

const initialState: PricingState = {
  listPricing: [],
  error: null,
  loading: false
};

export const getListPricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricing.pending, (state) => {
        state.listPricing = [];
        state.loading = true;
      })
      .addCase(fetchPricing.fulfilled, (state, action) => {
        state.listPricing = action.payload;
        state.loading = false;
      })
      .addCase(fetchPricing.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default getListPricingSlice.reducer;
