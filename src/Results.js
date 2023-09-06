import React from "react";

export default function Results(props) {
  return (
    <div className="Results">
      <h2>Results</h2>
      <p>State: {props.state}</p>
      <p>Annual Wage: {props.wage}</p>
      <p>SUI Rate: {props.sui}</p>
    </div>
  );
}
