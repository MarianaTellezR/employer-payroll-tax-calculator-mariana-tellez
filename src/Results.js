import React from "react";
import "./Results.css";
import SocialMedicareFUTA from "./SocialMedicareFUTA";

export default function Results(props) {
  let state = props.state;
  let wage = parseInt(props.wage);
  let sui = parseInt(props.sui);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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

  //Training Tax
  let wage_tt = wage;
  let t_tax = 0;

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

  function TrainingTax(wage, top, percentage) {
    if (wage > top) {
      wage_tt = top;
      t_tax = wage_tt * (percentage / 100);
      return t_tax;
    } else {
      wage_tt = wage;
      t_tax = wage_tt * (percentage / 100);
      return t_tax;
    }
  }

  if (state === "alabama") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8000, sui);
    EmploymentSecurityEnhancementESA(wage, 8000);

    let total = wage + ss_tax + m_tax + futa + unem_tax + esa;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <div className="row">
          <div className="col-7">
            <p className="tag-name">AL Unemployment Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(unem_tax)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <p className="tag-name">
              Employment Security Enhancement Assessment (ESA):{" "}
            </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(esa)}</p>
          </div>
        </div>

        <hr />

        <div className="row total">
          <div className="col-7">
            <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(total)} </p>
          </div>
        </div>
      </div>
    );
  } else if (state === "alaska") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 39700, sui);

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />
        <div className="row">
          <div className="col-7">
            <p className="tag-name">AK State Unemployment Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(unem_tax)}</p>
          </div>
        </div>
        <hr />
        <div className="row total">
          <div className="col-7">
            <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(total)}</p>
          </div>
        </div>
      </div>
    );
  } else if (state === "arizona") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 7000, sui);

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />
        <div className="row">
          <div className="col-7">
            <p className="tag-name">AZ State Unemployment Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(unem_tax)}</p>
          </div>
        </div>
        <hr />
        <div className="row total">
          <div className="col-7">
            <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(total)}</p>
          </div>
        </div>
      </div>
    );
  } else if (state === "arkansas") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12000, sui);

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />
        <div className="row">
          <div className="col-7">
            <p className="tag-name">AR State Unemployment Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(unem_tax)}</p>
          </div>
        </div>
        <hr />
        <div className="row total">
          <div className="col-7">
            <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(total)}</p>
          </div>
        </div>
      </div>
    );
  } else if (state === "california") {
    SocialSecurityTax(wage);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.021);
    UnemploymentTax(wage, 7000, sui);
    TrainingTax(wage, 7000, 0.1);

    let total = wage + ss_tax + m_tax + futa + unem_tax + t_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />
        <div className="row">
          <div className="col-7">
            <p className="tag-name">CA State Unemployment Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(unem_tax)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <p className="tag-name">CA Employment Training Tax: </p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(t_tax)}</p>
          </div>
        </div>
        <hr />
        <div className="row total">
          <div className="col-7">
            <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
          </div>
          <div className="col-5">
            <p>{USDollar.format(total)}</p>
          </div>
        </div>
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
