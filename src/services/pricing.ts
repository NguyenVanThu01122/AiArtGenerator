import { privateAxios } from "./configs/axios";

export interface stripeOderType {
  priceId: string;
  redirectUrl: string;
}
export const getPricing = () => privateAxios.get("/stripe/prices");

export const stripeOder = (body: stripeOderType) =>
  privateAxios.post("/stripe/order", body);