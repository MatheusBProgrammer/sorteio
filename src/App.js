import React, { useState } from "react";
import "./App.css";

function App() {
  const [minNumber, setMin] = useState("");
  const [maxNumber, setMax] = useState("");
  const [listLength, setListLength] = useState("");

  const [result, setResult] = useState(null);
  const handleFirstNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, "");
    setMin(value);
  };

  const handleSecondNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, "");
    setMax(value);
  };

  const handleListLengthChange = (event) => {
    let value = event.target.value.replace(/\D/, "");
    setListLength(value);
  };

  const handleDraw = () => {
    const min = Math.ceil(parseInt(minNumber));
    const max = Math.floor(parseInt(maxNumber));
    const length = parseInt(listLength);

    if (max < min) {
      alert("O segundo número deve ser maior ou igual ao primeiro número.");
      return;
    }
    if (!minNumber || !maxNumber || !listLength) {
      alert("Você precisa escolher números válidos em todos os campos");
    }

    const resultList = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      resultList.push(randomNumber);
    }

    setResult(resultList.join(", "));
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
              value={minNumber}
              onChange={handleFirstNumberChange}
              min="0"
            />
          </div>
          <div className="input-group">
            <label htmlFor="secondValueField">Segundo Número: </label>
            <input
              type="number"
              id="secondValueField"
              value={maxNumber}
              onChange={handleSecondNumberChange}
              min="0"
            />
          </div>
          <div className="input-group">
            <label htmlFor="listLength">
              Quantidade de Números a sortear{` (no Máximo 20)`}:
            </label>
            <input
              type="number"
              id="listLength"
              value={listLength}
              onChange={handleListLengthChange}
              min="1"
              max="20"
            />
          </div>
          <button type="button" onClick={handleDraw}>
            Sortear
          </button>
        </form>
        <div className="result">
          {result !== null && (
            <p>
              Os números sorteados entre {minNumber} e {maxNumber} são:
              <br />
              <span className="resultSpan">{result}</span>
            </p>
          )}
        </div>
      </div>
      <p>© 2024 Matheus Barreto | Desenvolvido por MatheusBProgrammer</p>
    </div>
  );
}

export default App;
