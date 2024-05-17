import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="flex bg-orange w-full font-poppins ">
      <div className="pt-[172px] pl-48 pr-8 text-white ">
        <h1 className="font-extrabold text-[80px] uppercase leading-[77px] pr-28">
          Empire <u>FBA</u> <br></br> Prep Services <br></br>
          In USA
        </h1>
        <h1 className="pt-2.5">
          USA & Canada specializes in providing world class prep solutions for{" "}
          <br></br>
          your Amazon FBA business.
        </h1>
        <button className="bg-white my-7 text-orange font-poppins font-semibold py-2.5 px-10 rounded-full ">
          Contact Us
        </button>
      </div>

      <div className=" flex justify-end items-end ">
        <img src={hero} className="w-[590px]" alt="" />
      </div>
    </section>
  );
};

export default Hero;
