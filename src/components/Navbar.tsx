import config from "../config/index.json";
const Navbar = () => {
  const { navbar } = config;
  return (
    <nav>
      {/* Top section with contact information and booking button */}
      <div className="pt-[10px] pb-[9px] flex items-end justify-end text-base font-lato text-metal lg:px-64 md:px-4 sm:px-4">
        {/* Address section */}
        <div className="flex gap-[9.6px] pr-9 py-2.5">
          <img src={navbar.address.icon} alt="map icon" />
          <h1>{navbar.address.title}</h1>
        </div>

        {/* Email section */}
        <div className="flex gap-[10px] pr-7 py-2.5">
          <img src={navbar.email.icon} alt="email icon" />
          <h1>{navbar.email.title}</h1>
        </div>

        {/* Phone section */}
        <div className="flex gap-[7px] pr-10 py-2.5 font-semibold">
          <img src={navbar.phone.icon} alt="phone icon" />
          <h1>{navbar.phone.title}</h1>
        </div>

        {/* Book Now button */}
        <button className="bg-orange hover:bg-orange-hover text-white font-poppins font-semibold py-2.5 px-10 rounded-full">
          {navbar.button}
        </button>
      </div>

      {/* Bottom section with logo and navigation links */}
      <div className="flex items-end justify-end h-[74px] pr-[260px] bg-metal">
        {/* Logo */}
        <div>
          <img src={navbar.logo} alt="empire logo" />
        </div>

        {/* Navigation links */}
        <ul className="flex text-white font-semibold pl-[180px] font-poppins text-[18px] gap-10 py-6">
          {navbar.navigation.map((navigation) => {
            const { title, href } = navigation;
            return (
              <li key={href}>
                <a href={href} className="hover:text-light-orange">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
