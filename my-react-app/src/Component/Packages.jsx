import React from "react";
import { Link } from "react-router-dom";
function Packages() {
  const packages = [
    {
      title: "Dubai Luxury Tour",
      location: "Dubai, UAE",
      price: "$999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      title: "Paris Romantic Trip",
      location: "Paris, France",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      title: "Hunza Adventure",
      location: "Hunza, Pakistan",
      price: "$499",
      image:
        "https://images.unsplash.com/photo-1609948543911-1e3c47d63b0f",
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="packages">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Travel Packages ✈️
          </h2>
          <p className="text-gray-600 mt-3">
            Choose the perfect package for your next adventure
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-4">
                  {item.location}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-lg">
                    {item.price}
                  </span>

                  <button className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Packages;
