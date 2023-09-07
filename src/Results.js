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

  //Unemployment Tax
  let wage_un_tax = wage;
  let unem_tax = 0;

  // ESA Employment Security Enhancement A.
  let wage_esa = wage;
  let esa = 0;

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

  function UnemploymentTax(wage, top, sui) {
    if (wage > top) {
      wage_un_tax = top;
      unem_tax = wage_un_tax * (sui / 100);
      return unem_tax;
    } else {
      wage_un_tax = wage;
      unem_tax = wage_un_tax * (sui / 100);
      return unem_tax;
    }
  }

  function EmploymentSecurityEnhancementESA(wage, top) {
    if (wage > top) {
      wage_esa = top;
      esa = wage_esa * (0.06 / 100);
      return esa;
    } else {
      wage_esa = wage;
      esa = wage_esa * (0.06 / 100);
      return esa;
    }
  }

  if (state === "alabama") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8000, sui);
    EmploymentSecurityEnhancementESA(wage, 8000);

    let total = wage + ss_tax + m_tax + futa + unem_tax + esa;
    total = total.toFixed(2);

    return (
      <div className="Results">
        <ul>
          <li>Social Security Tax: {ss_tax.toFixed(2)}</li>
          <li>Medicare Tax: {m_tax.toFixed(2)}</li>
          <li>FUTA: {futa.toFixed(2)}</li>
          <li>AL Unemployment Tax: {unem_tax.toFixed(2)} </li>
          <li>
            Employment Security Enhancement Assessment (ESA): {esa.toFixed(2)}
          </li>
        </ul>
        <hr />
        <p>Total Annual Cost To Hire This Employee: {total} </p>
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
