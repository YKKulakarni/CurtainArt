import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-1 mt-5" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            Welcome to our curtain shop! We specialize in high-quality curtains,
            blinds, and drapery to suit every home and style. With years of
            experience, we aim to bring elegance and comfort to your living
            spaces.
          </p>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>Address: Villa 2, 10A street,  Al twar 3, Dubai - 0000</li>
            <li>Phone: (+971) 56 859 8516</li>
            <li>Email: support@curtainshop.com</li>
            <li>Working Hours: Mon-Fri, 9 AM - 6 PM</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 w-full items-center justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_curtain_art?igsh=MTNyZ2MyaXF1eXdneQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 p-2 rounded-full hover:bg-red-700 transition"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 CurtainArt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;