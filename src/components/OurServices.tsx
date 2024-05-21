import config from "../config/index.json";
const Ourservices = () => {
  const { ourservices } = config;
  return (
    <section className="bg-metal relative">
      <img src={ourservices.background_image} alt="" className="mx-auto " />

      <div className="absolute top-20 ">
        <div className="flex items-center justify-center">
          <h1 className=" text-white font-poppins font-bold text-[40px] uppercase">
            <u className="decoration-orange underline underline-offset-8">
              our
            </u>{" "}
            services
          </h1>
        </div>

        <p className="flex justify-center items-center px-[340px] text-white font-lato text-center font-medium text-[16px]">
          {ourservices.description}
        </p>
      </div>

      <div className="absolute -bottom-[90px] px-[229px] flex justify-center items-center gap-7 ">
        {ourservices.services.map((service) => (
          <>
            <div className=" border-1 bg-white rounded-lg shadow-lg  w-[362px] h-[374px] p-3.5 text-center">
              <img
                src={service.image}
                alt=""
                className="relative bottom-[120px] "
              />
              <div className="relative bottom-[85px] px-4">
                <h1 className=" text-[24px] text-silver font-poppins font-bold">
                  {service.name}
                </h1>

                <p className="font-lato font-light-silver leading-7 font-medium text-[15px] pt-2 pb-[22px]">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="text-orange underline font-poppins text-[14px] font-semibold"
                >
                  {service.button}
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
