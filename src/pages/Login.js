import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";

export const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-[20px]">
      <h1>Login</h1>
      <div className="flex flex-col gap-[15px]">
        <Input />
        <Input />
      </div>
      <div className="flex justify-center items-center mt-3">
        <Button>Login</Button>
      </div>
    </div>
  );
};
