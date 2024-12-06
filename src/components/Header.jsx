import { useState } from "react"
import AnnouncementBar from "./AnnouncementBar"
import HeaderIcons from "./HeaderIcons"
import Logo from "./Logo"
import NavList from "./NavList";
import Icon from "./Icon";

function Header() {
    const [barVisibility, setBarVisibility] = useState(true);

    const hideAnnouncementBar = () => {
        setBarVisibility(false);
    }

  return (
    <header className={`flex justify-between items-center ${barVisibility && 'mt-[32px]'} py-3 border-b`}>
        {barVisibility && <AnnouncementBar hideAnnouncementBar={hideAnnouncementBar} />}
        <Icon name="menu" className="lg:hidden" />
        <Logo />
        <div className="absolute lg:hidden w-full h-full start-0 top-0 bg-overlay z-0"></div>
        <NavList />
        <HeaderIcons />
    </header>
  )
}
export default Header