import { createContext, useState } from "react";
import { navProductsData } from "../data/navData";
const navBarContext = createContext({
  information: [],
  activeDataIndex: 0,
  changeActiveIndexData: (index) => {},
  canSeeMenu: false,
  closeMenu: () => {},
  openMenu: () => {},
});

export const NavBarContextProvider = (props) => {
  const [canSeeMenu, setCanSeeMenu] = useState(false);
  const [activeDataIndex, setActiveDataIndex] = useState(0);

  const changeActiveIndexData = (index) => {
    if (navProductsData[index]) {
      setActiveDataIndex(index);
    }
  };

  const openMenu = () => {
    setCanSeeMenu(true);
  };

  const closeMenu = () => {
    setCanSeeMenu(false);
  };

  const value = {
    information: navProductsData,
    activeDataIndex: activeDataIndex,
    changeActiveIndexData: changeActiveIndexData,
    canSeeMenu: canSeeMenu,
    closeMenu: closeMenu,
    openMenu: openMenu,
  };

  return (
    <navBarContext.Provider value={value}>
      {props.children}
    </navBarContext.Provider>
  );
};

export default navBarContext;
