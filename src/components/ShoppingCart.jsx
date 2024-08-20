import React, { useContext } from "react";
import { CartContext } from "../context/context";

export default function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.title} className="cart-item-image" />
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div className="shopping-cart-wrapper">
      {cartItems.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        <div className="cart-items-list">{renderCartItems()}</div>
      )}
    </div>
  );
}
