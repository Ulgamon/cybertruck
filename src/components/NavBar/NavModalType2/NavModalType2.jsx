import { NavSideLink } from "../NavModalType1.jsx/NavModalType1";

const NavBarModalType2 = (props) => {
  return (
    <div className="mx-3 xl:w-1/2 pt-16 xl:py-32 xl:mx-auto xl:grid gap-0 xl:grid-cols-3">
      {props.items.map((item) => (
        <div key={item.title}>
          <h5 className="text-gray-500 hidden xl:block">{item.title}</h5>
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
