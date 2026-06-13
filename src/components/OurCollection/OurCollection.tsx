import "./OurCollection.css";
import { COLLECTIONS } from "../../data/homeData";
import type { CollectionItem } from "../../types";

// ─── Single collection card ───────────────────────────────────────────────────
interface CollectionCardProps {
  item: CollectionItem;
}

function CollectionCard({ item }: CollectionCardProps) {
  return (
    <a href={item.href ?? "#"} className="vgk-collection-item">
      <div className="vgk-collection-img-wrap">
        <img src={item.image} alt={item.label} loading="lazy" />
      </div>
      <p className="vgk-collection-label">{item.label}</p>
    </a>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function OurCollection() {
  return (
    <section className="vgk-collection" aria-labelledby="collection-heading">
      <h2 id="collection-heading" className="vgk-section-title">
        Our Collection
      </h2>

      <div className="vgk-collection-grid">
        {COLLECTIONS.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
