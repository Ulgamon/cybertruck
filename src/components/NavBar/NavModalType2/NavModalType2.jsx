import { NavSideLink } from "../NavModalType1.jsx/NavModalType1";

const NavBarModalType2 = (props) => {
  return (
    <div className="w-1/2 py-32 mx-auto grid grid-cols-3">
      {props.items.map((item) => (
        <div key={item.title}>
          <h5>{item.title}</h5>
          {item.links.map((link) => (
            <NavSideLink key={link.title} url={link.url}>
              {link.title}
            </NavSideLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavBarModalType2;
