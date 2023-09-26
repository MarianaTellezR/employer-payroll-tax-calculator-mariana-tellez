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
        As an employer, you must pay various taxes, including federal and state
        unemployment taxes regulated by the Federal Unemployment Tax Act (FUTA),
        along with different state unemployment insurance (SUI) programs.
      </p>

      <ul>
        <li>
          <i className="fa-solid fa-circle-check"></i>{" "}
          <strong>Estimate hiring costs.</strong>{" "}
          Plan for recruitment expenses to understand the cost of expanding your
          workforce.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>{" "}
          <strong>Streamline Payroll.</strong>{" "}
          Adopt a precise payroll system to ensure accurate and timely payments.
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i>{" "}
          <strong>Pay On Time and Accurately.</strong>{" "}
          Build trust by paying employees accurately and promptly.
        </li>
      </ul>
    </div>
  );
}
