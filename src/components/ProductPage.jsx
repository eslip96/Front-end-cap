import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";

export default function ProductPage({ match }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productId = match.params.id;
  const { addToCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error("error fetching product:", error));
  }, [productId]);

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    if (quantity > 0 || quantity < 0) {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
      };
      addToCart(cartItem);
      history.push("/products");
    }
  };

  return (
    <div className="page-wrapper">
      {product ? (
        <div className="product-card-wrapper">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
          <div className="decrement-btns-container">
            <button id="plus-btn" onClick={handleRemoveItem}>
              -
            </button>
            <h3>{quantity}</h3>
            <button id="minus-btn" onClick={handleAddItem}>
              +
            </button>
            <button onClick={handleSubmit}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}
