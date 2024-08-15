import React, { useState, useEffect } from "react";

export default function ProductPage(props) {
  const [product, setProduct] = useState();
  const productId = props.match.params.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  return (
    <div className="page-wrapper">
      {product ? (
        <div className="product-card-wrapper">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
          <button onClick={() => console.log(props.match.params)}>Click</button>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}
