/* eslint-disable react/prop-types */
function DiscountInput({ setDiscount, discount, handleOnApplyClick }) {
  const onInputChange = (e) => {
    setDiscount({ ...discount, codeValue: e.target.value.toUpperCase() });
  };

  const handleEnterKeyPress = (e) => {
    e.key === "Enter" && handleOnApplyClick();
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={onInputChange}
        onKeyUp={handleEnterKeyPress}
        value={discount.codeValue}
        className={`w-8/12 md:w-1/2 lg:w-3/5 py-3 px-2 font-medium placeholder:font-normal text-black placeholder:text-price-originalPrice bg-white border-2 ${
          discount.error && "border-red-400 focus:border-red-400"
        } focus:border-blue-500 outline-none rounded-md`}
      />
    </>
  );
}
export default DiscountInput;
