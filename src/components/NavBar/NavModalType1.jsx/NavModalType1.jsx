const NavSmallLink = (props) => {
  return (
    <a className="text-gray-500 mx-2 text-sm hover:underline" href={props.url}>
      {props.children}
    </a>
  );
};

export const NavSideLink = (props) => {
  return (
    <a
      className="text-gray-500 block font-semibold my-2 hover:underline"
      href={props.url}
    >
      {props.children}
    </a>
  );
};

const NavCard = (props) => {
  return (
    <div className="w-full mx-5 text-center">
      <a href={props.links[0].url}>
        <img src={props.imagePath} alt={props.imagePath} />
      </a>
      <h4 className="font-semibold text-lg">{props.title}</h4>
      {props.links.map((link) => (
        <NavSmallLink key={link.title} url={link.url}>
          {link.title}
        </NavSmallLink>
      ))}
    </div>
  );
};

const NavModalType1 = (props) => {
  return (
    <div className="w-4/5 py-16 mx-auto grid grid-cols-4">
      <div className="grid grid-cols-3 pe-16 col-span-3 border-e">
        {props.products.map((el) => (
          <NavCard
            key={el.title}
            title={el.title}
            imagePath={el.imagePath}
            links={el.links}
          />
        ))}
      </div>
      <div className="col-span-1 ps-16">
        {props.sideLinks.map((sideLink) => {
          return (
            <NavSideLink key={sideLink.title} url={sideLink.url}>
              {sideLink.title}
            </NavSideLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavModalType1;
