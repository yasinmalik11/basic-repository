import React from "react";

function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Explore The World With Yakazo Travel ✈️
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Discover amazing destinations, best travel packages and unforgettable experiences.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-full flex items-center p-2 w-full max-w-xl shadow-lg">
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-grow px-4 py-2 rounded-full outline-none text-gray-700"
          />
          <button className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition">
            Search
          </button>
        </div>

        {/* Button */}
        <button className="mt-8 bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
         <link rel="stylesheet" href="/Packages" /> View Packages
        </button>
      </div>
    </section>
  );
}

export default Home;
