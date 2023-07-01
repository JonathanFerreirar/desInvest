import { getApi } from "./api/api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(getApi());
  }, []);
  return <div className="App">
    <h1> Jhon que vergonha </h1>
  </div>;
};

export { App };
