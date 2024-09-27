"use client"
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Optional for social media icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Brand and Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-1">CC Amazing Shop</h2>
          <p className="text-sm">© 2024 Your Shop. All rights reserved.</p>
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Email:{' '}
            <a
              href="mailto:choeurnchantha64@gmail.com"
              className="hover:text-gray-400 transition duration-200"
            >
              choeurnchantha64@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{' '}
            <a
              href="tel:+885882972083"
              className="hover:text-gray-400 transition duration-200"
            >
              +885 88 29 72 083
            </a>{' '}
            /{' '}
            <a
              href="tel:+855158270902"
              className="hover:text-gray-400 transition duration-200"
            >
              15 8270 902
            </a>
          </p>
        </div>

        {/* Optional Social Media Icons */}
        <div className="flex space-x-4 text-center md:justify-end">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
