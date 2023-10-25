import NavBar from "../NavBar/NavBar";
import pcImg from "../../assets/hero/Desktop.avif";
import mobileImg from "../../assets/hero/Mobile.avif";
import cybertruck from "../../assets/hero/cybertruck.svg";
import NeonButton from "../UI/NeonButton/NeonButton";
const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-between w-full h-screen"
      style={{
        backgroundImage: `url(${pcImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <div>
        <h1 className="w-fit">
          <div
            className="pt-28 w-96 mx-auto"
            style={{
              backgroundImage: `url(${cybertruck})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </h1>
        <p className="w-full px-6 pb-3.5 pt-1.5 text-xs text-center">
          BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
        </p>
      </div>

      <NeonButton>ORDER NOW</NeonButton>
    </div>
  );
};

export default Hero;
