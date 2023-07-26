import { useState } from "react";
import { Quantity } from "./components/quantity/Quantity";
import { Button } from "./components/button/Button";

function App() {
  const [valueState, setValueState] = useState(0);
  const [valueOther, setValueOther] = useState(0);

  const getValue = (newValue) => {
    setValueState(newValue);
  };
  const getOtherValue = (newValue) => {
    setValueOther(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(valueState + " Like you see the values are diferents " + valueOther);
  };
  return (
    <div className="mt-11 flex items-center justify-center ">
      <form
        className="flex flex-col  items-center justify-center gap-9"
        onSubmit={handleSubmit}
      >
        <Quantity onChange={getValue} />

        <Quantity onChange={getOtherValue} />

        <Button outline>Submit</Button>
      </form>
    </div>
  );
}

export { App };
