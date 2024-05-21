import config from "../config/index.json";

const Footer = () => {
  const { footer, navbar } = config;

  return (
    <footer className="bg-silver text-white">
      <div className="h-[1px] bg-white"></div>

      <div className="grid grid-cols-3 pt-[90px] gap-5 px-64">
        {/* Logo and Description Section */}
        <div>
          <img src={footer.logo} alt="Logo" />

          <p className="pt-[22px] pb-[26px] font-lato font-normal text-[16px] pr-2 leading-5">
            {footer.description}
          </p>
          <button className="bg-silver border border-orange text-orange font-poppins font-semibold py-2.5 px-10 rounded-full mb-[96px]">
            {footer.button}
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="pl-20">
          <h1 className="font-bold text-[20px] font-poppins">QUICK LINKS</h1>
          <ul className="pl-1 pt-3 font-poppins text-[16px] font-normal">
            {navbar.navigation.map(({ title, href, icon }) => (
              <li key={href} className="flex items-center">
                <img src={icon} alt={`${title} icon`} className="pr-6" />
                <a href={href} className="hover:text-light-orange">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="pl-20">
          <h1 className="font-semibold text-[20px] mb-[16px] font-poppins">
            OUR SERVICES
          </h1>

          <div className="flex items-center gap-[7px] pr-10 py-2 font-normal text-[16px] font-lato">
            <img src={navbar.phone.icon} alt="Phone icon" />
            <span>{navbar.phone.title}</span>
          </div>

          <div className="flex items-center gap-[10px] pr-7 py-2 font-normal text-[16px] font-lato">
            <img src={navbar.email.icon} alt="Email icon" />
            <span>{navbar.email.title}</span>
          </div>

          <div className="flex items-center gap-[10px] pr-9 py-2 font-normal text-[16px] font-lato leading-5">
            <img src={navbar.address.icon} alt="Address icon" />
            <span>{navbar.address.title}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white opacity-15"></div>

      <div className="flex justify-between py-4 px-64">
        <span className="font-lato text-[14px] font-bold">
          {footer.otherlinks}
        </span>
        <span className="font-lato text-[14px] font-bold">
          {footer.copyright}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
