import { createPortal } from "react-dom";
import { useTransition, animated } from "@react-spring/web";
import { useContext, useRef } from "react";
import navBarContext from "../../../context/NavBarContext";
import useMeasure from "react-use-measure";
import close from "../../../assets/hero/close.svg";
import next from "../../../assets/hero/next.svg";
import { decider } from "../../../data/navData";

const Backdrop = () => {
  const { canSeeMenu, closeMenu } = useContext(navBarContext);
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
            onMouseEnter={closeMenu}
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
  const [ref, { height }] = useMeasure();
  const transition = useTransition(canSeeMenu, {
    from: { height: 0, opacity: 0 },
    enter: { height: height, opacity: 1 },
    leave: { height: height - 50, opacity: 0 },
    update: { height: height },
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
  });
  return createPortal(
    transition(
      (styling, isVisible) =>
        isVisible && (
          <div className="h-full">
            <animated.div
              style={styling}
              onMouseLeave={props.closeMenu}
              className="hidden fixed xl:block z-30 top-0 start-0 w-full overflow-hidden bg-white"
            >
              <div ref={ref}>{props.children}</div>
            </animated.div>
          </div>
        )
    ),
    document.getElementById("nav-modal")
  );
};

const MobileNav = () => {
  const {
    canSeeMobileMenu,
    closeMobileMenu,
    information,
    canSeeMenu,
    activeDataIndex,
    closeMenu,
    openMenu,
    changeActiveIndexData,
  } = useContext(navBarContext);
  const transition = useTransition(canSeeMobileMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    transition(
      (styling, showElement) =>
        showElement && (
          <animated.div
            style={styling}
            className="fixed z-50 bg-white top-0 start-0 w-full h-full overflow-y-auto"
          >
            <div className="w-full fixed flex justify-around me-0 start-0 overflow-y-auto top-0 bg-white">
              {canSeeMenu && (
                <>
                  <button
                    onClick={closeMenu}
                    className="m-4 hover:bg-buttonHover rounded"
                  >
                    <img
                      className="w-4 h-4 m-2 rotate-180"
                      src={next}
                      alt="previous button"
                    />
                  </button>
                  <p className="font-semibold mx-auto my-4">
                    {information[activeDataIndex].title}
                  </p>
                </>
              )}
              {canSeeMenu && <button
                onClick={closeMobileMenu}
                className="m-4 hover:bg-buttonHover rounded"
              >
                <img className="w-6 h-6 m-1" src={close} alt="close button" />
              </button>}
              {!canSeeMenu && <button
                onClick={closeMobileMenu}
                className="m-4 ms-auto hover:bg-buttonHover rounded"
              >
                <img className="w-6 h-6 m-1" src={close} alt="close button" />
              </button>}
            </div>
            {!canSeeMenu && (
              <ul className="pt-16">
                {information.map((el, index) => (
                  <li className="w-full my-3 px-3" key={el.title}>
                    <button
                      className="w-full py-3 flex justify-between text-start px-3 rounded font-semibold text-xl text-navText hover:bg-buttonHover"
                      onClick={() => {
                        openMenu();
                        changeActiveIndexData(index);
                      }}
                    >
                      <p> {el.title}</p>
                      <img
                        className="w-4 h-4 my-2"
                        src={next}
                        alt="next-icon"
                      />
                    </button>
                  </li>
                ))}
                <li className="w-full my-3 px-3">
                  <a href="https://www.tesla.com/support">
                    <p className="w-full py-3 text-start px-3 rounded font-semibold text-xl text-navText hover:bg-buttonHover">
                      Support
                    </p>
                  </a>
                </li>
                <li className="w-full my-3 px-3">
                  <a href="https://www.tesla.com/support">
                    <p className="w-full py-3 text-start px-3 rounded font-semibold text-xl text-navText hover:bg-buttonHover">
                      United States
                    </p>
                  </a>
                </li>
                <li className="w-full my-3 px-3">
                  <a href="https://www.tesla.com/support">
                    <p className="w-full py-3 text-start px-3 rounded font-semibold text-xl text-navText hover:bg-buttonHover">
                      Account
                    </p>
                  </a>
                </li>
              </ul>
            )}
            {canSeeMenu && decider(information[activeDataIndex])}
          </animated.div>
        )
    ),
    document.getElementById("nav-mobile")
  );
};

const NavElement = (props) => {
  return (
    <>
      <MobileNav />
      <NavBarOverlay closeMenu={props.closeMenu}>
        {props.children}
      </NavBarOverlay>
      <Backdrop />
    </>
  );
};

export default NavElement;
