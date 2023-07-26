import { Button } from "../../../components/button/Button";
import logo from "../../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="box-border  p-0 shadow-shadownavBar">
      <header className="mx-12 mt-2 flex items-center justify-between">
        <div className="flex gap-x-20">
          <img src={logo} />
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
        <div className="flex gap-6 ">
          <Button outline>Login</Button>
          <Button primary>Cadastre-se já!</Button>
        </div>
      </header>
    </div>
  );
};
export { Navbar };
