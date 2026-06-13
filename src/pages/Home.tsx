import HeroSlider from "../components/HeroSlider/HeroSlider";
import OurCollection from "../components/OurCollection/OurCollection";
import RecommendedSelections from "../components/RecommendedSelections/RecommendedSelections";
import VideoBanner from "../components/VideoBanner/VideoBanner";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <OurCollection />
      <RecommendedSelections />
      <VideoBanner />
      <RecommendedSelections />
    </main>
  );
}
