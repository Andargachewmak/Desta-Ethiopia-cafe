// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/desta logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile dropdown

  const handleLinkClick = () => setIsOpen(false);

  const menuItems = [
    { name: "Breakfast", link: "/breakfast" },
    { name: "Lunch", link: "/lunch" },
    { name: "Drink", link: "/drink" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-100/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={Logo} alt="Desta Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link
              to="/"
              className="font-semibold hover:text-[#627D63] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-semibold hover:text-[#627D63] transition-colors duration-300"
            >
              About Us
            </Link>

            {/* Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center font-semibold hover:text-[#627D63] transition-colors duration-300">
                Menu <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="font-semibold hover:text-[#627D63] transition-colors duration-300"
            >
              Contact Us
            </Link>

            {/* Desktop Order Now Button */}
            <a
              href="https://online-ordering.innowi.com/branch/desta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#627D63] hover:bg-[#51634f] text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FiShoppingCart className="mr-2" size={20} />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#627D63]/80 backdrop-blur-md px-2 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-gray-100/50 transition"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-gray-100/50 transition"
            onClick={handleLinkClick}
          >
            About Us
          </Link>

          {/* Mobile Menu Dropdown */}
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-gray-100/50 transition items-center"
            >
              Menu <FiChevronDown className={`ml-1 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            {menuOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-gray-100/50 transition"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-gray-100/50 transition"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>

          {/* Mobile Order Now Button */}
          <a
            href="https://online-ordering.innowi.com/branch/desta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mt-2 bg-[#51634f] hover:bg-[#41523c] text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            onClick={handleLinkClick}
          >
            <FiShoppingCart className="mr-2" size={20} />
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
