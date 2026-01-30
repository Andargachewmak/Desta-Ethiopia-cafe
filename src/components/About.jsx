// src/pages/About.js
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import owner1 from "../assets/image/owner1.jpg";
import owner2 from "../assets/image/ownn.jpg";
import food1 from "../assets/image/food1.jpg";
import { FaStar, FaShoppingCart, FaLeaf, FaHeart } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";

/* ---------------- ANIMATION VARIANTS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardHover = {
  hover: { y: -12, scale: 1.03, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <>
      {/* MODERN ABOUT US TITLE */}
      <motion.section
        className="py-16 bg-[#fafafa]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#627D63] to-[#51634f]">
              About Us
            </span>
          </motion.h2>

          <motion.div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#627D63] to-[#51634f] opacity-80"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.p
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Discover our story and what makes Desta Ethiopian Cafe a heartwarming
            place for authentic Ethiopian cuisine.
          </motion.p>
        </div>
      </motion.section>

      {/* ABOUT CONTENT */}
      <motion.section
        className="py-20 bg-[#fafafa]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <motion.div variants={fadeUp}>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bringing the Heart of Ethiopia to Your Table
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Desta Ethiopian Cafe is a charming and cozy spot that has quickly
              become a local favorite for its perfectly spiced stews and veggie
              combo plates. We celebrate Ethiopian cuisine’s love for vegetables,
              offering balanced stews made with lentils, peas, and potatoes.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Our vegan breakfast sandwich with cashew cheese and special sauce
              is highly recommended, while our popular vegetarian combo plate
              features flavorful azifa served with traditional teff injera.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              At Desta Ethiopian Cafe, we cook with traditional recipes and a lot
              of love. Whether you’re new to Ethiopian food or a longtime fan,
              we welcome you into a warm, inviting atmosphere made for everyone.
            </p>
          </motion.div>

          {/* IMAGES */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={stagger}
          >
            <motion.div
              className="relative group overflow-hidden rounded-3xl shadow-xl"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={owner1}
                alt="Desta Ethiopian Cafe Owner"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            <motion.div
              className="relative group overflow-hidden rounded-3xl shadow-xl sm:mt-10"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={owner2}
                alt="Inside Desta Ethiopian Cafe"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* VALUES / EXPERIENCE */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: `url(${food1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-16 drop-shadow-lg"
            variants={fadeUp}
          >
            Why Choose Desta
          </motion.h2>

          {/* Cards */}
          <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <FaStar size={32} />, title: "Authentic Recipes", text: "Traditional Ethiopian flavors crafted using time-honored methods." },
              { icon: <FaShoppingCart size={32} />, title: "Easy Online Ordering", text: "Order your favorite Ethiopian meals from home with ease." },
              { icon: <MdLocalDining size={32} />, title: "Fresh and Flavorful", text: "Only the freshest ingredients for every meal." },
              { icon: <FaLeaf size={32} />, title: "Vegan Friendly", text: "Rich plant-based dishes full of nourishment." },
              { icon: <FaHeart size={32} />, title: "Warm Atmosphere", text: "A cozy space where everyone feels welcome." },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-[#51634F]/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl cursor-pointer"
                variants={fadeUp}
                whileHover="hover"
                animate="visible"
                initial="hidden"
                {...cardHover}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/30 text-white mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
