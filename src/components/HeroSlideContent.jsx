/* eslint-disable react/prop-types */
import Button from "./Button";
import HeroSlideHeading from "./HeroSlideHeading";
import HeroSlideSubheading from "./HeroSlideSubheading";

function HeroSlideContent({ index, slides, currentSlide }) {
  return (
    <div className="absolute bottom-12 start-4 flex flex-col items-start gap-3 text-primary-light">
      <HeroSlideSubheading
        index={index}
        slides={slides}
        currentSlide={currentSlide}
      />
      <HeroSlideHeading
        index={index}
        slides={slides}
        currentSlide={currentSlide}
      />
      <Button
        value="Shop Collection"
        className="w-fit mt-4 lg:mt-6 py-3 md:py-3 lg:py-4 px-6 md:px-6 lg:px-9 font-semibold text-[15px] text-primary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark rounded-medium duration-medium"
      />
    </div>
  );
}
export default HeroSlideContent;
