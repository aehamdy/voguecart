/* eslint-disable react/prop-types */
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";
import NavList from "./NavList";
import Modal from "../common/Modal";

function Nav({ navVisibility, closeSideNav }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* For small and medium screens */}
      <Modal isOpen={navVisibility} onClose={closeSideNav}>
        <nav
          onClick={handleClick}
          className={`lg:hidden fixed top-0 left-0 flex-col items-start w-2/3 h-full bg-primary-light z-top rounded-r-small overflow-hidden transition-all duration-[350ms] ease-in-out transform ${
            navVisibility ? "translate-x-0" : "-translate-x-full"
          }`}
          role="menu"
          aria-expanded={navVisibility}
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4 px-3 bg-primary-red">
              <PanelTitle title="menu" styles="text-primary-light" />
              <Icon
                name="close"
                className="text-primary-light hover:scale-150"
                onClickFunction={closeSideNav}
              />
            </div>

            <NavList navVisibility={navVisibility} />
          </div>
        </nav>
      </Modal>

      {/* For large screens */}
      <nav role="menu" className="hidden lg:block">
        <NavList />
      </nav>
    </>
  );
}

export default Nav;
