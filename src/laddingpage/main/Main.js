import { Button } from "../../components/button/Button";
import { FaRocket } from "react-icons/fa";
import imagePlaceholder from "../../assets/placeholder-image.svg";

export function Main() {
  return (
    <main className="container grid gap-12 px-4 py-9 sm:px-6 md:grid-cols-2 md:items-center md:py-14">
      <div>
        <span className="mb-2 block font-default text-sm font-light text-primary-500 md:mb-4 md:text-base">
          Navegue com Determinação e Alcance seu Potencial!
        </span>
        <h1 className="mb-5 font-default text-2xl font-medium text-secondary-700 md:mb-9 md:text-[2.25rem] md:leading-[2.875rem]">
          Explore o Universo Financeiro com a DescoInvest
        </h1>
        <p className="mb-6 font-default text-base font-normal text-secondary-600 md:mb-12 md:text-2xl">
          A nossa plataforma é a chave para você explorar o mundo financeiro,
          aprender e investir com liberdade.
        </p>
        <div className="flex gap-6 md:gap-14">
          <Button primary>Explore agora !</Button>
          <Button shadow>
            Simular agora <FaRocket className="ml-2 block" />
          </Button>
        </div>
      </div>
      <div className="grid h-64 place-items-center bg-[#D9D9D9] md:h-[400px]">
        <img src={imagePlaceholder} alt="placeholder" />
      </div>
    </main>
  );
}
