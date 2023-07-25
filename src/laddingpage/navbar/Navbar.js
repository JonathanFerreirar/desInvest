import img from "../logo/logo-oficial.svg";
const Navbar = () => {
  return (
    <div className="m-0 box-border p-0">
      <header className=" flex flex-wrap items-center justify-between">
        <img src={img} />
        <nav>
          <ul>
            <li className="px-15 inline-block py-5">
              <a href="#">Funcionalidades</a>
            </li>
            <li className="px-15 inline-block py-5">
              <a href="#">Simulador</a>
            </li>
            <li className="px-15 inline-block py-5">
              <a href="#">Planos</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export { Navbar };
