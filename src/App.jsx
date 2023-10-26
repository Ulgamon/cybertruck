import "./App.css";
import GalleryComponent from "./components/GalleryComponent/GalleryComponent";
import Hero from "./components/Hero/Hero";
import Section2 from "./components/Section2/Section2";
import { GalleryContextProvider } from "./context/GalleryContext";
import VideoComponent from "./components/VideoComponent/VideoComponent";

function App() {
  return (
    <>
      <GalleryContextProvider>
        <Hero />
        <Section2 />
        <GalleryComponent />
        <VideoComponent />
      </GalleryContextProvider>
    </>
  );
}

export default App;
