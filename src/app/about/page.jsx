"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-amber-500 mb-6">About Our Shop</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Welcome to our store! We are passionate about providing the best products and excellent customer service.
        </p>
      </div>

      {/* Our Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700 bg-gray-100 p-6 rounded-lg shadow-md">
          Our mission is to bring you high-quality, stylish products at affordable prices. We carefully curate our
          collections to reflect the latest trends while ensuring that every piece meets our high standards of
          craftsmanship.
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700 bg-gray-100 p-6 rounded-lg shadow-md">
          Founded in 2020, we started as a small online store, and over the years, we&apos;ve grown into a well-loved
          brand. Our passion for quality and customer satisfaction drives everything we do. From humble beginnings,
          we&apos;ve built a community of loyal customers who trust us for their shopping needs.
        </p>
      </section>

      {/* Image Section */}
      <div className="my-12">
        <Image
          src="/pic.webp" // Replace with your actual image path
          alt="Our Team"
          width={1200} // Example width, adjust based on your actual image dimensions
          height={800} // Example height, adjust based on your actual image dimensions
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-lg leading-relaxed text-gray-700 bg-gray-100 p-6 rounded-lg shadow-md">
          We are a team of dedicated professionals who are passionate about bringing you the best online shopping
          experience. Each member of our team contributes to making sure every order is fulfilled with care and
          precision.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to know more?</h2>
        <Link
          href="/products"
          className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Browse Our Products
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
