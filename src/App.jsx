import "./App.css";
import GalleryComponent from "./components/GalleryComponent/GalleryComponent";
import Hero from "./components/Hero/Hero";
import Section2 from "./components/Section2/Section2";
import { GalleryContextProvider } from "./context/GalleryContext";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import Footer from "./components/Footer/Footer";
import { NavBarContextProvider } from "./context/NavBarContext";

function App() {
  return (
    <>
      <NavBarContextProvider>
        <GalleryContextProvider>
          <Hero />
          <Section2 />
          <GalleryComponent />
          <VideoComponent />
          <Footer />
        </GalleryContextProvider>
      </NavBarContextProvider>
    </>
  );
}

export default App;
