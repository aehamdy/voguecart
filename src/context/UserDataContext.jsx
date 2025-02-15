/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import {
  SET_ADDRESS,
  SET_APARTMENT,
  SET_CITY,
  SET_COUNTRY,
  SET_DELIVERY_METHOD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_ZIP_CODE,
} from "../constants/actionTypes";

const UserDataContext = createContext();

const initialState = {
  email: "",
  deliveryMethod: "",
  country: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  zipCode: "",
  locationFees: null,
  isCouponUsed: false,
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_DELIVERY_METHOD:
      return { ...state, deliveryMethod: action.payload };

    case SET_COUNTRY:
      return { ...state, country: action.payload };

    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };

    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_APARTMENT:
      return { ...state, apartment: action.payload };

    case SET_CITY:
      return { ...state, city: action.payload };

    case SET_ZIP_CODE:
      return { ...state, zipCode: action.payload };

    default:
      return state;
  }
};

export const UserDataProvider = ({ children }) => {
  const [userDataState, dispatchUserData] = useReducer(
    userDataReducer,
    initialState
  );
  return (
    <UserDataContext.Provider
      value={{
        dispatchUserData,
        emailValue: userDataState.email,
        deliveryMethodValue: userDataState.deliveryMethod,
        firstNameValue: userDataState.firstName,
        lastNameValue: userDataState.lastName,
        addressValue: userDataState.address,
        apartmentValue: userDataState.apartment,
        cityValue: userDataState.city,
        zipCodeValue: userDataState.zipCode,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
