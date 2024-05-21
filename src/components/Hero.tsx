import config from "../config/index.json";
const Hero = () => {
  const { hero } = config;
  return (
    <section className="flex bg-orange w-full font-poppins ">
      {/* Text Content */}
      <div className="pt-[172px] pl-48 pr-8 text-white ">
        <h1 className="font-extrabold text-[80px] uppercase leading-[77px] pr-28">
          Empire <u>FBA</u> <br></br> Prep Services <br></br>
          In USA
        </h1>
        <h2 className="pt-2.5">
          USA & Canada specializes in providing world class prep solutions for{" "}
          <br></br>
          your Amazon FBA business.
        </h2>
        <button className="bg-white my-7 text-orange font-semibold py-2.5 px-10 rounded-full ">
          {hero.button}
        </button>
      </div>

      {/* Image */}
      <div className=" flex justify-end items-end ">
        <img src={hero.image} className="w-[590px]" alt="Hero image" />
      </div>
    </section>
  );
};

export default Hero;
