import logo from "./logo.svg";
import "./App.css";
import React from "react";

function NumPads({ onChange }) {
  return (
    <div className="numpads">
      {[...Array(10).keys()].reverse().map((v) => (
        <button
          key={v}
          onClick={() => {
            onChange(v);
          }}
          className="numpad"
        >
          {v}
        </button>
      ))}
    </div>
  );
}

const operators = ["+", "-", "*", "/"];

function Operators({ onChange }) {
  return (
    <div className="operators">
      {operators.map((v) => (
        <button
          key={v}
          onClick={() => {
            onChange(v);
          }}
          className="operator"
        >
          {v}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [output, setOutput] = React.useState([]);
  const [operator, setOperator] = React.useState();

  const handleNumPadChange = (v) => {
    console.log({
      output,
      operator,
      v,
    });
    if ((output.length === 1 && !operator) || output.length === 0) {
      setOutput([v]);
    }

    if (output.length === 1 && operator) {
      switch (operator) {
        case "+":
          setOutput([output[0] + v]);
          setOperator();
          break;
        case "-":
          setOutput([output[0] - v]);
          setOperator();
          break;
        case "*":
          setOutput([output[0] * v]);
          setOperator();
          break;
        case "/":
          setOutput([output[0] / v]);
          setOperator();
          break;
        default:
          console.log("Something went wrong");
      }
    }
  };

  return (
    <div className="App">
      {output.map((v) => (
        <p>{v}</p>
      ))}
      <p>{operator ?? ""}</p>
      <NumPads onChange={handleNumPadChange} />
      <Operators onChange={setOperator} />
    </div>
  );
}

export default App;
