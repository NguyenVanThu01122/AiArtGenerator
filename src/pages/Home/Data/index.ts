import imgbenefits1 from "../../../images/Home/img-benefits1.png";
import imgbenefits2 from "../../../images/Home/img-benefits2.png";
import imgbenefits3 from "../../../images/Home/img-benefits3.png";
import imgbenefits4 from "../../../images/Home/img-benefits4.png";
import imgPeople1 from "../../../images/Home/img-people1.png";
import imgPeople2 from "../../../images/Home/img-people2.png";
import imgPeople3 from "../../../images/Home/img-people3.png";
import imgPeople4 from "../../../images/Home/img-people4.png";
import imgProduct1 from "../../../images/Home/img-product1.png";
import imgProduct2 from "../../../images/Home/img-product2.png";
import imgProduct3 from "../../../images/Home/img-product3.png";
import imgProduct4 from "../../../images/Home/img-product4.png";
import imgProduct5 from "../../../images/Home/img-product5.png";
import imgProduct6 from "../../../images/Home/img-product6.png";

export interface ListProductType {
  id?: number;
  image?: string;
  title?: string;
  text?: string;
  url?: string;
}
export interface ListBenefitsType {
  id?: number;
  image?: string;
  title?: string;
  text?: string;
}

export interface ListTestimonialsType {
  id: number;
  image: string;
  content: string;
  name: string;
  job: string;
}

export const listProduct = [
  {
    id: 1,
    image: imgProduct1,
    title: "AI Art Generator",
    text: "AI_ART_GENERATOR_TEXT_KEY",
    url: "/ai-art-generator",
  },
  {
    id: 2,
    image: imgProduct2,
    title: "AI_BACKGROUND_REMOVE_KEY",
    text: "AI_BACKGROUND_REMOVE_TEXT_KEY",
    url: "/ai-background-remove",
  },
  {
    id: 3,
    image: imgProduct3,
    title: "AI_PHOTO_ENHANCER_KEY",
    text: "AI_PHOTO_ENHANCER_TEXT_KEY",
    url: "/ai-photo-enhancer",
  },
  {
    id: 4,
    image: imgProduct4,
    title: "AI_SOCIAL_POSTS_GENERATOR_KEY",
    text: "AI_SOCIAL_POSTS_GENERATOR_TEXT_KEY",
  },
  {
    id: 5,
    image: imgProduct5,
    title: "AI_WRITING_ASSISTANT_KEY",
    text: "AI_WRITING_ASSISTANT_TEXT_KEY",
  },
  {
    id: 6,
    image: imgProduct6,
    title: "NEW_FEATURES_COMING_KEY",
    text: "NEW_FEATURES_COMING_TEXT_KEY",
  },
];

export const listBenefits = [
  {
    id: 1,
    image: imgbenefits1,
    title: "HIGHER_EFFICIENCY_KEY",
    text: "HIGHER_EFFICIENCY_TEXT_KEY",
  },
  {
    id: 2,
    image: imgbenefits2,
    title: "LIMITLESS_CREATIVE_KEY",
    text: "LIMITLESS_CREATIVE_TEXT_KEY",
  },
  {
    id: 3,
    image: imgbenefits3,
    title: "FASTER_PRODUCTIVITY_KEY",
    text: "FASTER_PRODUCTIVITY_TEXT_KEY",
  },
  {
    id: 4,
    image: imgbenefits4,
    title: "PROFESSIONAL_RESULTS_KEY",
    text: "PROFESSIONAL_RESULTS_TEXT_KEY",
  },
];

export const listTestimonials = [
  {
    id: 1,
    image: imgPeople1,
    content: "TESTIMONIAL_1_CONTENT",
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 2,
    image: imgPeople2,
    content: "TESTIMONIAL_2_CONTENT",
    name: "Sarah",
    job: "Content Creator",
  },
  {
    id: 3,
    image: imgPeople3,
    content: "TESTIMONIAL_3_CONTENT",
    name: "Michael",
    job: "Social Media Manager",
  },
  {
    id: 4,
    image: imgPeople4,
    content: "TESTIMONIAL_4_CONTENT",
    name: "Emily",
    job: "Social Media Manager",
  },
];
