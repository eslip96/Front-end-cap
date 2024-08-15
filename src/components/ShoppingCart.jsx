import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [item, addItem] = useState();

  return (
    <div className="shopping-cart-wrapper">
      <h1>Shopping Cart</h1>
    </div>
  );
}
