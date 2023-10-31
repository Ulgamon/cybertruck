const NavSmallLink = (props) => {
  return (
    <a
      className="text-gray-500 mx-2 text-sm underline transition-colors delay-150 underline-offset-2 hover:decoration-2 hover:decoration-black"
      href={props.url}
    >
      {props.children}
    </a>
  );
};

export const NavSideLink = (props) => {
  return (
    <a className="my-3 block xl:my-2" href={props.url}>
      <div className="text-start hidden xl:block font-semibold text-navText decoration-0 transition delay-500 hover:underline hover:decoration-2">
        {props.children}
      </div>
      <div className="text-navText block xl:hidden font-semibold w-full underline-offset-2 py-3 px-3 rounded font-semibold text-lg hover:bg-buttonHover">
        {props.children}
      </div>
    </a>
  );
};

const NavCard = (props) => {
  return (
    <div className="w-full xl:mx-5 flex sm:flex-col text-center">
      <a href={props.links[0].url}>
        <img src={props.imagePath} alt={props.imagePath} />
      </a>
      <div className="w-full">
        <h4 className="font-semibold text-lg">{props.title}</h4>
        {props.links.map((link) => (
          <NavSmallLink key={link.title} url={link.url}>
            {link.title}
          </NavSmallLink>
        ))}
      </div>
    </div>
  );
};

const NavModalType1 = (props) => {
  return (
    <div className="w-full px-3 xl:w-4/5 z-60 py-16 mx-auto xl:grid xl:grid-cols-4 2xl:grid-cols-5">
      <div className="w-full grid border-b pb-16 xl:pb-0 xl:border-b-0 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 xl:pe-16 xl:col-span-3 2xl:col-span-4 xl:border-e-2">
        {props.products.map((el) => (
          <NavCard
            key={el.title}
            title={el.title}
            imagePath={el.imagePath}
            links={el.links}
          />
        ))}
      </div>
      <div className="col-span-1 xl:ps-16">
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
