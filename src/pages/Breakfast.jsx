import React from "react";
import { useNavigate } from "react-router-dom";
import breakfastImg from "../assets/image/breakfast.jpg";
import bgImg from "../assets/image/food7.jpg"; // Same background as others

export default function Breakfast() {
  const navigate = useNavigate();

  return (
    <>
      {/* BACKGROUND WITH IMAGE + BLUR */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => navigate("/")} // Always return to Home
            className="absolute top-4 right-4 text-white text-2xl hover:scale-110 transition"
          >
            ✕
          </button>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Breakfast - Menu
          </h1>

          <img
            src={breakfastImg}
            alt="Breakfast Menu"
            className="w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
