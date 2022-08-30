import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = (count) => {
    console.log(count);
  };

  const [meterValue, setMeterValue] = React.useState(0);

  const meter = () => {
    let number = 1;
    for (let i = 0; i < 2; i++) {
      number = number + 1;
      count("count");
    }
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  };

  React.useEffect(() => {
    if (meterValue !== 1) {
      meter();
    }
  }, [meterValue, meter]);

  const addOne = () => {
    setMeterValue(meterValue + 1);
    console.log(addOne);
  };

  const addTwo = () => {
    setMeterValue(meterValue + 2);
    console.log(addTwo);
  };

  const addFive = () => {
    setMeterValue(meterValue + 5);
    console.log(addFive);
  };

  const addRandom = () => {
    setMeterValue(meterValue + randomNumber(1, 100));
    console.log(addRandom);
  };

  const clear = () => {
    if (meterValue !== 0) {
      setMeterValue(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="buttonsContainer">
          <button class="button" onClick={addOne}>
            +1
          </button>
          <button class="button" onClick={addTwo}>
            +2
          </button>
          <button class="button" onClick={addFive}>
            +5
          </button>
          <button class="button" onClick={addRandom}>
            +Random
          </button>
          <button class="button" onClick={clear}>
            Clear
          </button>
        </div>
        <div class="meter">{meterValue}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p class="mainText">Come up with your number!</p>
        <a
          className="App-link"
          href="https://github.com/Maciej-Orczykowski?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to see more
        </a>
      </header>
    </div>
  );
}

export default App;
