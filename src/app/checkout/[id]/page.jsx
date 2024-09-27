"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Use for dynamic routing

function CheckoutPage({ params }) {
  const { id } = params; // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch product data based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product data");
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCheckout = () => {
    alert("Proceeding to Checkout!");
  };

  if (loading) return <div>Loading product details...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>

      {/* Product Summary */}
      {product && (
        <div className="border rounded-lg shadow-md p-6 bg-white max-w-lg mx-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Price & Checkout Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="sm:text-xl md:text-3xl font-bold text-green-600">${product.price}</div>
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white py-2 px-2 md:py-4 md:px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Payment Options */}
          <p className="text-sm text-gray-500 mb-4">
            Secure payment, support from sellers, and access to future versions.
          </p>
          <div className="flex justify-center space-x-2">
            <img src="/visa.png" alt="Visa" className="w-8" />
            <img src="/master.png" alt="Mastercard" className="w-8" />
            <img src="/paypal.png" alt="PayPal" className="w-8" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
