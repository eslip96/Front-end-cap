import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prev) =>
      e.target.checked
        ? [...prev, category]
        : prev.filter((cat) => cat !== category)
    );
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true
  );

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOrder === "a-z") {
      return a.title.localeCompare(b.title);
    }
    if (sortOrder === "z-a") {
      return b.title.localeCompare(a.title);
    }
    if (sortOrder === "price-low-high") {
      return a.price - b.price;
    }
    if (sortOrder === "price-high-low") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + delta,
    }));
  };

  return (
    <div className="products-main-wrapper">
      <div className="filter-wrapper">
        <h3>Filter by Category:</h3>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={handleCategoryChange}
              checked={selectedCategories.includes(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        <h3>Sort by:</h3>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="">Select Order</option>
          <option value="a-z">Title: A-Z</option>
          <option value="z-a">Title: Z-A</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
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
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  disabled={quantities[product.id] === 1}
                >
                  -
                </button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)}>
                  +
                </button>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products to display</p>
        )}
      </div>
    </div>
  );
}
