/* eslint-disable react/prop-types */
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import Icon from "./Icon";

function ProductCardQuickButtons({
  productId,
  handleRemoveFromWishlist,
  removeFromWishlist,
}) {
  const quickButtons = [
    { icon: "wishlist" },
    { icon: "eye" },
    { icon: "cart" },
  ];

  return (
    <>
      <div className="absolute top-5 end-5 lg:-end-2 group-hover:end-5 flex flex-col gap-4 lg:opacity-0 lg:group-hover:opacity-100 group-hover:z-50 transition-all duration-medium">
        <div className="relative flex flex-col gap-3">
          {quickButtons.map((button, index) =>
            button.icon === "wishlist" ? (
              removeFromWishlist ? (
                <button
                  onClick={() => handleRemoveFromWishlist(productId)}
                  className="group relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4 bg-slate-50 text-secondary-dark hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md"
                >
                  <Icon name="close" size="18" className="" />
                </button>
              ) : (
                <AddToWishlistButton productId={productId} />
              )
            ) : (
              <button
                key={index}
                className={`group relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4
                        bg-slate-50 text-secondary-dark hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md cursor-pointer duration-medium`}
              >
                <Icon name={button.icon} size="18" />
              </button>
            )
          )}
        </div>
      </div>

      <Button
        value="Add to Cart"
        className="hidden lg:block absolute bottom-[20%] group-hover:bottom-[23%] start-1/2 -translate-x-1/2 w-3/5 py-2 text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium opacity-0 group-hover:opacity-100 group-hover:z-50 transition-all ease-in-out duration-medium"
      />
    </>
  );
}
export default ProductCardQuickButtons;
