import React from "react";

import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";

export const Home = () => {
  return (
    <div>
      <h1>Odsadiops</h1>
      <Input />
      <Input />
      <Button>OK</Button>
      <Button>Cancelar</Button>
    </div>
  );
};
