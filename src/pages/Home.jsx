// src/pages/Home.tsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import img1 from "../assets/image/shop.jpg";
import img2 from "../assets/image/innerr.jpg";
import img3 from "../assets/image/inn.jpg";
import img4 from "../assets/image/innr.jpg";
import img5 from "../assets/image/inner.jpg";
import img6 from "../assets/image/inni.jpg";
import img7 from "../assets/image/innn.jpg";
import img8 from "../assets/image/home.jpg";

const images = [img1, img2, img3, img4, img5,img6,img7,img8];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl text-white">
              <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide rounded-full bg-white/10 backdrop-blur">
                Ethiopian • Vegan Friendly • Authentic
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Desta Ethiopian Cafe
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
                Authentic Ethiopian flavors, crafted with heart. Perfectly
                spiced stews, vibrant veggie combos, and teff injera — from our
                beloved vegan breakfast sandwich to signature vegetarian plates.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://online-ordering.innowi.com/branch/desta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#627D63] to-[#51634f] hover:from-[#627D63] hover:to-[#51634f] text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Order Online
                </a>

                <a
                  href="#menu"
                  className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold backdrop-blur hover:bg-white/10 transition"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
      <About />
        <Menu />
        <Footer />
        
    </>
  );
}
