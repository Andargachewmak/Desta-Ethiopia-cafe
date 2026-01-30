import React from "react";
import bgImage from "../assets/image/inni.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhone, FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-14">
        
        {/* Logo & About */}
        <div className="space-y-6">
          <img
            src="https://destaethiopiancafeca.com/wp-content/uploads/elementor/thumbs/Header-Logo-e1747930252622-r66wpwqfnbwx5sl1gj92p5hzljt58x1qji2da412ps.png"
            alt="Desta Logo"
            className="h-20 w-auto"
          />

          <p className="text-gray-200 leading-relaxed">
            Experience authentic Ethiopian cuisine in a warm, vibrant, and
            welcoming space. Fresh, healthy, and full of flavor.
          </p>

          {/* Social Icons */}
        </div>

        {/* Coffee Shop */}
        <div className="space-y-6">
          <h5 className="text-xl font-semibold">Coffee Shop</h5>
          <ul className="space-y-4 text-gray-200">
            <li>
              <a
                href="https://www.google.com/maps/place/Desta+Ethiopian+Cafe/@37.8166547,-122.257303,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#51634F] transition"
              >
                <HiLocationMarker className="text-[#51634F] text-xl mt-0.5" />
                <span>303a Oakland Ave, Oakland, CA 94611</span>
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone className="text-[#51634F] text-lg" />
              <a
                href="tel:+15107373565"
                className="hover:text-[#51634F] transition"
              >
                +1 (510) 737-3565
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="space-y-6">
          <h5 className="text-xl font-semibold">Opening Hours</h5>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <FiClock className="text-[#51634F] text-lg" />
              Mon – Fri: 10 AM – 5 PM
            </li>

            <li className="flex items-center gap-3">
              <FiClock className="text-[#51634F] text-lg" />
              Saturday: 10 AM – 5 PM
            </li>

            <li className="text-red-400 font-medium">
              Sunday: Closed
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h5 className="text-xl font-semibold">Newsletter</h5>
          <p className="text-gray-300">
            Subscribe for updates, promos, and insider news.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 ">
            <input
              type="email"
              placeholder="Your email"
              required
              className="px-5 py-3 rounded-full flex-1  text-white/77 focus:outline-none ring-2 ring-[#51634F]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#51634F] hover:bg-[#627D63] font-semibold transition-all hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t-2 border-white/90 mx-8"></div>

      {/* Bottom Bar */}
      <div className="relative max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white  text-sm text-center md:text-left">
          © 2025 Desta Ethiopian Cafe. All Rights Reserved — Designed by    <span className="text-white hover:text-white/60 " >Andargachew</span> 
        </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/destaethiopiancafe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#51634F] transition-all hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/destaethiopiancafe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#51634F] transition-all hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

      </div>
    </footer>
  );
}
