import type { FAQItem } from "@/lib/types";

export type CarpetRoomPackage = {
  id: string;
  label: string;
  price: number;
};

export type CarpetExtraItem = {
  id: string;
  label: string;
  price: number;
  note?: string;
};

export type UpholsteryCatalogItem = {
  id: string;
  name: string;
  priceLabel: string;
  fixedPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  image: string;
  category: "chairs" | "sectionals" | "mattresses";
  note?: string;
};

export const carpetRoomPackages: CarpetRoomPackage[] = [
  { id: "1-room", label: "1 Room", price: 99 },
  { id: "2-rooms", label: "2 Rooms", price: 99 },
  { id: "3-rooms", label: "3 Rooms", price: 139 },
  { id: "4-rooms", label: "4 Rooms", price: 159 },
  { id: "5-rooms", label: "5 Rooms", price: 179 },
  { id: "6-rooms", label: "6 Rooms", price: 199 },
];

export const carpetExtraItems: CarpetExtraItem[] = [
  { id: "stairs-step", label: "1 Step (Stairs)", price: 4 },
  { id: "landing", label: "1 Landing", price: 10 },
  {
    id: "hallway",
    label: "Hallway / Walk-In Closet",
    price: 19,
    note: "Carpet hallway up to 10 feet long.",
  },
];

export const upholsteryCatalog: UpholsteryCatalogItem[] = [
  {
    id: "office-chair",
    name: "Office Chair",
    priceLabel: "$20",
    fixedPrice: 20,
    image: "/service-items/office-chair.svg",
    category: "chairs",
  },
  {
    id: "ottoman",
    name: "Ottoman",
    priceLabel: "$30",
    fixedPrice: 30,
    image: "/service-items/ottoman.svg",
    category: "chairs",
  },
  {
    id: "armchair",
    name: "Armchair",
    priceLabel: "$49",
    fixedPrice: 49,
    image: "/service-items/armchair.svg",
    category: "chairs",
  },
  {
    id: "loveseat",
    name: "Loveseat (2-Seater)",
    priceLabel: "$109",
    fixedPrice: 109,
    image: "/service-items/loveseat.svg",
    category: "chairs",
  },
  {
    id: "sofa",
    name: "Sofa (3-Seater)",
    priceLabel: "$119",
    fixedPrice: 119,
    image: "/service-items/sofa.svg",
    category: "chairs",
  },
  {
    id: "l-shape-3",
    name: "L-Shape Sectional (3 Seats)",
    priceLabel: "$129",
    fixedPrice: 129,
    image: "/service-items/l-shape-3.svg",
    category: "sectionals",
  },
  {
    id: "l-shape-4",
    name: "L-Shape Sectional (4 Seats)",
    priceLabel: "$139",
    fixedPrice: 139,
    image: "/service-items/l-shape-4.svg",
    category: "sectionals",
  },
  {
    id: "l-shape-5",
    name: "L-Shape Sectional (5 Seats)",
    priceLabel: "$189",
    fixedPrice: 189,
    image: "/service-items/l-shape-5.svg",
    category: "sectionals",
  },
  {
    id: "u-shape",
    name: "U-Shape Sectional",
    priceLabel: "$199-$249",
    minPrice: 199,
    maxPrice: 249,
    image: "/service-items/u-shape-sectional.svg",
    category: "sectionals",
    note: "Final price depends on overall size and cushion count.",
  },
  {
    id: "mattress-twin",
    name: "Mattress - Twin",
    priceLabel: "$69",
    fixedPrice: 69,
    image: "/service-items/mattress-twin.svg",
    category: "mattresses",
  },
  {
    id: "mattress-full",
    name: "Mattress - Full",
    priceLabel: "$79",
    fixedPrice: 79,
    image: "/service-items/mattress-full.svg",
    category: "mattresses",
  },
  {
    id: "mattress-queen",
    name: "Mattress - Queen",
    priceLabel: "$89",
    fixedPrice: 89,
    image: "/service-items/mattress-queen.svg",
    category: "mattresses",
  },
  {
    id: "mattress-king",
    name: "Mattress - King",
    priceLabel: "$99",
    fixedPrice: 99,
    image: "/service-items/mattress-king.svg",
    category: "mattresses",
  },
];

