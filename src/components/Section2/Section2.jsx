import picture2 from "../../assets/section2/02_Desktop.jpg";
import AnimatedPicture from "./AnimatedPicture/AnimatedPicture";

const Section2 = () => {
  return (
    <div className="w-full bg-black py-10 min-h-screen">
      <AnimatedPicture imagePath={picture2} />
    </div>
  );
};

export default Section2;
