import React from "react";


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-5 mt-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-sky-500 mb-3">
            Yakazo Travel
          </h2>
          <p className="text-sm">
            Explore the world with us. We provide the best travel packages
            with affordable prices and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-sky-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/packages" className="hover:text-sky-400 transition">
                Packages
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-sky-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">
            Contact Us
          </h2>
          <p>Email: info@yakazotravel.com</p>
          <p>Phone: +92 300 1234567</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-sky-400">
            </a>
            <a href="#" className="hover:text-sky-400">
            </a>
            <a href="#" className="hover:text-sky-400">
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Yakazo Travel. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
