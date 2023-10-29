import { useTransition, animated } from "@react-spring/web";
import usePushNeonLink from "../../assets/hooks/usePushNeonLink";
import NeonLink from "../UI/NeonLink/NeonLink";

const AnimatedLink = () => {
  const showAnimatedLink = usePushNeonLink();

  const transition = useTransition(showAnimatedLink, {
    from: { y: -100 },
    enter: { y: 0 },
    leave: { y: -100 },
  });

  return transition(
    (styling, show) =>
      show && (
        <animated.div
          style={styling}
          className="fixed bg-black backdrop-blur bg-transparent1 z-50 top-0 start-0 w-full"
        >
          <div className="w-full m-4 opacity-100 relative pe-10 flex flex-col items-end">
            <NeonLink>ORDER NOW</NeonLink>
          </div>
        </animated.div>
      )
  );
};

export default AnimatedLink;
