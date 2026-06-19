import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="hidden dark:block dark:bg-red" />
      <footer className="relative dark:bg-gray-900 text-white pt-36 pb-10">
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2
    w-[80%] max-w-5xl bg-primary
    md:px-8 md:py-7 p-4
    rounded-3xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Ready to Order Your Favorite Meal?
              </h2>

              <p className="mt-3 text-lg text-white/90">
                Fresh food, fast delivery, and unforgettable flavors.
              </p>
            </div>

            <button
              className="bg-gray-900 rounded-full text-white font-bold
        px-8 py-4 hover:scale-105 duration-300 cursor-pointer"
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                FOODIE ZONE
              </h2>

              <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
                Serving fresh meals with premium ingredients and exceptional
                taste.
              </p>

              <p className="mt-6 text-gray-500 text-sm">
                © 2026 Foodie Zone. All rights reserved.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
                Menu
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Burgers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Pizza
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Desserts
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
                Company
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Our Chefs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Support + Social */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
                Follow Us
              </h3>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary
            flex items-center justify-center
            hover:scale-110 duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary
            flex items-center justify-center
            hover:scale-110 duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary
            flex items-center justify-center
            hover:scale-110 duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary
            flex items-center justify-center
            hover:scale-110 duration-300"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
