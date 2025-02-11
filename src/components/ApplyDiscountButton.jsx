/* eslint-disable react/prop-types */
function ApplyDiscountButton({ discount, handleOnApplyClick }) {
  const onButtonClick = () => {
    handleOnApplyClick();
  };

  return (
    <button
      onClick={() => onButtonClick()}
      disabled={!discount.codeValue}
      className={`px-4 ${
        discount.codeValue
          ? "font-medium text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none duration-short"
          : "text-content-light-dark bg-neutral-200"
      } rounded-md`}
    >
      Apply
    </button>
  );
}
export default ApplyDiscountButton;
