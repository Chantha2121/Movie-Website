"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // For optimized image handling in Next.js

function AddCardPage({ params }) {
  const { id } = params; // Get the product ID from the URL
  const router = useRouter(); // Next.js router for navigation

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any error state

  // Fetch product data from fakestoreapi.com by product ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
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

  // Handler for checkout
  const handleCheckout = () => {
    // Navigate to a checkout page, passing the product ID or any necessary data
    router.push(`/checkout/${id}`);
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">{product.title}</h1>

      {/* Product Card */}
      <div className="border rounded-lg shadow-md p-4 bg-white relative max-w-md mx-auto mb-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Price Section */}
        <div className="text-3xl font-bold text-pink-600 mb-4">${product.price}</div>
        <p className="text-sm text-gray-500 mb-4">
          Secure payment, Support from sellers, Access to future versions
        </p>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600 transition duration-300 mb-4"
        >
          Go to Checkout
        </button>

        {/* Payment Icons */}
        <div className="flex justify-center space-x-2">
          <Image src="/visa.png" alt="Visa" width={32} height={32} />
          <Image src="/master.png" alt="MasterCard" width={32} height={32} />
          <Image src="/paypal.png" alt="PayPal" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}

export default AddCardPage;
