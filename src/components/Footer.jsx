import FooterInfoSection from "./FooterInfoSection";
import FooterList from "./FooterList";
import FooterNewsletter from "./FooterNewsletter";
import SocialIcons from "./SocialIcons";

const lists = [
  {
    heading: "Our Company",
    items: [
      { title: "About Us", link: "/about" },
      { title: "Contact Us", link: "/contact" },
      { title: "Sale", link: "" },
      { title: "FAQ", link: "/help" },
      { title: "Products", link: "/products" },
    ],
  },
  {
    heading: "Shop Categories",
    items: [
      { title: "Hot Deals", link: "" },
      { title: "Best Seller", link: "" },
      { title: "Sale & Special Offers", link: "" },
      { title: "Popular Trends", link: "" },
    ],
  },
];

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-0 h-[96dvh] md:h-[90dvh] lg:h-[70dvh] mt-[60px] py-6 md:py-10 lg:py-16 px-horizontal-spacing text-secondary-light bg-secondary-dark rounded-small">
      <div className="flex flex-col gap-3 md:gap-5 lg:gap-10 ">
        <FooterInfoSection />
        <SocialIcons />
      </div>
      <div className="flex justify-around">
        {lists.map((list, index) => (
          <FooterList key={index} list={list} />
        ))}
      </div>
      <FooterNewsletter />
    </footer>
  );
}
export default Footer;
