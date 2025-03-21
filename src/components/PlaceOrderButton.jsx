/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserDataContext";
import getNowDate from "../utils/getNowDate";
import ROUTES from "../config/routes";
import { useCheckout } from "../context/CheckoutContext";
import { useCart } from "../context/CartContext";
import {
  RESET_CART,
  SET_BUY_NOW_PRODUCT_PRICE,
  SET_COUPON_CODE_AVAILABILITY,
  SET_COUPON_ERROR_MESSAGE,
  SET_DISCOUNT_AMOUNT,
  SET_DISCOUNTED_SHIPPING_FEES,
  SET_DISCOUNTED_SUBTOTAL,
  SET_FREE_SHIPPING,
  SET_ORDER,
  SET_SUBTOTAL,
  SET_TOTAL,
  SET_USED_COUPON_CODE,
} from "../constants/actionTypes";
import { useState } from "react";
import LoaderCircular from "./LoaderCircular";

function PlaceOrderButton({ deliveryMethodValue }) {
  const { isUserDataValid } = useUserData();
  const { dispatchCart, cartList, buyNowProduct } = useCart();
  const {
    dispatchCheckout,
    subtotal,
    discountedSubtotal,
    shippingFees,
    total,
    discountedShippingFees,
  } = useCheckout();
  const isValid = isUserDataValid;
  const [isLoading, setIsLoading] = useState(false);
  const buttonValue = "Place Order";
  const defaultStyles = "w-full mt-4 py-3 font-semibold text-lg";
  const navigateTo = useNavigate();
  const navigationTime = 3000;

  const setOrder = () => {
    if (buyNowProduct) {
      dispatchCheckout({ type: SET_ORDER.items, payload: [buyNowProduct] });
    } else {
      dispatchCheckout({ type: SET_ORDER.items, payload: cartList });
    }
    dispatchCheckout({
      type: SET_ORDER.subtotal,
      payload: discountedSubtotal ? discountedSubtotal : subtotal,
    });
    dispatchCheckout({
      type: SET_ORDER.shipping,
      payload:
        discountedShippingFees === 0
          ? 0
          : discountedShippingFees > 0
          ? discountedShippingFees
          : shippingFees,
    });
    dispatchCheckout({ type: SET_ORDER.total, payload: total });
    dispatchCheckout({ type: SET_ORDER.date, payload: getNowDate() });
  };

  const resetCheckout = () => {
    dispatchCheckout({ type: SET_SUBTOTAL, payload: 0 });
    dispatchCheckout({ type: SET_DISCOUNTED_SUBTOTAL, payload: 0 });
    dispatchCheckout({ type: SET_TOTAL, payload: 0 });
    dispatchCheckout({ type: SET_BUY_NOW_PRODUCT_PRICE, payload: null });
    dispatchCheckout({ type: SET_FREE_SHIPPING, payload: false });
    dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: null });
    dispatchCheckout({ type: SET_COUPON_CODE_AVAILABILITY, payload: "" });
    dispatchCheckout({ type: SET_USED_COUPON_CODE, payload: "" });
    dispatchCheckout({ type: SET_DISCOUNT_AMOUNT, payload: 0 });
    dispatchCheckout({ type: SET_COUPON_ERROR_MESSAGE, payload: 0 });
  };

  const resetCart = () => {
    dispatchCart({ type: RESET_CART });
  };

  const setAndReset = () => {
    setOrder();
    resetCheckout();
    resetCart();
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setAndReset();
      setIsLoading(false);
      navigateTo(ROUTES.ORDER_CONFIRMATION);
    }, navigationTime);
  };

  return isValid && deliveryMethodValue.toLowerCase() === "ship" ? (
    <Link
      onClick={onClickHandler}
      className={`${defaultStyles} text-white bg-blue-500 ${
        isLoading
          ? ""
          : "hover:bg-blue-600 active:bg-blue-700 hover:scale-105 active:scale-95 hover:shadow-xl active:shadow-none"
      }  shadow-md transition-all duration-short cursor-pointer`}
    >
      {isLoading ? (
        <LoaderCircular
          loaderColor="border-white"
          text="Confirming your order... 📜"
        />
      ) : (
        buttonValue
      )}
    </Link>
  ) : (
    <button
      className={`${defaultStyles} text-[#707070] bg-cloud-gray cursor-not-allowed`}
      disabled
    >
      {buttonValue}
    </button>
  );
}
export default PlaceOrderButton;
