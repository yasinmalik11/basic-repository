import React from 'react'

function Destination() {
  return (
    <>
     <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Paris", "Dubai", "Turkey", "Hunza", "Maldives", "Italy"].map(
            (place, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
              >
                <img
                  src={`https://media.istockphoto.com/id/1412976847/photo/anse-source-dargent-la-digue-seychelles-young-couple-men-and-woman-on-a-tropical-beach-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=TPpNQhs7t3GPqMGKlF1IuYz33q9cLsTL4jhnnTSd-us=,${place}`}
                  alt={place}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{place}</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the beauty and culture of {place}.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
       <section className="py-20 bg-gray-100 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Affordable Packages</h3>
            <p className="text-gray-600">
              Best prices with high quality travel services.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Trusted Guides</h3>
            <p className="text-gray-600">
              Experienced and professional travel experts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              We are always here to help you anytime.
            </p>
          </div>
        </div>
      </section>
      </>
  )
}

export default Destination