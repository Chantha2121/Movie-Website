import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">
          CC Amassing Shop
        </div>
        <div className="mt-2 md:mt-0">
          <p>Email: <a href="mailto:contact@ccshop.com" className="hover:text-gray-400">choeurnchantha64@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+885 88 29 72 083 / 15 8270 902</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
