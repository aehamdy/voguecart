/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTruckFast } from "react-icons/fa6";
import { FiCheck, FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { PiPackage, PiUser } from "react-icons/pi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const iconMap = {
  menu: RxHamburgerMenu,
  close: MdClose,
  search: FiSearch,
  user: PiUser,
  wishlist: FiHeart,
  cart: FiShoppingBag,
  rightArrow: RiArrowRightSLine,
  leftArrow: RiArrowLeftSLine,
  filledStar: TiStarFullOutline,
  outlineStar: TiStarOutline,
  check: FiCheck,
  plus: AiOutlinePlus,
  minus: AiOutlineMinus,
  deliveryTruck: FaTruckFast,
  package: PiPackage,
  eye: IoEyeOutline,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  pinterest: FaPinterestP,
};

function Icon({ name, size = 21, className = "", onClickFunction }) {
  const IconComponent = iconMap[name];
  const defaultClasses = "cursor-pointer duration-medium";

  return (
    <IconComponent
      size={size}
      className={`${defaultClasses} ${className}`}
      onClick={onClickFunction}
    />
  );
}
export default Icon;
