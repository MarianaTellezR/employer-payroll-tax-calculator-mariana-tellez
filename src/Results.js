import React from "react";
import "./Results.css";
import SocialMedicareFUTA from "./SocialMedicareFUTA";
import Unemployment from "./Unemployment";
import Disability from "./Disability";
import Training from "./Training";
import AdditionalTaxes from "./AdditionalTaxes";
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

  //Disability Tax
  let wage_dt = wage;
  let dis_tax = 0;

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

  function DisabilityTax(wage, top, num) {
    if (wage > top) {
      wage_dt = top;
      dis_tax = wage_dt * (num / 100);
      return dis_tax;
    } else {
      wage_dt = wage;
      dis_tax = wage_dt * (num / 100);
      return dis_tax;
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
            <p className="data-results">{USDollar.format(esa)}</p>
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
  } else if (state === "hawaii") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 42200, sui);
    TrainingTax(wage, 42200, 0.01);

    let headerUnemployment = "HI UI Contribution:";

    let headerTraining = "HI Employment & Training Assessment:";

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
  } else if (state === "idaho") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 37200, sui);

    let headerUnemployment = "ID State Unemployment Tax:";

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
  } else if (state === "illinois") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12960, sui);

    let headerUnemployment = "IL SUTA State Unemployment Tax:";

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
  } else if (state === "indiana") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9500, sui);

    let headerUnemployment = "IN SUTA Premiums State Unemployment Tax:";

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
  } else if (state === "iowa") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 28300, sui);

    let headerUnemployment = "IA Unemployment Insurance Tax:";

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
  } else if (state === "kansas") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 14000, sui);

    let headerUnemployment = "KS State Unemployment Tax:";

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
  } else if (state === "kentucky") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 10200, sui);
    TrainingTax(wage, 10200, 0.21);

    let headerUnemployment = "KY Unemployment Tax:";

    let headerTraining = "ME CSSF Tax UI Tax Surcharge:";

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
  } else if (state === "louisiana") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 7700, sui);

    let headerUnemployment = "LA Unemployment Insurance Tax:";

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
  } else if (state === "maine") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12000, sui);
    TrainingTax(wage, 12000, 0.06);

    let headerUnemployment = "ME Unemployment Contributions:";

    let headerTraining = "ME UI Tax Surcharge:";

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
  } else if (state === "maryland") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8500, sui);

    let headerUnemployment = "MD Unemployment Tax:";

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
  } else if (state === "massachusetts") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 15000, sui);
    TrainingTax(wage, 15000, 0.056);

    let headerUnemployment = "MA Unemployment Insurance Tax:";

    let headerTraining = "MA Workforce Training Tax:";

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
  } else if (state === "michigan") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9000, sui);

    let headerUnemployment = "MI State Unemployment Tax:";

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
  } else if (state === "minnesota") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 31000, sui);
    TrainingTax(wage, 31000, 0.1);

    let headerUnemployment = "MN Unemployment Tax:";

    let headerTraining = "MN Workforce Development Assessment:";

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
  } else if (state === "mississippi") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 14000, sui);
    TrainingTax(wage, 14000, 0.16);

    let headerUnemployment = "MS Unemployment Tax:";

    let headerTraining = "MS Training Tax:";

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
  } else if (state === "missouri") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 13000, sui);

    let headerUnemployment = "MO Unemployment Insurance Tax:";

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
  } else if (state === "montana") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 30500, sui);

    let headerUnemployment = "MT Unemployment Tax:";

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
  } else if (state === "nebraska") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9000, sui);

    let headerUnemployment = "NE SUIT State Unemployment Tax:";

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
  } else if (state === "nevada") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 28200, sui);
    TrainingTax(wage, 28200, 0.05);

    let headerUnemployment = "Nevada State Unemployment Tax:";

    let headerTraining = "Nevada Career Enhancement Program:";

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
  } else if (state === "newhampshire") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 14000, sui);
    TrainingTax(wage, 14000, 0.2);

    let headerUnemployment = "NH Unemployment Insurance:";

    let headerTraining = "NH Administrative Contribution:";

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
  } else if (state === "newjersey") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 32600, sui);
    DisabilityTax(wage, 32600, 0.5);
    TrainingTax(wage, 32600, 0.1175);

    let headerUnemployment = "NJ Employer SUI:";

    let headerTraining = "NJ Workforce Development:";

    let total = wage + ss_tax + m_tax + futa + unem_tax + dis_tax + t_tax;

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

        <Disability disabilityTax={USDollar.format(dis_tax)} />

        <Training
          headerTrain={headerTraining}
          training={USDollar.format(t_tax)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "newmexico") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 24100, sui);

    let headerUnemployment = "NM Unemployment Insurance Tax:";

    let headerAdditional = "NM Workers' Compensation Fee";

    let total = wage + ss_tax + m_tax + futa + unem_tax + 2.3;

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

        <AdditionalTaxes
          headerAdditional={headerAdditional}
          dataAdditional={USDollar.format(2.3)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "newyork") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 10700, sui);
    TrainingTax(wage, 10700, 0.075);

    let headerUnemployment = "NY State Unemployment Tax:";

    let headerTraining = "NY Reemployment:";

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
  } else if (state === "northcarolina") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 22300, sui);

    let headerUnemployment = "NC Unemployment Tax:";

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
  } else if (state === "northdakota") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 37200, sui);

    let headerUnemployment = "ND State Unemployment Tax:";

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
  } else if (state === "ohio") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.021);
    UnemploymentTax(wage, 9000, sui);

    let headerUnemployment = "OH State Unemployment Tax:";

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
  } else if (state === "oklahoma") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 17500, sui);

    let headerUnemployment = "OK Unemployment Compensation Tax:";

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
  } else if (state === "oregon") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 36900, sui);

    let headerUnemployment = "OR Unemployment Insurance:";

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
  } else if (state === "pennsylvania") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9500, sui);

    let headerUnemployment = "PA Tax Employer Contribution:";

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
  } else if (state === "rhodeisland") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 22000, sui);
    TrainingTax(wage, 22000, 0.21);

    let headerUnemployment = "RI Employment Security Taxes:";

    let headerTraining = "RI Job Development Assessment:";

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
  } else if (state === "southcarolina") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 14000, sui);
    TrainingTax(wage, 14000, 0.06);

    let headerUnemployment = "SC Unemployment Tax:";

    let headerTraining = "SC Contingency Assessment (DACA):";

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
  } else if (state === "southdakota") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 15000, sui);

    let headerUnemployment = "SD UI Contributions:";

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
  } else if (state === "tennessee") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8000, sui);

    let headerUnemployment = "TN Unemployment Insurance Premiums:";

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
  } else if (state === "texas") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 9000, sui);

    let headerUnemployment = "TX State Unemployment Tax:";

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
  } else if (state === "utah") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 32200, sui);

    let headerUnemployment = "UT Unemployment Insurance Tax:";

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
  } else if (state === "vermont") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 16800, sui);

    let headerUnemployment = "VT Unemployment Insurance:";

    let headerAdditional = "Governor's Workforce Board";

    let total = wage + ss_tax + m_tax + futa + unem_tax + 151.12;

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

        <AdditionalTaxes
          headerAdditional={headerAdditional}
          dataAdditional={USDollar.format(151.12)}
        />

        <hr />

        <Total totaal={USDollar.format(total)} />
      </div>
    );
  } else if (state === "virginia") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 8000, sui);

    let headerUnemployment = "VA Unemployment Insurance Tax:";

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
  } else if (state === "washington") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 44000, sui);

    let headerUnemployment = "WA State Unemployment Tax:";

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
  } else if (state === "westvirginia") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 12000, sui);

    let headerUnemployment = "West Virginia State Unemployment Tax:";

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
  } else if (state === "wisconsin") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 14000, sui);

    let headerUnemployment = "WI Unemployment Tax:";

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
  } else if (state === "wyoming") {
    SocialSecurityTax(wage, 118000);
    MedicareTax(wage);
    FutaTax(wage, 7000, 0.006);
    UnemploymentTax(wage, 25500, sui);

    let headerUnemployment = "WY Unemployment Insurance:";

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
