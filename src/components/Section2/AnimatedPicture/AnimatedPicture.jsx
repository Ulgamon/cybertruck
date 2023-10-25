import useAnimateOnScrollDown from "../../../assets/hooks/useAnimateOnScrollDown";
import { useSpring, animated } from "@react-spring/web";

const AnimatedPicture = ({ imagePath }) => {
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
    <animated.div
      style={styling}
      className="w-full md:w-[90%] lg:w-5/6 xl:w-full 2xl:w-5/6 mx-auto"
      ref={ref}
    >
      <img src={imagePath} alt={imagePath} />
    </animated.div>
  );
};

export default AnimatedPicture;
