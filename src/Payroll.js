import React, { useState } from "react";
import "./Payroll.css";
import Results from "./Results";
import Noresults from "./Noresults";
import ResultsImage from "./ResultsImage";

export default function Payroll() {
  const [state, setState] = useState("alaska");
  const [annualWage, setAnnualWage] = useState(100000);
  const [suiRate, setSuiRate] = useState(15);

  const [calculate, setCalculate] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setCalculate(true);
  }

  function handleChangeState(event) {
    setState(event.target.value);
    setCalculate(false);
  }

  function handleChangeAnnualWage(event) {
    setAnnualWage(event.target.value);
    setCalculate(false);
  }

  function handleChangeSuiRate(event) {
    setSuiRate(event.target.value);
    setCalculate(false);
  }

  if (calculate) {
    return (
      <div className="Payroll">
        <div className="row">
          <div className="col-sm-12 col-md-6 payroll-left">
            <h1>Unlock Payroll Ease with a Single Click!</h1>
            <p>
              Simplify Payroll Taxes with Confidence! Our free Employer Payroll
              Tax Calculator eliminates the complexities of business taxes. Say
              goodbye to manual calculations and tax headaches. Get accurate
              deductions instantly, streamlining your payroll tax management.
              Focus on business growth with confidence. Try it today!
            </p>
            <form onSubmit={handleSubmit} className="form-input">
              <label forhtml="states">State:</label>
              <select
                value={state}
                onChange={handleChangeState}
                name="states"
                id="states"
              >
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="columbia">District of Columbia</option>
              </select>
              <label forhtml="wage">Annual Wage:</label>
              <div className="d-flex">
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  value={annualWage}
                  type="text"
                  onChange={handleChangeAnnualWage}
                  name="wage"
                  id="wage"
                ></input>
              </div>
              <label forhtml="sui">SUI Rate:</label>
              <div className="d-flex">
                <input
                  value={suiRate}
                  type="number"
                  onChange={handleChangeSuiRate}
                  name="sui"
                  id="sui"
                ></input>
                <i className="fa-solid fa-percent"></i>
              </div>
              <input
                type="submit"
                value="Calculate"
                className="btn-calculate"
              />
            </form>
          </div>
          <div className="col-sm-12 col-md-6 payroll-right">
            <h3>As an employer you are responsible for the following taxes:</h3>
            <ResultsImage />
            <Results state={state} wage={annualWage} sui={suiRate} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Payroll">
        <div className="row">
          <div className="col-sm-12 col-md-6 payroll-left">
            <h1>Unlock Payroll Ease with a Single Click!</h1>
            <p>
              Simplify Payroll Taxes with Confidence! Our free Employer Payroll
              Tax Calculator eliminates the complexities of business taxes. Say
              goodbye to manual calculations and tax headaches. Get accurate
              deductions instantly, streamlining your payroll tax management.
              Focus on business growth with confidence. Try it today!
            </p>
            <form onSubmit={handleSubmit} className="form-input">
              <label forhtml="states">State:</label>
              <select
                value={state}
                onChange={handleChangeState}
                name="states"
                id="states"
              >
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="columbia">District of Columbia</option>
              </select>
              <label forhtml="wage">Annual Wage:</label>
              <div className="d-flex">
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  value={annualWage}
                  type="text"
                  onChange={handleChangeAnnualWage}
                  name="wage"
                  id="wage"
                ></input>
              </div>
              <label forhtml="sui">SUI Rate:</label>
              <div className="d-flex">
                <input
                  value={suiRate}
                  type="number"
                  onChange={handleChangeSuiRate}
                  name="sui"
                  id="sui"
                ></input>
                <i className="fa-solid fa-percent"></i>
              </div>
              <input
                type="submit"
                value="Calculate"
                className="btn-calculate"
              />
            </form>
          </div>
          <div className="col-sm-12 col-md-6 payroll-right">
            <Noresults />
          </div>
        </div>
      </div>
    );
  }
}
