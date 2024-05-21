import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import map from "../assets/map.svg";
import { routes } from "../routes";
const Navbar = () => {
  return (
    <nav>
      <div className="pt-[10px] pb-[9px] flex items-end justify-end text-base font-lato text-metal lg:px-64 md:px-4 sm:px-4">
        <div className="flex gap-[9.6px] pr-9 py-2.5 ">
          <img src={map} alt="map icon" />
          <h1>California: 4010 Valley Blvd Ste 108, Walnut, CA 91789</h1>
        </div>

        <div className="flex gap-[10px] pr-7 py-2.5">
          <img src={mail} alt="email icon" />
          <h1>info@empireprepservices.com</h1>
        </div>

        <div className="flex gap-[7px] pr-10 py-2.5 font-semibold">
          <img src={phone} alt="phone icon" />
          <h1>1 (877) 618-0069</h1>
        </div>

        <button className="bg-orange hover:bg-orange-hover text-white font-poppins font-semibold py-2.5 px-10 rounded-full ">
          Book Now
        </button>
      </div>

      <div className="flex items-end justify-end h-[74px] pr-[260px]  bg-metal">
        <div>
          <img src={logo} alt="empire logo" />
        </div>

        <div className="flex  text-white font-semibold pl-[180px] font-poppins text-[18px] gap-10 py-6 ">
        {routes.map((route) => {
        const { href, title } = route;
        return (
          <div>
            <a
              href={href}
              className="hover:text-light-orange"
            >
              {title}
            </a>
          </div>
        );
      })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
