import React from 'react';
import Link from 'next/link'; // Import Link for client-side navigation

async function Page() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return (
    <div className=' lg:p-14'>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
      {data.map((product) => (
        <div
          key={product.id}
          className="product-card border rounded-lg shadow-lg p-4 bg-white max-w-sm mx-auto transition-transform duration-300 hover:scale-105"
        >
          <Link href={`/products/${product.id}`} className="block"> {/* Link to product details */}
            <img
              src={product.image}
              alt={product.title}
              className="product-image w-full h-60 object-cover rounded-t-lg"
            />
            <div className="product-details p-4">
              <h2 className="product-title text-lg font-semibold mb-2 text-gray-800">
                {product.title}
              </h2>
              <p className="product-category text-sm text-gray-500 mb-2">
                Category: {product.category}
              </p>
              <p className="product-description text-sm text-gray-700 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="product-price-rating flex items-center justify-between mb-4">
                <span className="product-price text-xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="product-rating text-sm text-yellow-500">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </Link>

          <Link href={`/addCard/${product.id}`}>
            <button
              className="buy-now-button bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300 hover:bg-blue-600"
            >
              Buy Now
            </button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Page;
