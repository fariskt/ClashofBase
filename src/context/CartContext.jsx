import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem("cartItems")
      ? JSON.parse(sessionStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, _id: cartItem._id } : cartItem
        )
      );
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      console.log(cartItems);

    }
  };
 
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  let itemCount =
    cartItems.length > 0 ? new Set(cartItems.map((item) => item._id)).size : 0;

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
