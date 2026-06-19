import Apps from "../../assets/foodDishes/app-store.png";
import Delivery from "../../assets/foodDishes/delivary.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AppStore = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <hr className="hidden dark:block dark:bg-red  " />
      <div className="py-20  bg-orange-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Content */}
            <div
              className="space-y-6 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight dark:text-white">
                Foodie is Available for
                <span className="text-primary"> Android </span>
                and
                <span className="text-secondary"> iOS</span>
              </h1>

              <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Order your favorite meals anytime and anywhere. Download our
                mobile app and enjoy fast delivery, exclusive offers, and a
                seamless food ordering experience.
              </p>

              <img
                src={Apps}
                alt="App Store"
                className="w-[220px] mx-auto lg:mx-0 hover:scale-105 duration-300 cursor-pointer"
              />
            </div>

            {/* Delivery Image */}
            <div
              className="relative flex justify-center "
              data-aos="fade-right"
              data-aos-delay="50"
            >
              <img
                src={Delivery}
                alt="Delivery"
                className="w-[350px] md:w-[450px] lg:w-[600px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
