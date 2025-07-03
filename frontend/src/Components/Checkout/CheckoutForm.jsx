import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { makePaymentRequest } from "../../utils/api";
import "./CheckoutForm.css";

const CheckoutForm = ({ cartItems, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      });

      const { clientSecret } = res.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: nameOnCard,
            email: email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        onSuccess(result.paymentIntent);
      }
    } catch (err) {
      setError("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label>Card Number</label>
        <CardNumberElement className="stripe-card-element" />
      </div>

      <div className="form-row d-flex gap-2 mb-3">
        <div className="form-group flex-fill">
          <label>Expiry</label>
          <CardExpiryElement className="stripe-card-element" />
        </div>

        <div className="form-group flex-fill">
          <label>CVC</label>
          <CardCvcElement className="stripe-card-element" />
        </div>
      </div>

      <div className="form-group mb-3">
        <label>Name on card</label>
        <input
          type="text"
          className="form-control"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          required
        />
      </div>

      {error && <div className="text-danger mb-3">{error}</div>}

      <button className="btn4 mt-3" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
