import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_live_51HtYprEjJFZiU16dzazEg9GmjsaVkJWLuUggyf9VjzTmsVa3ucIYNBwUipoCcJ0yUHaizr94ROGcxhpsxaPFn1Uv003u7GQeLZ"
);

const Payment = () => {
  const location = useLocation();
  const data = location.state.data;
  // console.log(data);

  return (
    <main className="content-center payment-body ">
      <div className="payment-card">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </main>
  );
};

export default Payment;
