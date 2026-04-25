import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import heroBottle from "@/assets/hero-bottle.jpg";

export type Category = "whiskey" | "gin" | "rum" | "tequila" | "cognac" | "vodka";

export type Product = {
  id: string;
  n: string;
  name: string;
  category: Category;
  type: string;
  age: string;
  origin: string;
  price: number;
  abv: string;
  img: string;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "whiskey", label: "Whiskey" },
  { id: "gin", label: "Gin" },
  { id: "rum", label: "Rum" },
  { id: "tequila", label: "Tequila" },
  { id: "cognac", label: "Cognac" },
  { id: "vodka", label: "Vodka" },
];

export const PRODUCTS: Product[] = [
  { id: "black-reserve", n: "01", name: "Black Reserve", category: "whiskey", type: "Single Malt Whiskey", age: "21 Years", origin: "Islay, Scotland", price: 18400, abv: "46%", img: p1 },
  { id: "botanica-noir", n: "02", name: "Botanica Noir", category: "gin", type: "Hand-Crafted Gin", age: "Small Batch", origin: "London, England", price: 4200, abv: "42%", img: p2 },
  { id: "ember-cask", n: "03", name: "Ember Cask", category: "rum", type: "Caribbean Dark Rum", age: "15 Years", origin: "Barbados", price: 7800, abv: "43%", img: p3 },
  { id: "agave-sol", n: "04", name: "Agave Sol", category: "tequila", type: "Añejo Tequila", age: "5 Years", origin: "Jalisco, Mexico", price: 5600, abv: "40%", img: p4 },
  { id: "maison-116", n: "05", name: "Maison 116", category: "cognac", type: "XO Cognac", age: "30 Years", origin: "Cognac, France", price: 24000, abv: "40%", img: p5 },
  { id: "polaris-13", n: "06", name: "Polaris 13", category: "vodka", type: "Glacier-Filtered Vodka", age: "Triple Distilled", origin: "Reykjavík, Iceland", price: 2800, abv: "40%", img: p6 },
  { id: "midnight-21", n: "07", name: "Midnight Oak", category: "whiskey", type: "Bourbon", age: "12 Years", origin: "Kentucky, USA", price: 6400, abv: "47%", img: heroBottle },
  { id: "smoke-iron", n: "08", name: "Smoke & Iron", category: "whiskey", type: "Peated Single Malt", age: "18 Years", origin: "Highlands", price: 12800, abv: "48%", img: p1 },
  { id: "wild-juniper", n: "09", name: "Wild Juniper", category: "gin", type: "Navy Strength Gin", age: "Small Batch", origin: "Plymouth", price: 3400, abv: "57%", img: p2 },
];

export const PRICE_RANGES = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under-5k", label: "< ฿5,000", min: 0, max: 5000 },
  { id: "5k-10k", label: "฿5K – ฿10K", min: 5000, max: 10000 },
  { id: "10k-20k", label: "฿10K – ฿20K", min: 10000, max: 20000 },
  { id: "over-20k", label: "> ฿20,000", min: 20000, max: Infinity },
] as const;

export type PriceRangeId = (typeof PRICE_RANGES)[number]["id"];
