// [&>*]:flex  -> Provides flex in all child container from parent
// *:flex -> this is new to apply css in child component from parent

export const Header = () => {
  return (
    <ul className="bg-black text-white m-0 flex *:flex  ">
      <li>
        <a className="p-3 hover:bg-zinc-700" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-700" href="#contact">
          Contact
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-700" href="#news">
          News
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-700" href="#about">
          About
        </a>
      </li>
    </ul>
  );
};
