import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const faqs = [
  {
    q: "Do you offer vegan options?",
    a: "Yes! Desta Ethiopian Cafe is proudly vegan-friendly. Many of our traditional dishes are 100% plant-based.",
  },
  {
    q: "Do you accept online orders?",
    a: "Absolutely. You can place your order online for pickup using our ordering platform.",
  },
  {
    q: "Do you offer catering services?",
    a: "Yes, we offer catering for events and gatherings. Please contact us for more details.",
  },
  {
    q: "Is parking available?",
    a: "Street parking is available near the cafe. Availability may vary during peak hours.",
  },
  {
    q: "Are reservations required?",
    a: "No reservations are required. Walk-ins are always welcome!",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* CONTACT BOX */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

            {/* LEFT – Contact Info */}
            <div className="bg-[#51634F] text-white p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-white/90 mb-10">
                  Have questions or want to work with us?
                  We’d love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-xl mt-1" />
                    <span>
                      303a Oakland Ave, Oakland, CA 94611, United States
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-xl" />
                    <span>+1 (510) 737-3565</span>
                  </div>

                 
                </div>

                {/* Opening Hours */}
                <div className="mt-10 border-t border-white/20 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FaClock className="text-xl" />
                    <h3 className="text-xl font-semibold">Opening Hours</h3>
                  </div>

                  <ul className="space-y-2 text-white/90 max-w-xs">
                    <li className="flex justify-between">
                      <span>Mon – Fri</span>
                      <span>10 AM – 5 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10 AM – 5 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-white/70 mt-10">
                © {new Date().getFullYear()} Desta Ethiopian Cafe. All rights reserved.
              </p>
            </div>

            {/* RIGHT – Contact Form */}
            <div className="p-10">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send us a message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-5 py-3 rounded-full text-black outline-none ring-2 ring-[#51634F]"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-5 py-3 rounded-full text-black outline-none ring-2 ring-[#51634F]"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-3 rounded-full text-black outline-none ring-2 ring-[#51634F]"
                />

                <textarea
                  rows={5}
                  placeholder="Your message"
                  required
                  className="w-full px-5 py-3 rounded-2xl text-black outline-none ring-2 ring-[#51634F] resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#51634F] text-white py-3 rounded-full font-semibold hover:bg-[#3f4f3d] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25214.923068276945!2d-122.25733000000001!3d37.816622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e9c011176b3%3A0x3ce4d45b971854f5!2sDesta%20Ethiopian%20Cafe!5e0!3m2!1sen!2sus!4v1769617522071!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

        </div>
      </section>
{/* FAQ SECTION */}
<section className="py-20">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer transition"
        >
          <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 list-none">
            {faq.q}
            <span className="text-[#51634F] text-2xl group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}
