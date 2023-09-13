import React from "react";
import "./Results.css";
import SocialMedicareFUTA from "./SocialMedicareFUTA";
import Unemployment from "./Unemployment";
import Training from "./Training";
import Total from "./Total";

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

  function SocialSecurityTax(wage, top) {
    if (wage > top) {
      wage_ss_tax = top;
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
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8000, sui);
    EmploymentSecurityEnhancementESA(wage, 8000);

    let headerUnemployment = "AL Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + esa;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

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

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "alaska") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 39700, sui);

    let headerUnemployment = "AK State Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "arizona") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 7000, sui);

    let headerUnemployment = "AZ State Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "arkansas") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12000, sui);

    let headerUnemployment = "AR State Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "california") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.021);
    UnemploymentTax(wage, 7000, sui);
    TrainingTax(wage, 7000, 0.1);

    let headerUnemployment = "CA State Unemployment Tax:";

    let headerTraining = "CA Employment Training Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + t_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <Training
          headerTrain={headerTraining}
          training={USDollar.format(t_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "colorado") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12200, sui);

    let headerUnemployment = "CO Unemployment Insurance Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "connecticut") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.027);
    UnemploymentTax(wage, 15000, sui);

    let headerUnemployment = "CT State Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "delaware") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 18500, sui);
    TrainingTax(wage, 18500, 0.085);

    let headerUnemployment = "DE Unemployment Insurance Tax:";

    let headerTraining = "DE Training Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + t_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <Training
          headerTrain={headerTraining}
          training={USDollar.format(t_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "columbia") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9000, sui);
    TrainingTax(wage, 9000, 0.2);

    let headerUnemployment = "DC Unemployment Compensation Tax:";

    let headerTraining = "DC Admin. Assessment:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + t_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <Training
          headerTrain={headerTraining}
          training={USDollar.format(t_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "florida") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 7000, sui);

    let headerUnemployment = "FL State Unemployment Tax:";

    let total = wage + ss_tax + m_tax + futa + unem_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "georgia") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9500, sui);
    TrainingTax(wage, 9500, 0.08);

    let headerUnemployment = "GA State Unemployment Tax:";

    let headerTraining = "DC Admin. Assessment:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + t_tax;

    return (
      <div className="Results">
        <SocialMedicareFUTA
          social={USDollar.format(ss_tax)}
          medicare={USDollar.format(m_tax)}
          futaa={USDollar.format(futa)}
        />

        <Unemployment
          headerUnemploy={headerUnemployment}
          unemployed={USDollar.format(unem_tax)}
        />

        <Training
          headerTrain={headerTraining}
          training={USDollar.format(t_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
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
