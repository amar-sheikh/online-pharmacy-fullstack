import { useContext } from "react";
import { Context } from "../../../utils/Context";
import "./CartItems.css";

const CartItems = () => {
  const { cartItems, handleRemoveFromCart } = useContext(Context);

  return (
    <div className="cart-container">
      {cartItems.map((item) => {
        const quantity = item?.attributes?.quantity || item?.quantity || 1;
        const price = item?.attributes?.price || item?.price || 0;
        const subtitle = item?.attributes?.subtitle || item?.subtitle || "";
        const imageUrl = "http://localhost:1337" + (item?.img?.url || "");

        return (
          <div key={item.id} className="cart-card">
            <img src={imageUrl} alt={item.title} className="product-image" />

            <div className="product-details">
              <div className="product-title">{item.title}</div>
              <div className="product-subtitle">{subtitle}</div>
            </div>

            <div className="product-qty">{quantity}</div>

            <div className="product-price">${price}</div>

            <div className="product-total-price">${price * quantity}</div>

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
