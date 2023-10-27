const NavModalType3 = (props) => {
  return (
    <div className="w-3/5 pt-36 pb-16 mx-auto grid grid-cols-4 gap-5">
      {props.items.map((item) => (
        <a key={item.title} className="text-center" href={item.url}>
          <img className="w-full" src={item.imagePath} alt={item.imagePath} />
          <h6 className="text-lg font-semibold">{item.title}</h6>
        </a>
      ))}
    </div>
  );
};

export default NavModalType3;
