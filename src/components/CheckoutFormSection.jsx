/* eslint-disable react/prop-types */
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import PaymentStatus from "./PaymentStatus";
import StoreLocations from "./StoreLocations";
import FormInput from "./FormInput";
import OrderDetailsForm from "./OrderDetailsForm";
import { useUserData } from "../context/UserDataContext";
import PlaceOrderButton from "./PlaceOrderButton";

function CheckoutFormSection({ contact, setContact }) {
  const { emailValue, deliveryMethodValue } = useUserData();

  return (
    <div className="col-span-6 order-2 lg:order-none p-4 lg:px-8">
      <div className="flex flex-col items-start">
        <form
          action=""
          className="part-1 flex flex-col items-start gap-4 w-full mt-6"
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="font-semibold text-xl text-black mb-1">Contact</h2>

            <FormInput
              type="email"
              name="email"
              placeholder="Type your email"
              className="w-full"
              value={emailValue}
              setContact={setContact}
              required
            />
          </div>
          <DeliveryMethodSelector />
          {deliveryMethodValue === "ship" ? (
            <OrderDetailsForm setContact={setContact} contact={contact} />
          ) : (
            deliveryMethodValue === "pick-in-store" && <StoreLocations />
          )}
          <PaymentStatus />
          <PlaceOrderButton deliveryMethodValue={deliveryMethodValue} />
        </form>
      </div>
    </div>
  );
}
export default CheckoutFormSection;
