import config from "../config/index.json";

const GetStarted = () => {
  const { getstarted } = config;

  return (
    <section>
      <div className="container px-[229px] py-24 mx-auto pt-[166px]">
        <div className="text-center mb-20">
          <h1 className="text-[40px] font-bold font-poppins text-metal">
            {getstarted.title}
          </h1>
          <h2 className="text-[18px] font-poppins font-semibold text-metal pt-4">
            {getstarted.subtitle}
          </h2>
          <p className="text-[16px] mx-auto font-lato text-silver pt-3.5 pb-7 px-8">
            {getstarted.description}
          </p>
          <button className="bg-orange text-white font-poppins font-semibold py-2.5 px-7 rounded-full">
            {getstarted.button}
          </button>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6 leading-5">
          {getstarted.features.map((feature, index) => (
            <div
              key={index}
              className="p-4 md:w-1/3 flex flex-col text-center items-center"
            >
              <img src={feature.icon} alt={feature.title} className="pb-6" />
              <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <div className="flex-grow px-6">
                  <h3 className="text-[18px] font-poppins font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] font-lato text-light-silver1 px-8">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
