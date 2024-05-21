import config from "../config/index.json";

const AboutUs = () => {
  const { aboutus } = config;

  return (
    <article className="flex">
      <div className="flex-1 pl-44 pt-28">
        <img src={aboutus.image} alt="About Us" className="h-[723px]" />
      </div>

      <div className="flex-1 pt-[116px]">
        <header className="flex items-center text-orange font-poppins font-bold text-[18px] pb-6 uppercase">
          <img src={aboutus.title_} alt="Icon" className="pt-2.5 pr-1.5" />
          {aboutus.title}
        </header>

        <h2 className="text-[40px] text-metal font-poppins font-bold uppercase">
          {aboutus.subtitle}
        </h2>

        <p className="text-[15px] font-lato font-medium text-light-silver pt-2 leading-6 pb-16">
          Empire FBA Prep Services in USA & Canada specializes in providing
          world-class prep solutions for your Amazon FBA business.
        </p>

        {aboutus.whatwedo.map((section, index) => (
          <div key={index} className="mb-[23px]">
            <div className="flex gap-[17px] pr-44">
              <img
                src={section.icon}
                alt={`${section.name} Icon`}
                className="mt-2.5"
                width="82"
                height="82"
              />
              <div>
                <h3 className="font-poppins font-bold text-[20px] pb-1">
                  {section.name}
                </h3>
                <p className="font-lato font-medium text-light-silver text-[15px]">
                  {section.description}
                </p>
              </div>
            </div>
            {index < aboutus.whatwedo.length - 1 && (
              <hr className="border-[1.5px] border-[#ECECEC] w-[557px] mt-[16px]" />
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default AboutUs;
