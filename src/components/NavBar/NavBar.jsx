import logo from "../../assets/hero/tesla-logo.svg";
import NavLink from "../UI/NavLink/NavLink";
import NavElement from "./NavBarOverlay/NavBarOverlay";
import { decider } from "../../data/navData";
import navBarContext from "../../context/NavBarContext";
import { useContext } from "react";
import help from "../../assets/hero/help.svg";
import person from "../../assets/hero/person.svg";
import web from "../../assets/hero/web.svg";
import { useTransition, animated } from "@react-spring/web";

const NavBar = () => {
  const {
    activeDataIndex,
    canSeeMenu,
    changeActiveIndexData,
    information,
    closeMenu,
    openMenu,
  } = useContext(navBarContext);

  const transitions = useTransition(activeDataIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: {
        duration: 200
    },
  });

  return (
    <>
      <nav className="flex w-full pt-3.5 flex-row z-40 content-center justify-between text-navText">
        <a href="https://www.tesla.com/">
          <img className="w-36 ms-8 px-3 py-2" src={logo} alt="tesla logo" />
        </a>
        <ul className="flex">
          {information.map((el, index) => (
            <li
              onMouseEnter={() => {
                openMenu();
                changeActiveIndexData(index);
              }}
              key={el.title}
            >
              <NavLink>{el.title}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center me-8">
          <li className="mx-0.5">
            <a href="https://www.tesla.com/support">
              <div className="p-1 rounded transition-colors	delay-200 ease-linear hover:bg-buttonHover">
                <div
                  className="w-6 h-6"
                  style={{
                    backgroundImage: `url(${help})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </a>
          </li>
          <li className="mx-0.5">
            <a href="https://www.tesla.com/support">
              <div className="p-1 rounded transition-colors	delay-200 ease-linear hover:bg-buttonHover">
                <div
                  className="w-6 h-6"
                  style={{
                    backgroundImage: `url(${web})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </a>
          </li>
          <li className="mx-0.5">
            <a href="https://www.tesla.com/support">
              <div className="p-1 rounded transition-colors	delay-200 ease-linear hover:bg-buttonHover">
                <div
                  className="w-6 h-6"
                  style={{
                    backgroundImage: `url(${person})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <NavElement closeMenu={closeMenu}>
        {transitions((styles, index) => (
          <animated.div key={index} style={styles}>
            {decider(information[index])}
          </animated.div>
        ))}
      </NavElement>
    </>
  );
};

export default NavBar;
