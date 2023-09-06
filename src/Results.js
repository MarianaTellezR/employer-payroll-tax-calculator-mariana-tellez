import React from "react";
import "./Results.css";

export default function Results(props) {
  let state = props.state;
  let wage = parseInt(props.wage);
  let sui = parseInt(props.sui);

  let wage_ss_tax = wage;
  let ss_tax = 0;

  let m_tax = 0;

  function SocialSecurityTax(wage) {
    if (wage > 118500) {
      wage_ss_tax = 118500;
      ss_tax = wage_ss_tax * 0.062;
      return ss_tax;
    } else {
      wage_ss_tax = wage;
      ss_tax = wage_ss_tax * 0.062;
      return ss_tax;
    }
  }

  function MedicareTax(wage) {
    m_tax = wage * 0.0145;
    return m_tax;
  }

  if (state === "alabama") {
    // Social Security Tax
    SocialSecurityTax(wage);
    MedicareTax(wage);
    return (
      <div className="Results">
        <ul>
          <li>Social Security Tax: {ss_tax}</li>
          <li>Medicare Tax: {m_tax}</li>
          <li>FUTA:</li>
          <li>AL Unemployment Tax: </li>
          <li>Employment Security Enhancement Assessment (ESA): </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Results">
        <p>State: {state}</p>
        <p>Annual Wage: {wage}</p>
        <p>SUI Rate: {sui}</p>
        <p>Social Security Tax: </p>
      </div>
    );
  }
}
