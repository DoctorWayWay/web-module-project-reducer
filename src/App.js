// Imported Libraries
import React, { useReducer } from "react";

// Imported Reducer
import reducer, { initialState } from "./reducers/index";

// Imported Actions
import { addOne, applyNumber, changeOperation } from "./actions/index";

// Imported Style Sheets
import "./App.css";

// Imported Components
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  // State Management
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event Handlers
  const handleNumberInput = (number) => {
    dispatch(applyNumber(number));
  };

  const handleChangeOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  // const handleAddOne = () => {
  //   dispatch(addOne());
  // };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberInput(1)} />
              <CalcButton value={2} onClick={() => handleNumberInput(2)} />
              <CalcButton value={3} onClick={() => handleNumberInput(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberInput(4)} />
              <CalcButton value={5} onClick={() => handleNumberInput(5)} />
              <CalcButton value={6} onClick={() => handleNumberInput(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberInput(7)} />
              <CalcButton value={8} onClick={() => handleNumberInput(8)} />
              <CalcButton value={9} onClick={() => handleNumberInput(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleChangeOperation("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleChangeOperation("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleChangeOperation("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
