import { createContext } from "react";

const navBarContext = createContext({
  information: [],
  canSeeMenu: false,
  closeMenu: () => {},
  openMenu: () => {},
});

const NavBarContextProvider = (props) => {
  return <navBarContext.Provider>{props.children}</navBarContext.Provider>;
};
