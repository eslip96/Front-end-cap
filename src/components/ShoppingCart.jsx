import React, { useContext } from "react";
import { CartContext } from "../context/context";

export default function ShoppingCart() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const handleIncrement = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else {
      addToCart({ ...item, quantity: -item.quantity });
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
  };

  const handlePlaceOrder = () => {
    clearCart();

    window.location.href = "http://www.savewalterwhite.com/";
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.title} className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="cart-item-title">{item.title}</h3>
          <p className="cart-item-price">${item.price}</p>
          <div className="cart-item-quantity">
            <button onClick={() => handleDecrement(item)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
        </div>
        <button
          onClick={() => handleRemove({ ...item, quantity: -item.quantity })}
          className="remove-item-button"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="main-wrapper">
      <div className="shopping-cart-wrapper">
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div>
            <div className="cart-items-list">{renderCartItems()}</div>
            <div className="cart-total">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
              <button onClick={handlePlaceOrder} className="place-order-btn">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
