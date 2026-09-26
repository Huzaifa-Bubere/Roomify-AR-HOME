import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "./FeaturedProduct.css";
import { formatINR } from "../utils/currency";

// ✅ Numeric prices only
const productData = [
  { id: 1, name: "Modern Sofa", category: "sofas", price: 34999, image: "/images/sofa.jpg" },
  { id: 2, name: "Luxury Bed", category: "beds", price: 54999, image: "/images/luxury-bed.jpg" },
  { id: 3, name: "Dining Table", category: "tables", price: 29999, image: "/images/dining-table.jpg" },
  { id: 4, name: "Chair", category: "chairs", price: 8999, image: "/images/chair.jpg" },
  { id: 5, name: "Classic Sofa", category: "sofas", price: 24999, image: "/images/Sofa2.jpg" },
  { id: 6, name: "Stylish Lamp", category: "lamp", price: 3499, image: "/images/lamp.jpg" },
  { id: 7, name: "Wooden Bed", category: "beds", price: 39999, image: "/images/Bed.jpg" },
  { id: 8, name: "Round Dining Table", category: "tables", price: 19999, image: "/images/dining-table2.jpg" },
  { id: 9, name: "Luxury Chair", category: "chairs", price: 12999, image: "/images/Chair2.jpg" },
  { id: 10, name: "Decor Lamp", category: "lamp", price: 2999, image: "/images/Lamp2.jpg" },
];

function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <section className="featured-products" id="shop">
      <h2>Featured Products</h2>

      <div className="category-buttons">
        {["all", "sofas", "beds", "tables", "chairs", "lamp"].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/product/${product.id}`, { state: product })}
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>

              {/* ✅ Numeric value displayed directly */}
              <p className="price">{formatINR(product.price)}</p>

              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
