import useAnimateOnScrollDown from "../../../assets/hooks/useAnimateOnScrollDown";
import { useSpring, animated } from "@react-spring/web";

const Text2 = ({ title, text }) => {
  const { shouldAnimate, ref } = useAnimateOnScrollDown();

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
        y: 150,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    });
  }

  return (
    <animated.div style={styling} ref={ref} className="w-full z-0 text-white">
      <div className="w-[90%] sm:max-w-[430px] md:max-w-[840px] mx-auto">
        <h2 className="text-white text-2xl text-bold my-4">{title}</h2>
        <p className="text-sm font-semibold text-md my-2 mb-16">{text}</p>
      </div>
    </animated.div>
  );
};

export default Text2;
