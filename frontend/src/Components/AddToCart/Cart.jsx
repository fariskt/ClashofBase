import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";

function AddToCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        <>
          <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Cart</h1>
          <div className="container-section">
            {cartItems.map((item, index) => (
              <div className="cart-items" key={index}>
                <div className="cart-image-container">
                 <img src={item.img} alt="" />
                </div>
                <div className="categories">
                  <h4>Level : Townhall {item.category.slice(2)} </h4>
                  <h4>Type : {item.type} </h4>
                  <div className="copy-link">
                    <a href={item.link} target="_blank">
                      <button className="copy-btn">Copy Base</button>
                    </a>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="delete-btn"
                    title="remove from cart"
                  >
                    <RiDeleteBin6Line/>
                  </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="clear-cart">
              <button onClick={clearCart}>clear cart</button>
            </div>
          </div>
        </>
      ) : (
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
          YOUR CART IS EMPTY
        </h1>
      )}
    </div>
  );
}

export default AddToCart;
