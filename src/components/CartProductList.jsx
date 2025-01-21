/* eslint-disable react/prop-types */
function CartProductList({ cartList }) {
  return (
    <div className="flex flex-col gap-3">
      {cartList.map((product, index) => (
        <article
          key={index}
          className="flex items-start gap-3 pt-4 px-1 border-b"
        >
          <div className="w-[130px] rounded-medium overflow-hidden">
            <img src={product.images[0]} alt={product.title + " image"} />
          </div>
          <div className="flex flex-col justify-start items-start font-semibold text-sm text-secondary-dark">
            <h4>{product.title}</h4>
            <h4>${product.price}</h4>
          </div>
        </article>
      ))}
    </div>
  );
}
export default CartProductList;
