import "./VideoBanner.css";
import dryFruitsVideo from "../../assets/video/dry-fruits.mp4";

export default function VideoBanner() {
  return (
    <section className="vgk-video-banner" aria-label="Promotional Video">
      <div className="vgk-video-container">
        <video 
          src={dryFruitsVideo}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="vgk-promo-video"
        />
      </div>
    </section>
  );
}
