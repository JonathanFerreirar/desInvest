import { Button } from "./components/button/Button";
import { PiBellRingingBold } from "react-icons/pi";
import { Input } from "./components/input/Input";

function App() {
  const handleFunction = () => {
    alert("It's the other way to use functions");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5 flex-wrap">
      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap">
        <Button primary textThin>
          Default
        </Button>
        <Button primary textDefault>
          + Left icon
        </Button>
        <Button primary textDefault>
          Right icon +
        </Button>
        <Button primary textDefault>
          <PiBellRingingBold />
        </Button>
        <Button outline textDefault>
          Default
        </Button>
        <Button outline textDefault>
          + Left icon
        </Button>
        <Button outline textDefault>
          Right icon +
        </Button>
        <Button outline textDefault>
          <PiBellRingingBold />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap ">
        {/*-> Don't forget that you put a hidden class here */}
        <Button primary textThin>
          Default
        </Button>
        <Button primary textThin>
          + Left icon
        </Button>
        <Button primary textThin>
          Right icon +
        </Button>
        <Button primary textThin>
          <PiBellRingingBold />
        </Button>
        <Button outline textThin>
          Default
        </Button>
        <Button outline textThin>
          + Left icon
        </Button>
        <Button outline textThin>
          Right icon +
        </Button>
        <Button outline textThin>
          <PiBellRingingBold />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap ">
        {/*-> Don't forget that you put a hidden class here */}
        <Button primary textThin small>
          Default
        </Button>
        <Button primary textThin small>
          + Left icon
        </Button>
        <Button primary textThin small>
          Right icon +
        </Button>

        <Button outline textThin small>
          Default
        </Button>
        <Button outline textThin small>
          + Left icon
        </Button>
        <Button outline textThin small>
          Right icon +
        </Button>
      </div>

      {/*    
Buttons with functions inside 
*/}

      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap hidden">
        {/*-> Don't forget that you put a hidden class here */}
        <Button
          outline
          textThin
          onMouseOver={() => {
            alert("Everything is working");
          }}
        >
          <PiBellRingingBold />{" "}
        </Button>

        <Button
          primary
          textThin
          small
          onClick={() => {
            alert("Function are working");
          }}
        >
          Default
        </Button>

        <Button primary textDefault onClick={handleFunction}>
          + Left icon
        </Button>
      </div>
    </div>
  );
}

export { App };
