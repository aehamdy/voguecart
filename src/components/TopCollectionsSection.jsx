import SectionHeader from "./SectionHeader";
import TopCollectionCardsWrapper from "./TopCollectionCardsWrapper";

function TopCollectionsSection() {
  return (
    <section className="flex flex-col mb-vertical-spacing mx-horizontal-spacing">
      <SectionHeader
        heading="Top Collections"
        desc="Express your style with our standout collection—fashion meets sophistication."
      />
      <TopCollectionCardsWrapper />
    </section>
  );
}
export default TopCollectionsSection;
