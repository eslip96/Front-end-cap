import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortProducts(order);
  };

  const sortProducts = (order) => {
    let sortedProducts = [...products];
    if (sortOrder === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === "cheap-to-expensive") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "expensive-to-cheap") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="main-wrapper">
      <div className="filter-wrapper">
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="">Select Filter</option>
          <option value="a-z">Title: A-Z</option>
          <option value="z-a">Title: Z-A</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-category">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
