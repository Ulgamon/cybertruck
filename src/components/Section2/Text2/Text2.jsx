import useAnimateOnScrollDown from "../../../assets/hooks/useAnimateOnScrollDown";
import { useSpring, animated } from "@react-spring/web";

const Text2 = ({ title, text }) => {
  const { shouldAnimate, ref, animateReset } = useAnimateOnScrollDown();
  const {
    shouldAnimate: shouldAnimate2,
    ref: ref2,
    animateReset: animateReset2,
  } = useAnimateOnScrollDown();

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
  } else if (animateReset) {
    api.start({
      from: {
        opacity: 0,
        y: 150,
      },
      immediate: true,
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
  } else if (animateReset2) {
    api2.start({
      from: {
        opacity: 0,
        y: 150,
      },
      immediate: true,
    });
  }

  return (
    <div className="w-full z-0 text-white">
      <div className="w-[90%] max-w-[1240px] flex flex-col xl:flex-row xl:items-start mx-auto">
        <animated.h2
          ref={ref}
          style={styling}
          className="text-white text xl:w-1/3 text-bold tracking-widest mb-2 mt-4"
        >
          {title}
        </animated.h2>
        <animated.p
          ref={ref2}
          style={styling2}
          className="xl:w-2/3 leading-5 mb-16 xl:my-4"
        >
          {text}
        </animated.p>
      </div>
    </div>
  );
};

export default Text2;
