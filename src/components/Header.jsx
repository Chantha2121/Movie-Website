'use client';  // Add this to mark the component as a Client Component

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            CC Amasing Shop
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <ul className="flex space-x-6 text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search Product..."
            className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
          />
          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md">Search</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-gray-300">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="px-3 py-1 rounded-md bg-gray-700 text-gray-300 border border-gray-600 w-full"
                />
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md">Search</button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
