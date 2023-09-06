import React from "react";
import "./Results.css";

export default function Results(props) {
  let state = props.state;
  let wage = parseInt(props.wage);
  let sui = parseInt(props.sui);

  //Social Security Tax
  let wage_ss_tax = wage;
  let ss_tax = 0;

  //Medicare Tax
  let m_tax = 0;

  //FUTA
  let wage_futa = wage;
  let futa = 0;

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

  function FutaTax(wage, top, futa_percentage) {
    if (wage > top) {
      wage_futa = top;
      futa = wage_futa * futa_percentage;
      return futa;
    } else {
      wage_futa = wage;
      futa = wage_futa * futa_percentage;
      return futa;
    }
  }

  if (state === "alabama") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    return (
      <div className="Results">
        <ul>
          <li>Social Security Tax: {ss_tax}</li>
          <li>Medicare Tax: {m_tax}</li>
          <li>FUTA: {futa}</li>
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
