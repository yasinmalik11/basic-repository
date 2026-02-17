import React from 'react'

function About() {
  return (
 
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://media.istockphoto.com/id/1344771294/photo/happy-family-in-masks-enjoying-travel-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=7moJA1zQvloaZDDInJdqaW6ucuxl1i2tIB008lzF2b8="
            alt="travel"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are a professional travel agency providing the best tour
              packages worldwide. Our mission is to make your journey safe,
              affordable and unforgettable.
            </p>
            <p className="text-gray-600">
              From mountains to beaches, we cover all destinations with trusted
              guides and 24/7 customer support.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About