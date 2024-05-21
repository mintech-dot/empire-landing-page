import config from "../config/index.json";
const AboutUs = () => {
  const { aboutus } = config;
  return (
    <article className="flex">
      <div className="flex-1 pl-44 pt-28">
        <img src={aboutus.image} alt="" className="h-[723px]" />
      </div>

      <div className="flex-1 pt-[116px] ">
        <h1 className="flex text-orange font-poppins font-bold text-[18px] pb-6 uppercase">
          <img src={aboutus.title_} alt="" className="pt-2.5 pr-1.5" />
          {aboutus.title}
        </h1>

        <h1 className="text-[40px] text-metal font-poppins font-bold uppercase">
          {aboutus.subtitle}
        </h1>

        <p className="text-[15px] font-lato font-medium font-light-silver pt-2 leading-6 pb-16">
          Empire FBA Prep Services In USA &Canada specializes in providing world{" "}
          <br></br>
          class prep solutions for your Amazon FBA business.{" "}
        </p>

        {aboutus.whatwedo.map((section) => (
          <>
            <div className="flex gap-[17px] pr-44  ">
              <img
                src={section.icon}
                alt=""
                className="mt-2.5"
                width="82"
                height="82"
              />
              <div>
                <h1 className="font-poppins font-bold text-[20px] pb-1 ">
                  {section.name}
                </h1>
                <p className="font-lato font-light-silver font-medium text-[15px]">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="border-[1.5px] border-[#ECECEC] w-[557px] mt-[16px] mb-[23px]"></div>
          </>
        ))}
      </div>
    </article>
  );
};

export default AboutUs;
