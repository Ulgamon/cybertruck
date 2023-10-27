import useAnimateOnScrollDown from "../../../hooks/useAnimateOnScrollDown";
import { useSpring, animated } from "@react-spring/web";

const Text2 = ({ title, text }) => {
  const { shouldAnimate, ref } = useAnimateOnScrollDown();
  const { shouldAnimate: shouldAnimate2, ref: ref2 } = useAnimateOnScrollDown();

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

  const [styling2, api2] = useSpring(
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

  if (shouldAnimate2) {
    // console.log(shouldAnimate, "INSIDE COMPONENT");
    api2.start({
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
    <div className="w-full z-0 text-white">
      <div className="w-[90%] max-w-[1240px] flex flex-col xl:flex-row xl:items-start mx-auto">
        <animated.h2
          ref={ref}
          style={styling}
          className="text-white text-2xl xl:w-1/3 text-bold my-4"
        >
          {title}
        </animated.h2>
        <animated.p
          ref={ref2}
          style={styling2}
          className="text-sm font-semibold xl:w-2/3 text-md my-2 xl:my-4 mb-16"
        >
          {text}
        </animated.p>
      </div>
    </div>
  );
};

export default Text2;
