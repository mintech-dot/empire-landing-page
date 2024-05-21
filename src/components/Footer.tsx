import config from "../config/index.json";
const Footer = () => {
  const { footer } = config;
  const { navbar } = config;
  return (
    <footer className="bg-silver   text-white ">
      <div className="h-[1px] bg-white"></div>

      <div className="grid grid-cols-3 pt-[90px] gap-5 px-64">
        <div>
          <img src={footer.logo} alt="Logo here" />

          <p className="pt-[22px] pb-[26px] font-lato font-normal text-[16px] pr-2 leading-5">
            {footer.description}
          </p>
          <button className="bg-silver border border-orange text-orange font-poppins font-semibold py-2.5 px-10 rounded-full mb-[96px] ">
            {footer.button}
          </button>
        </div>

        <div className="pl-20">
          <h1 className="font-bold text-[20px] font-poppins "> QUICK LINKS</h1>
          <ul className="  pl-1 pt-3 font-poppins text-[16px] font-normal">
              {navbar.navigation.map((navigation) => {
            const { title , href } = navigation;
            return (
              <li key={href} className="flex">
                <img src={navigation.icon} alt="" className="pr-6"/>
                <a href={href} className="hover:text-light-orange">
                  {title}
                </a>
              </li>
            );
          })}
          </ul>
        </div>

        <div className="pl-20 ">
          <h1 className="font-semibold text-[20px] mb-[16px] font-poppins">
            OUR SERVICES
          </h1>
          <div className="flex gap-[7px] pr-10 py-2 font-normal text-[16px] font-lato">
            <img src={navbar.phone.icon} alt="" />

            <h1>{navbar.phone.title}</h1>
          </div>

          <div className="flex gap-[10px] pr-7 py-2 font-normal text-[16px] font-lato">
            <img src={navbar.email.icon} alt="" />

            <h1>{navbar.email.title}</h1>
          </div>

          <div className="flex gap-[10px] pr-9 py-2 font-normal text-[16px] font-lato leading-5">
            <img src={navbar.address.icon} alt="" />
            <h1>{navbar.address.title}</h1>{" "}
          </div>
          <div></div>
        </div>
      </div>
      <div className=" border-white opacity-15 border-[0.1px] "></div>
      <div className="flex py-4 flex-between px-64">
        <h1 className="flex-1 font-lato text-[14px] font-bold">
          {footer.otherlinks}
        </h1>

        <h1 className=" font-lato text-[14px] font-bold ">
          {footer.copyright}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
