import React from "react";
import "./ResultsImage.css";

export default function ResultsImage() {
  return (
    <div className="ResultsImage">
      <img
        className="payroll-tax-calculator-results"
        alt="Payroll Tax Calculator by Mariana Tellez Resendiz"
        src={require("./results-money.png")}
      />
    </div>
  );
}
