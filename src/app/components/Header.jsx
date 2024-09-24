import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          {/* No need for <a> here */}
          <Link href="/">
            CC Movie Flix {/* You can change the name to fit your brand */}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-gray-300">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/movies">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/genres">
                Genres
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
          />
          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md">Search</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-300">
            {/* Add a hamburger icon here for the mobile menu */}
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
    </header>
  );
};

export default Header;
