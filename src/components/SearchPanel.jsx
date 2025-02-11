/* eslint-disable react/prop-types */
import Modal from "../common/Modal";
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";

function SearchPanel({ isSearchOpen, handleSearchClosing }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal isOpen={isSearchOpen} onClose={handleSearchClosing}>
      <div
        onClick={handleClick}
        className={`fixed top-0 start-0 w-full h-[90%] flex flex-col gap-5 py-3 px-4 bg-primary-light rounded-b-small shadow-lg z-top transform
        ${isSearchOpen ? "translate-y-0" : "-translate-y-full"}
        transition-transform duration-medium ease-in-out`}
      >
        <Icon
          name="close"
          className="ml-auto text-content-medium-dark hover:scale-150"
          onClickFunction={handleSearchClosing}
        />
        <PanelTitle
          title="search our site"
          styles="text-2xl text-secondary-dark"
        />
        <form action="">
          <div className="group relative w-[90%] lg:w-[65%] mx-auto">
            <input
              type="search"
              name="search"
              id=""
              placeholder="I'm looking for..."
              className=" w-full py-3 px-8 font-medium text-sm text-content-medium-dark bg-transparent border border-[#ebebeb] focus:outline-none focus:border-2 focus:border-primary-border rounded-medium"
            />
            <Icon
              name="search"
              className="absolute top-1/2 -translate-y-1/2 end-4 w-5 h-full text-content-medium-dark bg-transparent group-hover:scale-125"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}
export default SearchPanel;
