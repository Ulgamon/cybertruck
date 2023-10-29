import { createContext, useState, useEffect, useCallback } from "react";
import gal1 from "../assets/gallery/05_Desktop.avif";
import gal2 from "../assets/gallery/06_Desktop.avif";
import gal3 from "../assets/gallery/07_Desktop.jpg";
import gal4 from "../assets/gallery/08_Desktop.jpg";
import gal5 from "../assets/gallery/09_Desktop.jpg";
import gal6 from "../assets/gallery/10_Desktop.jpg";

const galleryContext = createContext({
  images: [],
  nextImage: () => {},
  currentImageIndex: 0,
  goToImage: (index) => {},
});

export const GalleryContextProvider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      imageUri: gal1,
      text: "With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built, engineered with 100 cubic feet of exterior, lockable storage — including a magic tonneau cover that is strong enough to stand on.",
    },
    {
      imageUri: gal2,
      title: "VAULT-LIKE STORAGE",
      text: "Space for your toolbox, tire and Cyberquad, with room to spare. Utilize 100 cubic feet of exterior, lockable storage — including the under-bed, frunk and sail pillars.",
    },
    {
      imageUri: gal3,
      title: "RUGGED STRENGTH",
      text: "With the ability to pull near infinite mass and a towing capability of over 14,000 pounds, Cybertruck can perform in almost any extreme situation with ease.",
    },
    {
      imageUri: gal4,
      title: "ADAPTIVE AIR SUSPENSION",
      text: "Raise and lower suspension four inches in either direction for easy access to Cybertruck or the vault, while self-leveling capabilities adapt to any occasion and assist with every job.",
    },
    {
      imageUri: gal5,
      title: "FLEXIBLE INTERIOR",
      text: "Seat six comfortably with additional storage under the second-row seats. Complete with an advanced 17” touchscreen with an all-new customized user interface.",
    },
    {
      imageUri: gal6,
      title: "AWESOME ADAPTABILITY",
      text: "From rugged to refined, Cybertruck is completely adaptable for your needs. Prepare for every experience with a versatile utilitarian design — including on-board power and compressed air.",
    },
  ];

  const nextImage = useCallback(() => {
    if (currentIndex + 1 >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  }, [currentIndex, setCurrentIndex]);

  const goToImage = useCallback(
    (index) => {
      if (images[index]) {
        setCurrentIndex(index);
      }
    },
    [setCurrentIndex]
  );

  useEffect(() => {
    const timeoutFn = window.setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      window.clearInterval(timeoutFn);
    };
  }, [nextImage, currentIndex, goToImage]);

  const value = {
    images: images,
    nextImage: nextImage,
    currentImageIndex: currentIndex,
    goToImage: goToImage,
  };

  return (
    <galleryContext.Provider value={value}>
      {props.children}
    </galleryContext.Provider>
  );
};

export default galleryContext;
