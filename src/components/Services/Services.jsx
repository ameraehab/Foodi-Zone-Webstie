import dish1 from "../../assets/foodDishes/dish-1.png";
import coffe1 from "../../assets/foodDishes/coffe-1.png";
import coffe2 from "../../assets/foodDishes/coffe-2.png";

const servicesImages = [
  {
    id: 1,
    img: dish1,
    name: "Broukly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae in quaerat adipisci. Minima error!",
  },

  {
    id: 2,
    img: coffe1,
    name: "Captiono",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum beatae in quaerat adipisci. Minima error!",
  },
  {
    id: 3,
    img: coffe2,
    name: "Ice coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae in quaerat adipisci. Minima error!",
  },
];
const Services = () => {
  return (
    <>
      <div className="py-10  dark:bg-gray-900">
        <div className="container">
          {/*Header section*/}
          <div className="text-center mb-20 mx-auto  ">
            <p
              className="text-xl bg-clip-text text-transparent
             bg-gradient-to-r from-primary to-secondary dark:text-white"
            >
              Our Services
            </p>
            <h1 className="text-4xl font-bold dark:text-primary">Services</h1>
            <p className="text-gray-600 text-sm mt-2 dark:text-white">
              Experience the perfect blend of taste, quality, and exceptional
              service.
            </p>
            {/*Card section*/}
            <div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                  mt-16 place-items-center  "
              >
                {servicesImages.map(({ id, img, name, description }) => {
                  return (
                    <div
                      key={id}
                      className=" mt-5 w-72 bg-orange-50 rounded-2xl p-4 pt-12
    text-center shadow-xl dark:bg-gray-800 group  hover:bg-primary
     hover:text-white duration-300 mb-15 hover:scale-105 text-black cursor-pointer dark:text-white"
                    >
                      <img
                        src={img}
                        alt={name}
                        className="w-32 mx-auto -mt-[110px] 
                        group-hover:scale-105
                       group-hover:rotate-12 duration-300"
                      />

                      <div className="px-3 pb-4">
                        <h2 className="text-xl font-bold ">{name}</h2>
                        <p
                          className="dark:text-white text-gray-500 text-sm   
                        line-clamp-5 mt-2"
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
