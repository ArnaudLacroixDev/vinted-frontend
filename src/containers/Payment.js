import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_live_51HtYprEjJFZiU16dzazEg9GmjsaVkJWLuUggyf9VjzTmsVa3ucIYNBwUipoCcJ0yUHaizr94ROGcxhpsxaPFn1Uv003u7GQeLZ"
);

const Payment = () => {
  return (
    <div className="content-center payment-body ">
      <div className="payment-card">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
