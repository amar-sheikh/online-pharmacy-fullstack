import { useContext } from "react";
import { Context } from "../../../utils/Context";
import "./CartItems.css";

const CartItems = () => {
  const { cartItems, handleRemoveFromCart, handleCartQuantity } =
    useContext(Context);

  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      {cartItems.map((item) => {
        const quantity = item?.quantity || 1;
        const price = item?.price || 0;
        const subtitle = item?.subtitle || "";
        const imageUrl =
          "http://localhost:1337" +
          (item?.img?.url || item?.attributes?.img?.url || "");

        return (
          <div key={item.id} className="cart-card">
            <img src={imageUrl} alt={item.title} className="product-image" />

            <div className="product-details">
              <div className="product-title">{item.title}</div>
              <div className="product-subtitle">{subtitle}</div>
            </div>

            <div className="product-qty">
              <button
                className="qty-btn"
                onClick={() => handleCartQuantity(item, "dec")}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="qty-number">{quantity}</span>
              <button
                className="qty-btn"
                onClick={() => handleCartQuantity(item, "inc")}
              >
                +
              </button>
            </div>

            <div className="product-price">${price.toFixed(2)}</div>

            <div className="product-total-price">
              ${(price * quantity).toFixed(2)}
            </div>

            <button
              className="product-remove"
              onClick={() => handleRemoveFromCart(item)}
              aria-label="Remove"
            >
              🗑️
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
