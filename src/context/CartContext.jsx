import { createContext, useEffect, useReducer } from "react";

const initialState = {
  cartItem: sessionStorage.getItem("cartItem")
    ? JSON.parse(sessionStorage.getItem("cartItem"))
    : [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isItemInCart = state.cartItem.find(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (isItemInCart) {
        return {
          ...state,
          cartItem: state.cartItem.map((cartItem) =>
            cartItem._id === action.payload._id
              ? { ...cartItem, _id: cartItem._id }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cartItem.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );

      return {
        ...state,
        cartItem: updatedCart,
      };
    case "RESET_CART":
      return {
        ...state,
        cartItem: [],
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    sessionStorage.setItem("cartItem", JSON.stringify(state.cartItem));
  }, [state.cartItem]);

  const addToCart = (value) => {
    dispatch({ type: "ADD_TO_CART", payload: value });
  };
  const removeFromCart = (value) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: value });
  };

  const clearCart = () => {
    dispatch({ type: "RESET_CART" });
  };

  let itemCount =
    state.cartItem.length > 0
      ? new Set(state.cartItem.map((item) => item._id)).size
      : 0;

  return (
    <CartContext.Provider
      value={{
        cartItem: state.cartItem,
        ...state,
        addToCart,
        removeFromCart,
        clearCart,
        dispatch,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
