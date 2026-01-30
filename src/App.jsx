import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Lunch from "./pages/Lunch";
import Drink from "./pages/Drink";
import Breakfast from "./pages/Breakfast";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/breakfast" element={<Breakfast />} />

      </Routes>
    </BrowserRouter>
  );
}
