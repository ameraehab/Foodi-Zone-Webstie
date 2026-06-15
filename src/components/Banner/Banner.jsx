import food from "../../assets/foodDishes/banner.png";

const Banner = () => {
  return (
    <>
      <div className="h-137.5 ">
        <div data-aos="slide-up" data-aos-duration="300" className=" container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/*image Section */}
            <div>
              <img
                src={food}
                alt="Banner"
                className="w-[430px] 
              mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
