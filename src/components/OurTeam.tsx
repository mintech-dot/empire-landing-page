import config from "../config/index.json";
const OurTeam = () => {
  const { ourteam } = config;
  return (
    <section className="bg-orange ">
      <h1 className="text-center text-white font-poppins font-bold text-[40px] pt-[85px] pb-4">
        {ourteam.title}
      </h1>

      <div className="px-72">
        <p className="text-center text-white font-lato font-medium text-[16px] px-36">
          {ourteam.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-3 px-64">
        <div className="flex-1 pt-[73px] pr-[117px]">
          <img src={ourteam.avatar1} alt="" />
          <h1 className="text-white font-poppins text-[18px] font-bold text-center">
            {" "}
            Larry Stuber
          </h1>
          <h1 className="text-white font-poppins text-[16px] font-medium text-center">
            East Coast Account Manager
          </h1>
        </div>
        <div className="flex-1 bg-white rounded-xl mt-[52px] mb-[104px] ">
          <img src={ourteam.avatar2} className=" pt-[43px] px-[87px]" alt="" />
          <h1 className="text-center font-bold text-[18px] pt-[26px] pb-[8px]">
            John Soos
          </h1>
          <h1 className="text-center text-orange font-poppins text-[16px] font-medium pb-[40px] uppercase">
            Chief Operating Officer
          </h1>
        </div>
        <div className="flex-1 pt-[73px] pl-[117px]">
          <img src={ourteam.avatar3} alt="" />
          <h1 className="text-white font-poppins text-[18px] font-bold text-center">
            {" "}
            Nima Hassanpour
          </h1>
          <h1 className="text-white font-poppins text-[16px] font-medium text-center">
            President
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
