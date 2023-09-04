import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label for="states">State:</label>
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
        <label for="wage">Annual Wage:</label>
        <input
          value={annualWage}
          type="text"
          onChange={handleChangeAnnualWage}
          name="wage"
          id="wage"
        ></input>
        <label for="sui">SUI Rate:</label>
        <input
          value={suiRate}
          type="number"
          onChange={handleChangeSuiRate}
          name="sui"
          id="sui"
        ></input>
        <input type="submit" value="Calculate" />
      </form>
      <p>State: {state}</p>
      <p>Annual Wage: ${annualWage}</p>
      <p>SUI Rate: {suiRate} %</p>
      <h2>{message}</h2>
    </div>
  );
}
