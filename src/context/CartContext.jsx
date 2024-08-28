import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + product.quantity;

        if (updatedQuantity <= 0) {
          return prev.filter((item) => item.id !== product.id);
        } else {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: updatedQuantity }
              : item
          );
        }
      } else if (product.quantity > 0) {
        return [...prev, { ...product, quantity: product.quantity }];
      } else {
        return prev;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
