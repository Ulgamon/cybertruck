import cybertruck from "../../assets/footer/Cybertruck_Logo_Global.avif";
import cyberPic from "../../assets/footer/Cybertruck_Order_Hero_Global.avif";
import NeonLink from "../UI/NeonLink/NeonLink";

const Footer = () => {
  return (
    <div className="w-full z-10 bg-black">
      <div className="grid md:grid-cols-2">
        <div className="w-full flex flex-col">
          <div
            style={{
              backgroundImage: `url(${cybertruck})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className="w-full col-span-1 h-32 max-w-[268px]"
          />
          <NeonLink>ORDER NOW</NeonLink>
        </div>
        <img className="w-full mx-auto" src={cyberPic} alt="cybertruck" />
      </div>
      <footer className="flex text-sm text-center flex-col sm:flex-row flex-wrap text-white justify-center content-center sm:pb-7">
        <a className="sm:m-2 mb-2 " href="https://www.tesla.com/about">
          Tesla © 2023
        </a>
        <a className="sm:m-2 mb-2 " href="https://www.tesla.com/about">
          Privacy & Legal
        </a>
        <a className="sm:m-2 mb-2 " href="https://www.tesla.com/about">
          Vehicle Recalls
        </a>
        <a
          className="sm:m-2 mb-2 hidden sm:block"
          href="https://www.tesla.com/about"
        >
          Contact
        </a>
        <a className="sm:m-2 mb-2 " href="https://www.tesla.com/about">
          News
        </a>
        <a
          className="sm:m-2 mb-2 hidden sm:block"
          href="https://www.tesla.com/about"
        >
          Get Updates
        </a>
        <a
          className="sm:m-2 hidden sm:block"
          href="https://www.tesla.com/about"
        >
          Locations
        </a>
      </footer>
    </div>
  );
};

export default Footer;
