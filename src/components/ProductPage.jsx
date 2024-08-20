import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/context";
import { useParams } from "react-router-dom";

export default function ProductPage({ match }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id: productId } = useParams;
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  const handleAddItem = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveItem = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleSubmit = () => {
    if (product && quantity > 0) {
      addToCart({ ...product, quantity });
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
          <button onClick={handleRemoveItem}>-</button>
          <h3>{quantity}</h3>
          <button onClick={handleAddItem}>+</button>
          <button onClick={handleSubmit}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}
