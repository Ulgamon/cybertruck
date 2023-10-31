import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import galleryContext from "../../context/GalleryContext";
import SlideComponent from "./SlideComponent";

const TransitionComponent = (props) => {
  const transitions = useTransition(props.index, {
    from: { opacity: 0.7 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      mass: 5,
    },
    exitBeforeEnter: true,
  });

  return transitions((styles, item) => (
    <animated.div
      key={item}
      style={{
        backgroundImage: `url(${props.images[item].imageUri})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...styles,
      }}
      className="w-full pb-[56%] md:pb-[42%]"
    />
    // <animated.img
    //   style={styles}
    //   className="w-full  py-16"
    //   src={props.images[item].imageUri}
    //   alt={props.images[item].imageUri}
    // />
  ));
};

const TextTransitionComponent = (props) => {
  const transitions = useTransition([props.index], {
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      mass: 4,
    },
    exitBeforeEnter: true,
  });

  return transitions((styles, item) => (
    <animated.div key={item} style={styles} className="text-white h-[300px]">
      <h1 className="my-5">{props.images[item].title}</h1>
      <p>{props.images[item].text}</p>
    </animated.div>
  ));
};

const GalleryComponent = () => {
  const { images, currentImageIndex, goToImage } = useContext(galleryContext);
  return (
    <div className="w-full bg-black">
      <TransitionComponent images={images} index={currentImageIndex} />
      <div className="w-[90%] lg:w-1/ max-w-[606px] mx-auto">
        <SlideComponent
          images={images}
          index={currentImageIndex}
          goToImage={goToImage}
        />
        <div className="font-bold text-xl text-white">VERSATILE UTILITY</div>
        <TextTransitionComponent images={images} index={currentImageIndex} />
      </div>
    </div>
  );
};

export default GalleryComponent;
