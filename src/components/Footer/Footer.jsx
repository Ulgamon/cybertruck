import cybertruck from "../../assets/footer/Cybertruck_Logo_Global.avif";
import cyberPic from "../../assets/footer/Cybertruck_Order_Hero_Global.avif";
import NeonLink from "../UI/NeonLink/NeonLink";
import { useSpring, animated } from "@react-spring/web";
import useAnimateOnScrollDown from "../../assets/hooks/useAnimateOnScrollDown";

const Footer = () => {
  const { shouldAnimate, ref, animateReset } = useAnimateOnScrollDown();
  const [styling, api] = useSpring(
    () => ({
      from: {
        opacity: 0,
        y: 150,
      },
      config: {
        mass: 10,
        friction: 120,
      },
    }),
    []
  );

  if (shouldAnimate) {
    // console.log(shouldAnimate, "INSIDE COMPONENT");
    api.start({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    });
  } else if (animateReset) {
    api.start({
      from: {
        opacity: 0,
        y: 150,
      },
      immediate: true,
    });
  }

  return (
    <div className="w-full z-20 bg-black">
      <div className="w-[95%] h-screen content-center mx-auto grid gap-8 md:grid-cols-2">
        <div className="w-full mt-16 lg:px-32 items-center flex flex-col">
          <div
            style={{
              backgroundImage: `url(${cybertruck})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className="w-full mx-auto col-span-1 h-32 max-w-[268px]"
          />
          <animated.div style={styling} ref={ref} className="w-full flex justify-center">
            <NeonLink>ORDER NOW</NeonLink>
          </animated.div>
        </div>
        <img className="w-full mx-auto" src={cyberPic} alt="cybertruck" />
      </div>
      <footer className="flex text-sm text-center flex-col sm:flex-row text-footerLinks flex-wrap text-white justify-center content-center sm:pb-7">
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
