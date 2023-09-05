import React, { useState } from "react";
import "./Payroll.css";

export default function Payroll() {
  const [state, setState] = useState("alaska");
  const [annualWage, setAnnualWage] = useState(100000);
  const [suiRate, setSuiRate] = useState(15);

  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      `Searching for ${state}, with an annual wage of $${annualWage} and SUI rate of ${suiRate}%`
    );
  }

  function handleChangeState(event) {
    setState(event.target.value);
  }

  function handleChangeAnnualWage(event) {
    setAnnualWage(event.target.value);
  }

  function handleChangeSuiRate(event) {
    setSuiRate(event.target.value);
  }

  return (
    <div className="Payroll">
      <div className="row">
        <div className="col-sm-12 col-md-6 payroll-left">
          <h1>Stress-free payrool is just one click away!</h1>
          <p>
            Simplify Payroll Taxes with Confidence Running a business can be
            complex, especially as a first-time small business employer. Ensure
            accuracy and ease in your payroll operations with our free Employer
            Payroll Tax Calculator. <br/> <br/>Say goodbye to manual calculations and the
            hassle of tax withholdings. Our tool provides precise estimates for
            deductions, streamlining the process for efficient payroll tax
            management. Let us simplify your payroll tasks, allowing you to
            focus on growing your business with confidence. Try our Employer
            Payroll Tax Calculator today.
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
            <input
              value={annualWage}
              type="text"
              onChange={handleChangeAnnualWage}
              name="wage"
              id="wage"
            ></input>
            <label forhtml="sui">SUI Rate:</label>
            <input
              value={suiRate}
              type="number"
              onChange={handleChangeSuiRate}
              name="sui"
              id="sui"
            ></input>
            <input type="submit" value="Calculate" className="btn-calculate"/>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 payroll-right">
          <p>State: {state}</p>
          <p>Annual Wage: ${annualWage}</p>
          <p>SUI Rate: {suiRate} %</p>
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}
