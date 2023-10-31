const NavModalType3 = (props) => {
  return (
    <div className="w-[95%] xl:w-3/5 pt-16 pb-16 mx-auto xl:grid xl:grid-cols-4 xl:gap-5">
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
