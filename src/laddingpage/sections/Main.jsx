import { Button } from '../../components/button/Button'
import { FaRocket } from 'react-icons/fa'
import imagePlaceholder from '../../assets/placeholder-image.svg'

export function SectionMain() {
  return (
    <main className="container px-4 sm:px-6 py-9 md:py-14 grid md:grid-cols-2 md:items-center gap-12">
      <div>
        <span className="text-primary-500 font-light text-sm md:text-base block mb-2 md:mb-4 font-default">
          Navegue com Determinação e Alcance seu Potencial!
        </span>
        <h1 className="text-secondary-700 font-default font-medium text-2xl md:text-[2.25rem] md:leading-[2.875rem] mb-5 md:mb-9">
          Explore o Universo Financeiro com a DescoInvest
        </h1>
        <p className="text-secondary-600 text-base md:text-2xl mb-6 font-normal font-default md:mb-12">
          A nossa plataforma é a chave para você explorar o mundo financeiro,
          aprender e investir com liberdade.
        </p>
        <div className="flex gap-6 md:gap-14">
          <Button primary>Explore agora !</Button>
          <Button>
            Simular agora <FaRocket className="ml-2 block" />
          </Button>
        </div>
      </div>
      <div className="h-64 md:h-[400px] bg-[#D9D9D9] grid place-items-center">
        <img src={imagePlaceholder} alt="placeholder" />
      </div>
    </main>
  )
}
