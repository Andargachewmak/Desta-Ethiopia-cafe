import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Menu images
import foodImage from "../assets/image/food3.jpg";
import gomn from "../assets/image/green salad.png";
import gom from "../assets/image/gom.jpg";
import tofu from "../assets/image/tofu1.jpg";
import sanbusa from "../assets/image/sanbusa.jpg";
import misir from "../assets/image/misir.png";
import fo from "../assets/image/fuol.jpg";
import azifa from "../assets/image/azifao.png";
import veg from "../assets/image/Veggie.jpg";
import san from "../assets/image/sanbusa.jpg";
import kik from "../assets/image/kik.jpg";
import food from "../assets/image/food8.jpg";
import assa from "../assets/image/shimbra.png";
import shiro from "../assets/image/shiro.png";
import coffee from "../assets/image/coffe.jpg";
import spiced from "../assets/image/spiced.jpg";
import latte from "../assets/image/food4.jpg";
import foode from "../assets/image/foode.jpg";
import ginger from "../assets/image/ginger.jpg";
import juice from "../assets/image/food5.jpg";
import softdrink from "../assets/image/sofdrink.jpg";
import kale from "../assets/image/kale.png";
import bu from "../assets/image/butcha.png";

// Background
import pattern from "../assets/image/pattern.jpg";

