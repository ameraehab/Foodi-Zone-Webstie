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
      <div className="py-10">
        <div className="container">
          {/*Header section*/}
          <div
            className="text-center mb-20 
          max-w-100  mx-auto "
          >
            <p
              className="text-xl bg-clip-text text-transparent
             bg-gradient-to-r from-primary to-secondary"
            >
              Our Services
            </p>
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis a facilis similique saepe minima perspiciatis iure illo
              iusto nam mollitia?
            </p>
            {/*Card section*/}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
