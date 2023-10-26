import video from "../../assets/video/performance_video_desktop.mp4";

const VideoComponent = () => {
  return (
    <div className="w-full bg-black">
      <video
        className="w-[95%] max-w-[1240px] mx-auto"
        src={video}
        muted
        autoPlay
        loop={true}
        controls
      ></video>
    </div>
  );
};

export default VideoComponent;
