"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function ProductDetailPage({ params }) {
  const { id } = params; // Destructure id from params
  const [product, setProduct] = useState(null); // State for storing product data
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data); // Set product data to state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="mt-20">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-20">Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      {/* Product Image and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-500 mb-4">Category: {product.category}</p>
          <p className="text-lg mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">⭐ {product.rating.rate}</span>
            <span className="ml-2 text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <Link href="/addCard">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600">
            Add to Cart
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
