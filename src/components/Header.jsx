/* eslint-disable react/prop-types */
import { useState } from "react";
import TopBar from "./TopBar";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import Nav from "./Nav";
import Icon from "./Icon";
import SearchPanel from "./SearchPanel";
import BlurredOverlay from "./BlurredOverlay";

function Header({ handleOpenCart }) {
  const [barVisibility, setBarVisibility] = useState(true);
  const [navVisibility, setNavVisibility] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const hideAnnouncementBar = () => {
    setBarVisibility(false);
  };

  const displaySideNav = () => {
    setNavVisibility(true);
  };

  const closeSideNav = () => {
    setNavVisibility(false);
  };

  const openSearchWindow = () => {
    setIsSearchOpen(true);
  };

  const closeSearchWindow = () => {
    setIsSearchOpen(false);
  };

  return (
    <header
      className={`flex justify-between items-center mx-horizontal-spacing  ${
        barVisibility && "mt-[32px]"
      } py-3 border-b`}
    >
      <BlurredOverlay triggerOnClick={closeSearchWindow} state={isSearchOpen} />
      <SearchPanel
        isSearchOpen={isSearchOpen}
        handleSearchClosing={closeSearchWindow}
      />
      {barVisibility && <TopBar hideAnnouncementBar={hideAnnouncementBar} />}
      <Icon
        name="menu"
        className="lg:hidden text-primary-dark"
        onClickFunction={displaySideNav}
        aria-expanded={navVisibility}
      />
      <Logo />
      {navVisibility && (
        <BlurredOverlay triggerOnClick={closeSideNav} state={navVisibility} />
      )}
      <Nav navVisibility={navVisibility} onClickFunction={closeSideNav} />
      <HeaderIcons
        handleOpenCart={handleOpenCart}
        handleSearchOpening={openSearchWindow}
      />
    </header>
  );
}
export default Header;
