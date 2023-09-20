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
      <h3>Employer Payroll Tax Estimation Tool</h3>
      <p>
        Our Employer Payroll Tax Calculator eliminates the complexities of
        business taxes. Say goodbye to manual calculations and tax headaches.
        Get accurate deductions instantly, streamlining your payroll tax
        management. Focus on business growth with confidence.
      </p>

      <ul>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Estimate hiring costs.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Take the guesswork out of
          payroll.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Avoid significant financial
          penalties.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Pay employees accurately and
          on time.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Enhance temporary or
          seasonal employee payroll management.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>  Invest more time into running
          your business.
        </li>
      </ul>
    </div>
  );
}
