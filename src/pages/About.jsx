import Navbar from "../components/Navbar";
import owner1 from "../assets/image/owner1.jpg";
import owner2 from "../assets/image/ownn.jpg";
import Footer from "../components/Footer";
import heroBg from "../assets/image/beyay.jpg";

export default function About() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
  className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 text-center px-6 max-w-4xl text-white">
    <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm tracking-wide bg-white/10 backdrop-blur">
      Our Story
    </span>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      About Desta Ethiopian Cafe
    </h1>

    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
      A cozy place where tradition, flavor, and community come together.
    </p>
  </div>
</section>


      {/* ABOUT CONTENT */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bringing the Heart of Ethiopia to Your Table
            </h2>

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
          </div>

          {/* IMAGES */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img
                src={owner1}
                alt="Desta Ethiopian Cafe Owner"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-xl sm:mt-10">
              <img
                src={owner2}
                alt="Inside Desta Ethiopian Cafe"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / EXPERIENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            
            <div className="p-8 rounded-3xl bg-gray-50 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900">Authentic Recipes</h3>
              <p className="mt-4 text-gray-600">
                Traditional Ethiopian flavors crafted using time-honored methods.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900">Vegan Friendly</h3>
              <p className="mt-4 text-gray-600">
                Rich plant-based dishes full of flavor and nourishment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900">Warm Atmosphere</h3>
              <p className="mt-4 text-gray-600">
                A cozy space where everyone feels welcome and at home.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
