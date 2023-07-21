import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[5px]">
      <h1>Odsadiops</h1>
      <div className="inputFields flex w-fit flex-col gap-[15px]">
        <Input />
        <Input />
      </div>
      <div className="buttons flex gap-[15px]">
        <Button>Entrar</Button>
        <Button>Cadastre-se</Button>
      </div>
    </div>
  );
};
