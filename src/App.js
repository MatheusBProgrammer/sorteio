import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);
  const handleFirstNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, ""); // Remove caracteres que não são dígitos
    setFirstNumber(value);
  };

  const handleSecondNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, ""); // Remove caracteres que não são dígitos
    setSecondNumber(value);
  };

  const handleDraw = () => {
    const min = Math.ceil(parseInt(firstNumber));
    const max = Math.floor(parseInt(secondNumber));
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNumber);
  };

  return (
    <div className="app-container">
      <h1>Sorteio Online</h1>
      <div className="form-container">
        <form>
          <div className="input-group">
            <label htmlFor="firstValueField">Primeiro Número: </label>
            <input
              type="number"
              id="firstValueField"
              value={firstNumber}
              onChange={handleFirstNumberChange}
              min="0"
            />
          </div>
          <div className="input-group">
            <label htmlFor="secondValueField">Segundo Número: </label>
            <input
              type="number"
              id="secondValueField"
              value={secondNumber}
              onChange={handleSecondNumberChange}
              min="0"
            />
          </div>
          <button type="button" onClick={handleDraw}>
            Sortear
          </button>
        </form>
        <div className="result">
          {result !== null && (
            <p>
              O número sorteado entre {firstNumber} e {secondNumber} é:
              <br />
              <span className="resultSpan">{result}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
