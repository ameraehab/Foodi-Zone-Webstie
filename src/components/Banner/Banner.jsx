import { GrSecure } from "react-icons/gr";
import food from "../../assets/foodDishes/banner.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div className=" dark:bg-gray-900">
        <div
          data-aos="slide-up"
          data-aos-duration="1000"
          className=" container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/*image Section */}
            <div>
              <img
                src={food}
                alt="Banner"
                className="w-[670px] 
              mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)] "
              />
            </div>
            {/*content Section */}
            <div className="flex flex-col justify-center  gap-6 sm:pt-0 mt-[-30px]">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                Welcome to Our Restaurant
              </h1>
              <p className="text-md dark:text-gray-300 text-gray-700 max-w-lg leading-relaxed text-gray-500">
                Discover the best dishes and flavors that will tantalize your
                taste buds. Savor freshly crafted meals prepared with passion
                and attention to detail.
                <br /> From delicious main courses to refreshing drinks and
                sweet desserts, there's something for everyone. Experience rich
                flavors, premium ingredients, and exceptional quality in every
                bite
              </p>
              <div className="flex gap-6 ml-10 mt-5">
                <div>
                  <GrSecure
                    className="text-4xl h-20 w-20
                  shadow-sm p-5 rounded-full bg-red-200 dark:bg-violet-400
                 "
                  />
                </div>
                <div>
                  <IoFastFood
                    className="text-4xl h-20 w-20
                  shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400
                 "
                  />
                </div>
                <div>
                  <GiFoodTruck
                    className="text-4xl h-20 w-20
                  shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400
                 "
                  />
                </div>
              </div>
              <div>
                <button
                  className="p-3 w-40 cursor-pointer text-white text-shadow-lg hover:scale-105 
                duration-300 rounded-2xl bg-primary "
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
