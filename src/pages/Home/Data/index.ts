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
    text: "Transform photos into stunning artistic pieces or create original artwork effortlessly.",
    url: "/ai-art-generator",
  },
  {
    id: 2,
    image: imgProduct2,
    title: "AI Background Remove",
    text: "Effortlessly remove backgrounds from your images using our AI-powered Background Remover.",
    url: "/ai-background-remove",
  },
  {
    id: 3,
    image: imgProduct3,
    title: "AI Photo Enhancer",
    text: " Enhance sharpness, clarity, colors, and reduce noise to give your images a professional touch.",
    url: "/ai-photo-enhancer",
  },
  {
    id: 4,
    image: imgProduct4,
    title: "AI Social Posts Generator",
    text: "Easily generate social media posts with spectacular by AI in one minute.",
  },
  {
    id: 5,
    image: imgProduct5,
    title: "AI Writing Assistant",
    text: " AI Writing Assistant - your creative, fast, and flexible tool to elevate every word.",
  },
  {
    id: 6,
    image: imgProduct6,
    title: "New Features are coming!",
    text: "Magical thing by our AI service is about to show up!Can’t wait to suprise you guys.",
  },
];
export const listBenefits = [
  {
    id: 1,
    image: imgbenefits1,
    title: "Higher Efficiency",
    text: "Save time & effort with AI-powered editing.",
  },
  {
    id: 2,
    image: imgbenefits2,
    title: "Limitless Creative",
    text: "Unleash creativity with inspiring content ideas.",
  },
  {
    id: 3,
    image: imgbenefits3,
    title: "Faster Productivity",
    text: "Boost efficiency for engaging content creation.",
  },
  {
    id: 4,
    image: imgbenefits4,
    title: "Professional Results",
    text: " Achieve professional quality without extensive editing skills.",
  },
];
export const listTestimonials = [
  {
    id: 1,
    image: imgPeople1,
    content:
      '"The AI Social Post Generator is a game-changer! It saved me hours of work and boosted our engagement rates. Highly recommended!"',
    name: "Danny",
    job: "Marketing Manager",
  },
  {
    id: 2,
    image: imgPeople2,
    content:
      '"The AI Writing Assistant elevated my content quality. Correcting grammar and suggesting creative ideas, it`s a must-have for creators!"',
    name: "Sarah",
    job: "Content Creator",
  },
  {
    id: 3,
    image: imgPeople3,
    content:
      '"The AI Background Changer saved my time and enhanced product visuals. An essential tool for any entrepreneur!"',
    name: "Michael",
    job: "Social Media Manager",
  },
  {
    id: 4,
    image: imgPeople4,
    content:
      '"The AI Background Changer saved my time and enhanced product visuals. An essential tool for any entrepreneur!"',
    name: "Emily",
    job: "Social Media Manager",
  },
];
