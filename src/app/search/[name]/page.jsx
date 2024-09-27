"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchPage = ({ params }) => {
  const { name } = params; // Get the search term from the URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Helper function to check if all characters in the search term are found in the product title
  const compareCharacters = (searchTerm, title) => {
    const searchLower = searchTerm.toLowerCase();
    const titleLower = title.toLowerCase();

    // Check if every character of the search string exists in the title in any order
    return searchLower.split("").every((char) => titleLower.includes(char));
  };

  // Filter products by comparing the search term to product titles
  useEffect(() => {
    if (name) {
      const filtered = products.filter((product) =>
        compareCharacters(name, product.title)
      );
      setFilteredProducts(filtered);
    }
  }, [name, products]);

  return (
    <div className="container mx-auto py-10 px-4 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Search Results for &quot;{name}&quot; {/* Escape double quotes */}
      </h1>
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 truncate">
                  {product.description}
                </p>
                <div className="mt-2 text-red-500 font-bold text-lg">
                  ${product.price}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-center text-xl text-gray-500">No products found</p>
      )}
    </div>
  );
};

export default SearchPage;
