// ─── Static Asset Imports ─────────────────────────────────────────────────────
import stationaryImg from "../assets/home/stationary.png";
import dryFruitsHomeImg from "../assets/home/dry-fruits-home.png";
import medicineImg from "../assets/home/medicine.png";
import dryFruitsColImg from "../assets/home/dryFruits.png";

import almonds from "../assets/dry-fruits-products/almonds.png";
import anjeer from "../assets/dry-fruits-products/anjeer.png";
import apricot from "../assets/dry-fruits-products/apricot.png";
import cashews from "../assets/dry-fruits-products/cashew.png";
import cereals from "../assets/dry-fruits-products/cereals.png";
import pistaSalted from "../assets/dry-fruits-products/pista-salted.png";
import pistaUnsalted from "../assets/dry-fruits-products/pista-unsalted.png";
import pumpkinSeeds from "../assets/dry-fruits-products/pumkin-seeds.png";
import resinsBlack from "../assets/dry-fruits-products/resins-black.png";
import resinsGreen from "../assets/dry-fruits-products/resins-green.png";
import spokenEnglish from "../assets/spoken-english.png"

// ─── Types ────────────────────────────────────────────────────────────────────
import type { HeroSlide, CollectionItem, Product, NavLink } from "../types";

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Dry Fruits", href: "/shop/dry-fruits" },
      { label: "Stationary", href: "/shop/stationary" },
      { label: "Medicine", href: "/shop/medicine" },
      { label: "Organic Food", href: "/shop/organic" },
    ],
  },
  {
    label: "More",
    href: "/",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Loans", href: "/loans" },
      { label: "Services", href: "/services" },
    ],
  },
];

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: stationaryImg,
    title: "Stationary Items",
    subtitle: "FROM NOTEBOOKS TO OFFICE SUPPLIES — CRAFTED FOR QUALITY, COMFORT, AND CREATIVITY.",
    cta: "BUY NOW",
  },
  {
    id: 2,
    image: dryFruitsHomeImg,
    title: "Dry Fruits & Nuts",
    subtitle: "ENJOY OUR SELECTION OF NUTRIENT-RICH DRY FRUITS—AN EVERYDAY SOURCE OF ENERGY, FLAVOR.",
    cta: "BUY NOW",
  },
];

// ─── Our Collection ───────────────────────────────────────────────────────────
export const COLLECTIONS: CollectionItem[] = [
  { id: 1, image: dryFruitsColImg, label: "Organic Food Items", href: "/collections/organic" },
  { id: 2, image: medicineImg, label: "Ayurvedic Food Supplements", href: "/collections/ayurvedic" },
];
const spokenEnglishDesc = "Improve your confidence in English speaking with our Spoken and Communication English training course Designed for students job seekers and professionals this course helps you master pronunciation daily conversation vocabulary fluency and public speaking skills Learn practical English communication for work study and travel with expert trainers Interactive lessons real life practice and personalized guidance boost your spoken English skills quickly"

// ─── Recommended Products ─────────────────────────────────────────────────────
export const RECOMMENDED_PRODUCTS: Product[] = [
  { id: 1, image: resinsGreen, name: "Resins Green", price: 360, originalPrice: 400, discountPercent: 10, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 2, image: resinsBlack, name: "Resins Black", price: 450, originalPrice: 500, discountPercent: 10, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 3, image: cereals, name: "Cereals", price: 900, originalPrice: 1000, discountPercent: 10, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 4, image: cashews, name: "Cashew", price: 1000, originalPrice: 1100, discountPercent: 9, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 5, image: almonds, name: "Almonds", price: 900, originalPrice: 1000, discountPercent: 10, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 6, image: anjeer, name: "Anjeer", price: 1250, originalPrice: 1300, discountPercent: 4, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 7, image: pumpkinSeeds, name: "Pumkin Seeds", price: 600, originalPrice: 650, discountPercent: 8, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 8, image: apricot, name: "Apricot", price: 600, originalPrice: 650, discountPercent: 7, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 9, image: pistaSalted, name: "Pista Salted", price: 1750, originalPrice: 1800, discountPercent: 3, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 10, image: pistaUnsalted, name: "Pista Unsalted", price: 1250, originalPrice: 1300, discountPercent: 4, isRecommended: true, category: "dry-fruits", description: "" },
  { id: 11, image: spokenEnglish, name: "Spoken English Kit", price: 3999, originalPrice: 5000, discountPercent: 20, isRecommended: true, category: "spoken-english", description: spokenEnglishDesc },
];

// ─── Auto-slide interval (ms) ─────────────────────────────────────────────────
export const HERO_INTERVAL_MS = 4000;
