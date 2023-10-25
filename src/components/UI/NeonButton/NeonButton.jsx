import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const NeonLink = (props) => {
  const [styling, api] = useSpring(
    () => ({
      from: {
        opacity: 1,
        color: "#fff",
        backgroundColor: "transparent",
        config: {
          frequency: 0.06,
        },
      },
    }),
    []
  );

  const hoverHandler = (event) => {
    api.start({
      from: { opacity: 0 },
      to: [
        { opacity: 0, config: { frequency: 0.06 } },
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 1 },
        {
          backgroundColor: "#fff",
          color: "#000",
          config: { frequency: 0.75 },
        },
      ],
    });
  };

  const hoverLeave = () => {
    api.stop();
    api.start({
      from: { opacity: 1, color: "#000", backgroundColor: "#fff" },
      to: { opacity: 1, color: "#fff", backgroundColor: "transparent" },
    });
  };

  return (
    <animated.a
      href={"https://www.tesla.com/cybertruck/design#payment"}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverLeave}
      style={{
        ...styling,
        clipPath:
          "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)",
      }}
      className="bg-transparent text-sm text-white text-bold mb-16 w-[90%] sm:w-1/3 md:w-[264px] relative w-full h-10"
    >
      <div
        className="bg-white text-sm text-bold w-full h-full absolute top-0 start-0"
        style={{
          clipPath:
            "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 0,4px  4px ,4px calc(100% - 4px),calc(100% - 10px - 2px) calc(100% - 4px),calc(100% - 4px) calc(100% - 10px - 2px),calc(100% - 4px) 4px,4px 4px)",
        }}
      />
      <p className="w-full text-center my-2.5">{props.children}</p>
    </animated.a>
  );
};

export default NeonLink;
