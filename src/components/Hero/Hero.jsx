import bgImg from "../../assets/foodDishes/backgraundHeroSection.png";
import Dish1 from "../../assets/foodDishes/dish-1.png";
import Dish2 from "../../assets/foodDishes/dish-2.png";
import Dish3 from "../../assets/foodDishes/dish-3.png";
import { useState } from "react";
const ImageList = [
  {
    id: 1,
    img: Dish1,
  },
  {
    id: 2,
    img: Dish2,
  },
  {
    id: 3,
    img: Dish3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(Dish1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[500px] sm:min-h-[600px]
     bg-gray-100 dark:bg-gray-950
      dark:text-white duration-200 flex justify-center items-center "
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              className="flex flex-col justify-center sm:text-left  
text-center gap-4 pt-12 sm:pt-0 order-2 sm:order-1"
            >
              <h1
                className="text-5xl  lg:text-7xl sm:ml-5 sm:mt-8 
   font-bold"
              >
                Welcom to the Foodie Zone
              </h1>
              <p className="text-md sm:ml-5 sm:mt-5">
                Discover the best food in town
              </p>
              <button
                className="bg-gradient-to-r from-primary
    to-secondary text-white px-4 py-2 w-70  sm:ml-5 ml-[23%]
    rounded-full duration-200 cursor-pointer hover:scale-105  "
              >
                Order Now
              </button>
            </div>

            {/* image section */}
            <div
              className=" order-1 sm:order-2 min-h-[450px]  
            sm:min-h-[450px] flex justify-center items-center relative"
            >
              {/* main image section */}
              <div
                className="flex justify-center items-center
               h-[300px] lg:w-[655px] sm:h-[525px] overflow-hidden"
              >
                <img
                  src={imageId}
                  alt=""
                  className="w-[300px] md:mr-[-12px] lg:w-[450px] 
                  lg:mt-18 
                  lg:ml-[-104px] sm:w-[380px] 
                  mx-auto animate-spin 
                  [animation-duration:40s]"
                />
              </div>
              {/*  image List section */}
              <div
                className="flex  lg:flex-col lg:right-10
                 md:mr-[-40px] 
                sm:right-15
              sm:-translate-y-1/2  justify-center 
              gap-4 absolute bottom-[-25px] md:bottom-[-50px]
                bg-white/70 rounded-full p-0.5"
              >
                {ImageList.map((image) => (
                  <img
                    key={image.id}
                    src={image.img}
                    alt=""
                    className="max-w-[80px] h-[80px] object-contain 
                    inline-block cursor-pointer duration-200 hover:scale-105
                    "
                    onClick={() => setImageId(image.img)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