/* ---------------- MENU DATA (UNCHANGED) ---------------- */
const menuItems = [
  {
    id: 1,
    title: "Lentil Sambussa",
    price: "$5",
    description: "Lentils cooked in a blend of spices, onions, garlic and jalapeno",
    image: san,
    category: "lunch",
    subCategory: "appetizer",
  },
  {
    id: 2,
    title: "Sweet Potato Sambussa",
    price: "$5",
    description: "Carrot, rosemary, onion & garlic",
    image: sanbusa,
    category: "lunch",
    subCategory: "appetizer",
  },
  {
    id: 3,
    title: "Kale Salad",
    price: "$10",
    description: "Kale massaged with oil dressing",
    image: kale,
    category: "lunch",
    subCategory: "salad",
  },
  {
    id: 4,
    title: "Green Salad",
    price: "$10",
    description: "Mixed green salad with basil dressing",
    image: gomn,
    category: "lunch",
    subCategory: "salad",
  },
  {
    id: 5,
    title: "Misir Wot",
    price: "$15",
    description: "Red Lentils cooked in flavorful berbere sauce, a blend of red onion & garlic",
    image: misir,
    category: "lunch",
    subCategory: "entrees",
  },
  {
    id: 6,
    title: "Alicha Ater Kik",
    price: "$16",
    description: "Split peas cooked in a blend of spices, onions, garlic & turmeric",
    image: kik,
    category: "lunch",
    subCategory: "entrees",
  },
  {
    id: 7,
    title: "Atakilt Wot",
    price: "$16",
    description: "Carrots, potatoes and cabbage cooked in a blend of spices, onions, garlic & turmeric",
    image: food,
    category: "lunch",
    subCategory: "entrees",
  },
  {
    id: 8,
    title: "Gomen",
    price: "$16",
    description: "Kale sautéed with garlic, leaks, olive oil and spices",
    image: gom,
    category: "lunch",
    subCategory: "entrees",
  },
  {
    id: 9,
    title: "Shenbera Assaen",
    price: "$16",
    description: "Baked chickpeas sautéed in spices, berbere, onion, garlic & ginger",
    image: assa,
    category: "lunch",
    subCategory: "entrees",
  },
  {
    id: 10,
    title: "Shiro Wot",
    price: "$16",
    description: "Ground split peas cooked in berbere sauce, a blend of spices, and oil or herbed butter",
    image: shiro,
    category: "lunch",
    subCategory: "entrees",
  },

  {
    id: 11,
    title: "Breakfast Sandwich",
    price: "$16",
    description: "English muffin, veggies, housemade sauce and cashew cheese",
    image: foodImage,
    category: "breakfast",
  },
  {
    id: 12,
    title: "Tofu Scramble",
    price: "$16",
    description: "Tofu scramble with veggies and herbs",
    image: tofu,
    category: "breakfast",
  },
  {
    id: 13,
    title: "Fuol (Ful)",
    price: "$16",
    description: "Fava beans sautéed in herbed oil with onions, garlic, fresh tomato and herbs",
    image: fo,
    category: "breakfast",
  },
  {
    id: 14,
    title: "Butecha",
    price: "$16",
    description: "Chickpeas sautéed with red onion, turmeric & jalapeño",
    image: bu,
    category: "breakfast",
  },
  {
    id: 15,
    title: "Azifa",
    price: "$16",
    description: "Green lentils cooked in jalapeño, onion, garlic and lemon",
    image: azifa,
    category: "breakfast",
  },
  {
    id: 16,
    title: "Veggie Combo Plate",
    price: "$16",
    description: "Traditional Ethiopian vegan favorites served with sambussas and injera.",
    image: veg,
    category: "breakfast",
  },

  {
    id: 17,
    title: "Ethiopian Coffee",
    price: "$4",
    description: "Traditional Ethiopian coffee",
    image: coffee,
    category: "beverage",
    subCategory: "hot",
  },
  {
    id: 18,
    title: "Spiced Tea",
    price: "$3",
    description: "Spiced tea",
    image: spiced,
    category: "beverage",
    subCategory: "hot",
  },
  {
    id: 19,
    title: "Latte",
    price: "$3",
    description: "Latte",
    image: latte,
    category: "beverage",
    subCategory: "hot",
  },
  {
    id: 20,
    title: "Ethiopian Ginger Tea",
    price: "$3",
    description: "Ginger tea",
    image: ginger,
    category: "beverage",
    subCategory: "hot",
  },

  {
    id: 21,
    title: "Hibiscus Tea",
    price: "$4",
    description: "Hibiscus tea",
    image: juice,
    category: "beverage",
    subCategory: "cold",
  },
  {
    id: 22,
    title: "Telba (Flax)",
    price: "$4",
    description: "Flax juice",
    image: foode,
    category: "beverage",
    subCategory: "cold",
  },
  {
    id: 23,
    title: "Assortment of Cold Drinks",
    price: "$4",
    description: "Soft drinks",
    image: softdrink,
    category: "beverage",
    subCategory: "cold",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
};

/* ---------------- COMPONENT ---------------- */
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");

  const lunchSubs = ["all", "appetizer", "salad", "entrees"];
  const beverageSubs = ["all", "hot", "cold"];

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === "all") return true;
    if (item.category !== activeCategory) return false;

    if (
      (activeCategory === "lunch" || activeCategory === "beverage") &&
      activeSubCategory !== "all"
    ) {
      return item.subCategory === activeSubCategory;
    }
    return true;
  });

  const formatLabel = (text) =>
    text === "hot" ? "Hot Drinks" : text === "cold" ? "Cold Drinks" : "All";

  return (
    <section
      className="relative py-20 bg-repeat bg-fixed"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#627D63] text-center mb-8">
          Our Menu
        </h2>

        {/* MAIN FILTER */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["all", "breakfast", "lunch", "beverage"].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory("all");
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold
                ${activeCategory === cat ? "bg-[#627D63] text-white" : "bg-white border"}`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* SUB FILTERS */}
        <AnimatePresence>
          {activeCategory === "lunch" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-center gap-3 mb-10 flex-wrap"
            >
              {lunchSubs.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-full text-sm
                    ${activeSubCategory === sub ? "bg-green-700 text-white" : "bg-white border"}`}
                >
                  {sub.charAt(0).toUpperCase() + sub.slice(1)}
                </button>
              ))}
            </motion.div>
          )}

          {activeCategory === "beverage" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-center gap-3 mb-10 flex-wrap"
            >
              {beverageSubs.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-full text-sm
                    ${activeSubCategory === sub ? "bg-green-700 text-white" : "bg-white border"}`}
                >
                  {formatLabel(sub)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MENU ITEMS */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid sm:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                layout
                exit="exit"
                whileHover={{ y: -6 }}
                className="flex gap-6 items-start bg-white/95 rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-green-700 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
