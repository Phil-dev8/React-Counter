import "./App.css";
import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./calculator.png";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h1>React Counter</h1>
      </header>
      <main>
        <button
          className="utils"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          {counter === 0 && <button className="utils"></button>}-
        </button>
        <div className="button">
          <p>{counter}</p>
        </div>

        <button
          className="utils"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <div>
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
