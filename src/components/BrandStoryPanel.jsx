import { useState, useRef, useEffect } from "react";
import SectionHeading from "./SectionHeading";

function BrandStoryPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const toggleContent = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight;
      const partialHeight = fullHeight * 0.32;
      setContentHeight(isExpanded ? `${fullHeight}px` : `${partialHeight}px`);
    }
  }, [isExpanded]);

  return (
    <div className="w-4/5 md:w-3/5 mt-12 mb-20 mx-auto">
      <SectionHeading heading="Hello!" />
      <SectionHeading heading="Everyday for Women's" />
      <div
        className="relative mt-4 overflow-hidden transition-all duration-500"
        style={{ height: contentHeight }}
      >
        <div
          ref={contentRef}
          className="flex flex-col gap-4 text-content-medium-dark"
        >
          <p>
            Discover a collection of timeless wardrobe essentials, seamlessly
            transitioning from work to weekend. Inspired by travel, our
            America-designed pieces prioritize sustainability with natural
            fibers and mindful practices. Explore a range of tops, bottoms,
            sweaters, and accessories in versatile styles, featuring
            high-quality materials like cotton, linen, tencel, and wool.
          </p>
          <p>
            Each piece is crafted with meticulous attention to detail, ensuring
            a perfect blend of comfort and elegance. Our designs emphasize clean
            lines and sophisticated silhouettes, making them suitable for any
            occasion. Whether you&apos;re dressing up for a night out or keeping
            it casual, our collection offers endless styling possibilities.
            Embrace the essence of effortless chic with our thoughtfully
            designed wardrobe staples, and experience the harmony of style,
            quality, and sustainability. Join us in redefining modern fashion
            with a conscience.
          </p>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      <button
        type="button"
        onClick={toggleContent}
        className="mt-4 font-bold text-secondary-dark underline"
      >
        {isExpanded ? "Hide less Information" : "See all Information"}
      </button>
    </div>
  );
}

export default BrandStoryPanel;
