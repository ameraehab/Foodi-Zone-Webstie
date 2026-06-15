import { GrSecure } from "react-icons/gr";
import food from "../../assets/foodDishes/banner.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src={food}
              alt="Banner"
              className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              Welcome to Our Restaurant
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-500 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Discover the best dishes and flavors that will tantalize your
              taste buds. Savor freshly crafted meals prepared with passion and
              attention to detail. From delicious main courses to refreshing
              drinks and sweet desserts.
            </p>

            {/* Icons */}
            <div className="flex gap-6 mt-4">
              <div data-aos="zoom-in" data-aos-delay="300">
                <GrSecure className="text-4xl h-16 w-16 p-4 rounded-full bg-red-200 dark:bg-violet-500 shadow-md" />
              </div>

              <div data-aos="zoom-in" data-aos-delay="400">
                <IoFastFood className="text-4xl h-16 w-16 p-4 rounded-full bg-orange-200 dark:bg-orange-500 shadow-md" />
              </div>

              <div data-aos="zoom-in" data-aos-delay="500">
                <GiFoodTruck className="text-4xl h-16 w-16 p-4 rounded-full bg-green-200 dark:bg-green-500 shadow-md" />
              </div>
            </div>

            {/* Button */}
            <div data-aos="fade-up" data-aos-delay="500">
              <button
                className="py-3 px-6 rounded-full
               text-white bg-gradient-to-r
                from-primary to-secondary
                 hover:scale-105 duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
