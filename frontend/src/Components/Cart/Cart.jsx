import { Context } from "../../utils/Context";
import { useContext, useState } from "react";
import "../Cart/Cart.css";
import CartItems from "./CartItems/CartItems";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Cart = () => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCheckoutClick = () => setShowCheckoutForm(true);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
      <ToastContainer />
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Your Cart – MedicalShop</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <hr />
      <div className="offcanvas-body">
        {!cartItems.length ? (
          <div className="empty-cart text-center">
            <img src="https://cdn-icons..." alt="" className="img-fluid" />
            <h4 className="pt-5 pb-3">Unfortunately, Your cart is Empty</h4>
            <p>Please Add Something to Your Cart</p>
            <a href="/products">
              <button className="main_btn my-3">Continue Shopping</button>
            </a>
          </div>
        ) : showCheckoutForm ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              cartItems={cartItems}
              onSuccess={(paymentIntent) => {
                setPaymentSuccess(true);
                toast.success("Payment Successful!", {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
                });

                setTimeout(() => {
                  window.location.href = "/";
                }, 1600);
              }}
              onCancel={() => setShowCheckoutForm(false)}
            />
          </Elements>
        ) : (
          <>
            <CartItems />
            <div className="offcanvas-footer p-3 sticky-footer">
              <div className="row align-items-center">
                <div className="col-md-7 col-12">
                  <h5>
                    SubTotal: <span>$ {cartSubTotal}</span>
                  </h5>
                </div>
                <div className="col-md-5 col-12 my-3 my-md-0">
                  <button className="btn4" onClick={handleCheckoutClick}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
