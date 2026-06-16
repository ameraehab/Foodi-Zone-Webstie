import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/food-logo.png";
import Darkmode from "./Darkmode";
const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white fixed top-0 left-0 w-full z-50 bg-white shadow-md
     dark:bg-gray-900 dark:text-white duration-200"
    >
      <div className="container-custom py-2  sm-py-0">
        <div className="flex justify-between items-center ">
          {/* Logo Section */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
            >
              <img src={Logo} alt="Foodie Zone" className="w-10 h-10" />
              Foodie
            </a>
          </div>

          {/* List Section */}
          <div className="flex items-center gap-4 ">
            {/*Dark Mode Toggle Button */}
            <div className="">
              <Darkmode />
            </div>
            <ul className="hidden sm:flex gap-3.5 ">
              <li>
                <a
                  href="#"
                  className="inline-block px-4 py-4
                   hover:text-primary
                    "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block px-4 py-4
                                     hover:text-primary
"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block px-4 py-4
                   hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Order Button  */}
            <button
              className="flex items-center gap-1 bg-gradient-to-r from-primary to-secondary
              text-white px-6 py-2 rounded-full  hover:scale-105 duration-300 "
            >
              Order
              <FaShoppingCart className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
