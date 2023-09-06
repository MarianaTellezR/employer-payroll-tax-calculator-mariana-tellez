import React from "react";
import "./Noresults.css";

export default function Noresults() {
  return (
    <div className="Noresults">
      <img
        className="payroll-tax-calculator"
        alt="Payroll Tax Calculator by Mariana Tellez Resendiz"
        src={require("./payroll-tax.png")}
      />
      <h3>
        Employer Payroll Tax Calculator: Your Hassle-Free Payroll Processing
        Solution
      </h3>
      <p>
        Experience the convenience of precision in your payroll management with
        our user-friendly tool. Calculate your tax deductions and withholdings
        effortlessly, ensuring accurate, swift, and stress-free payroll
        processing.
      </p>
    </div>
  );
}
