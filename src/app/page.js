'use client'; // Mark as a Client Component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

function HomePage() {
  const [products, setProducts] = useState([]);
  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    // Fetch data inside useEffect
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=8');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to handle product click
  const handleProductClick = (id) => {
    router.push(`/products/${id}`); // Navigate to the product page with the product ID
  };

  return (
    <div className="mt-16 lg:p-14">
      {/* Hero Banner with Search Bar */}
      <section className="relative bg-orange-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Chantha Online Shop</h1>
      </section>
      {/* Products Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleProductClick(product.id)} // Call the function on click
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image w-full h-48 object-cover rounded-t-lg mb-2"
            />
            <div className="product-details p-2">
              <h2 className="product-title text-md font-semibold mb-1">{product.title}</h2>
              <p className="product-category text-sm text-gray-500 mb-1">
                Category: {product.category}
              </p>
              <p className="product-description text-sm text-gray-700 mb-2">
                {product.description.length > 60
                  ? `${product.description.substring(0, 60)}...`
                  : product.description}
              </p>
              <div className="product-price-rating flex items-center justify-between mb-2">
                <span className="product-price text-lg font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="product-rating text-sm text-yellow-500">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <button className="buy-now-button bg-blue-500 text-white font-semibold py-1 px-2 rounded-lg w-full transition-colors duration-300 hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
