import NavBar from "../NavBar/NavBar";
import pcImg from "../../assets/hero/Desktop.avif";
import mobileImg from "../../assets/hero/Mobile.avif";
import cybertruck from "../../assets/hero/cybertruck.svg";
import NeonLink from "../UI/NeonLink/NeonLink";
const Hero = () => {
  return (
    <div className="relative hero flex flex-col items-center justify-between w-full h-screen">
      <NavBar />
      <div>
        <h1 className="w-full">
          {/* <div
            className="h-28 max-w-[723px] mx-auto"
            style={{
              backgroundImage: `url(${cybertruck})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          /> */}
          <img className="mx-auto px-5 h-28" src={cybertruck} alt={cybertruck} />
        </h1>
        <p className="w-full px-6 pb-80 pt-1.5 text-xs text-center">
          BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
        </p>
      </div>

      <NeonLink>ORDER NOW</NeonLink>
    </div>
  );
};

export default Hero;
