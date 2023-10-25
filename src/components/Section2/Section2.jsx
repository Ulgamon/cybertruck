import picture2 from "../../assets/section2/02_Desktop.jpg";
import picture3 from "../../assets/section2/03_Desktop.jpg";
import picture4 from "../../assets/section2/04_Desktop.jpg";
import AnimatedPicture from "./AnimatedPicture/AnimatedPicture";
import ExoskeletonText from "./ExoskeletonText.lsx/ExoskeletonText";
import Text2 from "./Text2/Text2";

const Section2 = () => {
  return (
    <div className="w-full bg-black py-10 min-h-screen">
      <AnimatedPicture imagePath={picture2} />
      <ExoskeletonText />
      <AnimatedPicture imagePath={picture3} />
      <Text2
        title={"ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL"}
        text={
          "If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection."
        }
      />
      <AnimatedPicture imagePath={picture4} />
      <Text2
        title={"TESLA ARMOR GLASS"}
        text={
          "Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance."
        }
      />
    </div>
  );
};

export default Section2;
