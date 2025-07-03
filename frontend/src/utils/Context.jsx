import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState(null);
  const [brand, setBrand] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  //   const [total, setTotal] = useState(0);
  //   const [user, setUser] = useState(null);
  //   const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.quantity));
    setCartCount(count);

    let SubTotal = 0;
    cartItems.map((item) => (SubTotal += item.price * item.quantity));
    setCartSubTotal(SubTotal);
  }, [cartItems]);

  // const handleAddToCart = (prodcut, quantity) => {
  //   let items = [...cartItems];
  //   let index = items.findIndex((index) => item.id === products.id);

  //   if (index !== -1) {
  //     items[index].attributes.quantity += quantity;
  //   } else {
  //     prodcut.attributes.quantity += quantity;
  //     items = [...items, product];
  //   }

  //   setCartItems(items);
  // };

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    const updatedItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedItems);
  };

  const handleCartQuantity = (product, type) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        products,
        setProducts,
        brand,
        setBrand,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartQuantity,
        // total,
        // setTotal,
        // user,
        // setUser,
        // search,
        // setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