export const carpetCleaningFaqs: FAQItem[] = [
  {
    question: "What is included in carpet cleaning?",
    answer:
      "Standard carpet cleaning usually includes pre-inspection, treatment for traffic areas and common spots, fiber cleaning, and a final walk-through so you know what improved and what may still need extra attention.",
  },
  {
    question: "How long does carpet take to dry?",
    answer:
      "Most jobs dry within a few hours, but exact timing depends on airflow, carpet thickness, humidity, and how much restorative work the room needed.",
  },
  {
    question: "When should deep carpet cleaning be added?",
    answer:
      "Deep cleaning makes sense when the carpet has dark traffic lanes, embedded soil, repeat pet areas, or has gone a long time without professional service. It usually takes more time and more aggressive pre-treatment than a routine refresh.",
  },
  {
    question: "Do you move furniture?",
    answer:
      "Light, movable furniture is usually workable, but large electronics, fragile items, overloaded shelving, and specialty furniture should be cleared or discussed ahead of time so the scope is realistic.",
  },
  {
    question: "Can you handle move-out carpet cleaning?",
    answer:
      "Yes. Move-out carpet cleaning is one of the most common requests, especially when a home needs quick scheduling before inspection, staging, or a turnover.",
  },
];

export const upholsteryCleaningFaqs: FAQItem[] = [
  {
    question: "Do the upholstery prices include spot treatment?",
    answer:
      "Routine spot treatment is included where appropriate, but unusually heavy staining, delicate fabrics, or severe pet contamination may require a more specific recommendation after review.",
  },
  {
    question: "Can multiple furniture pieces be cleaned in one appointment?",
    answer:
      "Yes. Many customers combine sofas, dining chairs, ottomans, accent chairs, and even mattresses in one visit so the quote and scheduling stay simple.",
  },
  {
    question: "How do I know if my sectional is an L-shape or U-shape?",
    answer:
      "If the seating turns in one direction, it is usually an L-shape. If it wraps around on both sides, it is usually a U-shape. If you are not sure, send a photo by text and VEYNOR can confirm it before booking.",
  },
  {
    question: "Do you clean mattresses too?",
    answer:
      "Yes. Mattress cleaning can be added with upholstery service when requested ahead of time, especially for guest rooms, move-in refreshes, and homes dealing with spots or general buildup.",
  },
  {
    question: "Will upholstery cleaning remove every stain?",
    answer:
      "Not every stain can be removed completely because some spills permanently alter the fabric or dye. The goal is to improve the appearance as much as the fabric safely allows and be honest about what remains.",
  },
];

export const referralProgramRules = [
  "Referral rewards are based on the final completed job total: jobs up to $399 earn $20, and jobs of $400 or more earn $50.",
  "The referral should be submitted before the job is completed so VEYNOR can match the customer to the person who referred them.",
  "The referred customer should be a new customer, not an existing open quote or past booking already in progress.",
  "Payouts are issued 7 to 14 days after the completed job.",
  "One referral reward is paid per completed referred job unless VEYNOR confirms something different in writing.",
];

export const referralProgramFaqs: FAQItem[] = [
  {
    question: "When does the referral reward qualify?",
    answer:
      "The referral reward qualifies after the referred customer completes a new job and VEYNOR confirms the referral details match the completed booking.",
  },
  {
    question: "How much is the referral reward?",
    answer:
      "Completed jobs with a final total up to $399 earn a $20 referral reward. Completed jobs with a final total of $400 or more earn a $50 referral reward.",
  },
  {
    question: "When are referral payouts sent?",
    answer:
      "Referral payouts are typically issued 7 to 14 days after the referred job is completed so there is time to confirm the job and match the referral correctly.",
  },
  {
    question: "Can I refer someone who already received a quote?",
    answer:
      "Usually no. The program is intended for new customers who are not already tied to an existing quote, active booking, or past referral record.",
  },
  {
    question: "What information should I include in the referral form?",
    answer:
      "Include your contact information, the referred customer's contact information, their city, and a short note about the cleaning service they are likely to need.",
  },
];
