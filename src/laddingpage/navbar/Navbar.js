import { Button } from "../../components/button/Button";
import img from "../logo/logo-oficial.svg";
const Navbar = () => {
  return (
    <div className="m-0 box-border p-0">
      <header className="flex items-center justify-between">
        <div className="flex gap-x-20">
          <img src={img} />
          <nav>
            <ul className="flex gap-x-9 ">
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
        </div>
        <div>
          <Button outline className="border-primary-500">
            Login
          </Button>
        </div>
      </header>
    </div>
  );
};
export { Navbar };
