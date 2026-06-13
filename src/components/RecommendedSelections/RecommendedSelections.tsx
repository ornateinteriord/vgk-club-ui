import { useRef } from "react";
import "./RecommendedSelections.css";
import { RECOMMENDED_PRODUCTS } from "../../data/homeData";
import { ChevronLeftIcon, ChevronRightIcon, FireIcon } from "../../icons/Icons";
import { formatINR } from "../../utils";
import type { Product } from "../../types";

// ─── Constants ────────────────────────────────────────────────────────────────


// ─── ProductCard ──────────────────────────────────────────────────────────────
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { image, name, price, originalPrice, discountPercent, isRecommended } = product;

  return (
    <article className="vgk-rec-card" aria-label={name}>
      {/* Badges */}
      <div className="vgk-rec-badges">
        {isRecommended ? (
          <span className="vgk-badge-recommended">
            <FireIcon /> Recommended
          </span>
        ) : (
          <span className="vgk-badge-recommended-placeholder" />
        )}
        <span className="vgk-badge-discount">
          {discountPercent}%<br />OFF
        </span>
      </div>

      {/* Image */}
      <div className="vgk-rec-img-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>

      {/* Info */}
      <div className="vgk-rec-info">
        <p className="vgk-rec-name" title={name}>{name}</p>

        <div className="vgk-rec-prices">
          <span className="vgk-rec-price">{formatINR(price)}</span>
          <span className="vgk-rec-original">{formatINR(originalPrice)}</span>
        </div>

        <button className="vgk-rec-cart-btn" aria-label={`Add ${name} to cart`}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function RecommendedSelections() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (dir: -1 | 1) => {
    if (!sliderRef.current) return;
    // Get the actual rendered card width + gap to scroll by exactly 1 card
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 20 : 280;
    sliderRef.current.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
  };

  return (
    <section className="vgk-recommended" aria-labelledby="rec-heading">
      {/* Header */}
      <div className="vgk-recommended-header">
        <h2 id="rec-heading" className="vgk-section-title">
          Recommended Selections
        </h2>

        <nav className="vgk-rec-nav" aria-label="Slider navigation">
          <button
            className="vgk-rec-nav-btn"
            onClick={() => scrollSlider(-1)}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="vgk-rec-nav-btn"
            onClick={() => scrollSlider(1)}
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>
        </nav>
      </div>

      {/* Slider */}
      <div className="vgk-rec-slider" ref={sliderRef} role="list">
        {RECOMMENDED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
