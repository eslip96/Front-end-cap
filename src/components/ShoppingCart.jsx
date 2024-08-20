import React from "react";

export default function ShoppingCart({ cart = [] }) {
  return (
    <div className="shopping-cart-wrapper">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
