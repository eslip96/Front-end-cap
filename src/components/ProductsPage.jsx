import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.category}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
