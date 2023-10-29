import video from "../../assets/video/performance_video_desktop.mp4";
import Text2 from "../Section2/Text2/Text2";

const VideoComponent = () => {
  return (
    <div className="w-full py-10 bg-black">
      <video
        className="w-[95%] max-w-[1240px] mx-auto"
        src={video}
        muted
        autoPlay
        loop={true}
        controls
      ></video>
      <Text2
        title={<p className="text-2xl glow">PERFORMANCE AND EFFICIENCY</p>}
        text={
          "Now entering a new class of strength, speed and versatility—only possible with an all-electric design. The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range."
        }
      />
    </div>
  );
};

export default VideoComponent;
