"use client"
import React, { useState } from 'react';

function AddCardPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cards, setCards] = useState([]);

  // Handler for adding a new product card
  const handleAddCard = () => {
    if (title && description && price && imageUrl) {
      const newCard = { id: cards.length + 1, title, description, price, imageUrl };
      setCards([...cards, newCard]);
      // Clear input fields
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Product</h1>

      {/* Form to add new product card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mb-8">
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter product title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter product description"
            rows="3"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter product price"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter image URL"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddCard}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </div>

      {/* Display added product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-lg shadow-md p-4 bg-white">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <p className="text-lg font-bold text-green-600 mb-4">${card.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCardPage;
