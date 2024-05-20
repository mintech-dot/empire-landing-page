import map from "../assets/map.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
const Ourservices = () => {
  return (
    <section className="bg-metal relative">
      <img src={map} alt="" className="mx-auto " />

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
          Our Services: Empire FBA Prep Services In USA &amp; Canada specializes
          in providing world class prep solutions for your Amazon FBA business.
          Whether you are new to Amazon or need a 3rd party logistics specialist
          to help scale your growing business we have solutions to meet all of
          your FBA prep needs large or small.
        </p>
      </div>

      <div className="absolute -bottom-[90px] px-[229px] flex justify-center items-center gap-7 ">
        <div className=" border-1 bg-white rounded-lg shadow-lg  w-[362px] h-[374px] p-3.5 text-center">
          <img src={product1} alt="" className="relative bottom-[120px] " />
          <div className="relative bottom-[85px] px-4">
            <h1 className=" text-[24px] text-silver font-poppins font-bold">
              Labeling
            </h1>

            <p className="font-lato font-light-silver leading-7 font-medium text-[15px] pt-2 pb-[22px]">
              Every unit, carton and pallet will be labeled by us as required.
              Rest easy knowing your shipments will arrive at their designated
              fulfillment centers as scheduled and on time
            </p>

            <a
              href="#"
              className="text-orange underline font-poppins text-[14px] font-semibold"
            >
              {" "}
              READ MORE
            </a>
          </div>
        </div>
        <div className=" border-1 bg-white rounded-lg shadow-lg  w-[362px] h-[374px] p-3.5 text-center">
          <img src={product2} alt="" className="relative bottom-[120px] " />
          <div className="relative bottom-[85px] px-4">
            <h1 className=" text-[24px] text-silver font-poppins font-bold">
              Bubble Wrap
            </h1>

            <p className="font-lato font-light-silver leading-7 font-medium text-[15px] pt-2 pb-[22px]">
              It’s crucial for inventory to arrive in pristine condition. All
              items will be carefully bubble wrapped and poly bagged as
              necessary to guarantee safe delivery
            </p>

            <a
              href="#"
              className="text-orange underline font-poppins text-[14px] font-semibold"
            >
              {" "}
              READ MORE
            </a>
          </div>
        </div>
        <div className=" border-1 bg-white rounded-lg shadow-lg  w-[362px] h-[374px] p-3.5 text-center">
          <img src={product3} alt="" className="relative bottom-[120px] " />
          <div className="relative bottom-[85px] px-4">
            <h1 className=" text-[24px] text-silver font-poppins font-bold">
              BUNDLING
            </h1>

            <p className="font-lato font-light-silver leading-7 font-medium text-[15px] pt-2 pb-[22px]">
              You’ve built the perfect bundle for your customers and every
              detail counts. Bundles will be packed by us according to current
              specifications as required by Amazon
            </p>

            <a
              href="#"
              className="text-orange underline font-poppins text-[14px] font-semibold"
            >
              {" "}
              READ MORE
            </a>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Ourservices;
