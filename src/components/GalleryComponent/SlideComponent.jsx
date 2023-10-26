import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const SlideComponent = ({ images, goToImage, index }) => {
  const [currIndex, setCurrIndex] = useState(index);
  const [styling, api] = useSpring(() => ({}), []);

  useEffect(() => {
    api.stop();
    api.start({
      from: {
        x: currIndex * (12 + 8),
      },
      to: {
        x: index * (12 + 8),
      },
    });
    setCurrIndex(index);
  }, [index]);

  return (
    <div className="w-full relative my-3 flex">
      <animated.div
        style={styling}
        className="w-3 top-0 start-0 h-3 absolute bg-white me-2"
      />
      {images.map((el, indice) => (
        <div
          key={indice}
          value={indice}
          onClick={() => goToImage(indice)}
          className="w-3 h-3 bg-gray-500 me-2 hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default SlideComponent;
