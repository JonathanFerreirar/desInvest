import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <h1>Login</h1>
      <div className="flex flex-col gap-[15px]">
        <Input />
        <Input />
      </div>
      <div className="mt-3 flex items-center justify-center">
        <Button>Login</Button>
      </div>
    </div>
  );
};
