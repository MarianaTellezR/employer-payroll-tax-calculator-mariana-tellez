import React from "react";
import "./Noresults.css";

export default function Noresults() {
  return (
    <div className="Noresults">
      <img
        className="payroll-tax-calculator main-noresults"
        alt="Payroll Tax Calculator by Mariana Tellez Resendiz"
        src={require("./payroll-tax.png")}
      />
      <h3>Why should you use a payroll calculator?</h3>

      <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center align-items-center">
        <img
          className="check"
          alt="Using Payroll Tax Calculator"
          src={require("./check.png")}
        />
        <p>Estimate hiring costs</p>
      </div>
      <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center align-items-center">
        <img
          className="check"
          alt="Using Payroll Tax Calculator"
          src={require("./check.png")}
        />
        <p>Take the guesswork out of payroll</p>
      </div>
      <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center align-items-center">
        <img
          className="check"
          alt="Using Payroll Tax Calculator"
          src={require("./check.png")}
        />
        <p>Avoid significant penalties</p>
      </div>
      <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center align-items-center">
        <img
          className="check"
          alt="Using Payroll Tax Calculator"
          src={require("./check.png")}
        />
        <p>Pay employees accurately and on time</p>
      </div>
      <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center align-items-center">
        <img
          className="check"
          alt="Using Payroll Tax Calculator"
          src={require("./check.png")}
        />
        <p>Invest more time into running your business</p>
      </div>
    </div>
  );
}
