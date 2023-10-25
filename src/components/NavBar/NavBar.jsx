import logo from "../../assets/hero/tesla-logo.svg";

const NavBar = () => {
  return (
    <nav className="flex flex-row">
      <a href="">
        <img className="w-36 px-3 py-2" src={logo} alt="tesla logo" />
      </a>
    </nav>
  );
};

export default NavBar;
