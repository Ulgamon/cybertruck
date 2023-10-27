const NavLink = (props) => {
  return (
    <button className="font-semibold px-4 py-0.5 rounded transition-colors delay-200 ease-linear hover:bg-buttonHover">
      <p className="mb-0.5">{props.children}</p>
    </button>
  );
};

export default NavLink;
