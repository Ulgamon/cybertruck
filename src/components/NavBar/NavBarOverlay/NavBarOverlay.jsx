import { createPortal } from "react-dom";
import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import navBarContext from "../../../context/NavBarContext";

const Backdrop = () => {
  const { canSeeMenu } = useContext(navBarContext);
  const transition = useTransition(canSeeMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return createPortal(
    transition(
      (styling, isVisible) =>
        isVisible && (
          <animated.div
            style={styling}
            className="fixed z-20 backdrop-blur-sm top-0 start-0 h-screen w-full"
          />
        )
    ),
    document.getElementById("backdrop")
  );
};

// Navbar overlay needs to adjust its height according to height of elements it contains
const NavBarOverlay = (props) => {
  const { canSeeMenu } = useContext(navBarContext);
  const transition = useTransition(canSeeMenu, {
    from: { height: 0 },
    enter: { height: "auto" },
    leave: { height: 0 },
    update: { height: "auto" },
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
  });
  return createPortal(
    transition(
      (styling, isVisible) =>
        isVisible && (
          <animated.div
            style={styling}
            onMouseLeave={props.closeMenu}
            className="fixed z-30 top-0 start-0 w-full bg-white"
          >
            {props.children}
          </animated.div>
        )
    ),
    document.getElementById("nav-modal")
  );
};

const NavElement = (props) => {
  return (
    <>
      <NavBarOverlay closeMenu={props.closeMenu}>
        {props.children}
      </NavBarOverlay>
      <Backdrop />
    </>
  );
};

export default NavElement;
