import React from 'react';
import './footer.module.css'; // Import your CSS module

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Address section */}
          <div className="text-white">
            <h2 className="text-lg font-bold mb-4">Address</h2>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p>Country</p>
          </div>
          
          {/* Connect section */}
          <div className="text-white">
            <h2 className="text-lg font-bold mb-4">Connect</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
            <div className="flex mt-2">
              <a href="#" className="mr-4 hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="mr-4 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="text-white">
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul>
              <li>
                <a href="#" className="block py-1 hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="block py-1 hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="#" className="block py-1 hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
