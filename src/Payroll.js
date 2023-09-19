import React, { useState } from "react";
import "./Payroll.css";
import Results from "./Results";
import Noresults from "./Noresults";
import ResultsImage from "./ResultsImage";
import { Tooltip } from "react-tooltip";

export default function Payroll() {
  const [state, setState] = useState("alaska");
  const [annualWage, setAnnualWage] = useState(100000);
  const [suiRate, setSuiRate] = useState(15);

  const [calculate, setCalculate] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setCalculate(true);
  }

  function handleChangeState(event) {
    setState(event.target.value);
    setCalculate(false);
  }

  function handleChangeAnnualWage(event) {
    setAnnualWage(event.target.value);
    setCalculate(false);
  }

  function handleChangeSuiRate(event) {
    setSuiRate(event.target.value);
    setCalculate(false);
  }

  if (calculate) {
    return (
      <div className="Payroll">
        <div className="row">
          <div className="col-sm-12 col-md-6 payroll-left">
            <h1>Unlock Payroll Ease with a Single Click!</h1>
            <h3>Simplify Payroll Taxes with Confidence</h3>
            <p>
              Our Employer Payroll Tax Calculator eliminates the complexities of
              business taxes. Say goodbye to manual calculations and tax
              headaches. Get accurate deductions instantly, streamlining your
              payroll tax management. Focus on business growth with confidence.
              Try it today!
            </p>
            <form onSubmit={handleSubmit} className="form-input">
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="states">State:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="What state does your employee work in?"
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
              <select
                value={state}
                onChange={handleChangeState}
                name="states"
                id="states"
              >
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="columbia">District of Columbia</option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="illinois">Illinois</option>
                <option value="indiana">Indiana</option>
                <option value="iowa">Iowa</option>
                <option value="kansas">Kansas</option>
                <option value="kentucky">Kentucky</option>
                <option value="louisiana">Louisiana</option>
                <option value="maine">Maine</option>
                <option value="maryland">Maryland</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="mississippi">Mississippi</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nebraska">Nebraska</option>
                <option value="nevada">Nevada</option>
                <option value="newhampshire">New Hampshire</option>
                <option value="newjersey">New Jersey</option>
                <option value="newmexico">New Mexico</option>
                <option value="newyork">New York</option>
                <option value="northcarolina">North Carolina</option>
                <option value="northdakota">North Dakota</option>
                <option value="ohio">Ohio</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="oregon">Oregon</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="rhodeisland">Rhode Island</option>
                <option value="southcarolina">South Carolina</option>
                <option value="southdakota">South Dakota</option>
                <option value="tennessee">Tenessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="vermont">Vermont</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="westvirginia">West Virginia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="wyoming">Wyoming</option>
              </select>
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="wage">Annual Wage:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="How much does your employee make annually?"
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>

              <div className="d-flex">
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  value={annualWage}
                  type="text"
                  onChange={handleChangeAnnualWage}
                  name="wage"
                  id="wage"
                ></input>
              </div>
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="sui">SUI Rate:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="This rate is assigned to you by your state."
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>

              <div className="d-flex">
                <input
                  value={suiRate}
                  type="number"
                  onChange={handleChangeSuiRate}
                  name="sui"
                  id="sui"
                ></input>
                <i className="fa-solid fa-percent"></i>
              </div>
              <input
                type="submit"
                value="Calculate"
                className="btn-calculate"
              />
            </form>
          </div>
          <div className="col-sm-12 col-md-6 payroll-right">
            <h3>As an employer you are responsible for the following taxes:</h3>
            <ResultsImage />
            <Results state={state} wage={annualWage} sui={suiRate} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Payroll">
        <div className="row">
          <div className="col-sm-12 col-md-6 payroll-left">
            <h1>Unlock Payroll Ease with a Single Click!</h1>
            <h3>Simplify Payroll Taxes with Confidence</h3>
            <p>
              Our Employer Payroll Tax Calculator eliminates the complexities of
              business taxes. Say goodbye to manual calculations and tax
              headaches. Get accurate deductions instantly, streamlining your
              payroll tax management. Focus on business growth with confidence.
              Try it today!
            </p>
            <form onSubmit={handleSubmit} className="form-input">
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="states">State:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="What state does your employee work in?"
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
              <select
                value={state}
                onChange={handleChangeState}
                name="states"
                id="states"
              >
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="columbia">District of Columbia</option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="illinois">Illinois</option>
                <option value="indiana">Indiana</option>
                <option value="iowa">Iowa</option>
                <option value="kansas">Kansas</option>
                <option value="kentucky">Kentucky</option>
                <option value="louisiana">Louisiana</option>
                <option value="maine">Maine</option>
                <option value="maryland">Maryland</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="mississippi">Mississippi</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nebraska">Nebraska</option>
                <option value="nevada">Nevada</option>
                <option value="newhampshire">New Hampshire</option>
                <option value="newjersey">New Jersey</option>
                <option value="newmexico">New Mexico</option>
                <option value="newyork">New York</option>
                <option value="northcarolina">North Carolina</option>
                <option value="northdakota">North Dakota</option>
                <option value="ohio">Ohio</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="oregon">Oregon</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="rhodeisland">Rhode Island</option>
                <option value="southcarolina">South Carolina</option>
                <option value="southdakota">South Dakota</option>
                <option value="tennessee">Tenessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="vermont">Vermont</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="westvirginia">West Virginia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="wyoming">Wyoming</option>
              </select>
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="wage">Annual Wage:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="How much does your employee make annually?"
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
              <div className="d-flex">
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  value={annualWage}
                  type="text"
                  onChange={handleChangeAnnualWage}
                  name="wage"
                  id="wage"
                ></input>
              </div>
              <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                  <label forhtml="sui">SUI Rate:</label>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="This rate is assigned to you by your state."
                    className="more-info"
                  >
                    ?
                  </p>
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
              <div className="d-flex">
                <input
                  value={suiRate}
                  type="number"
                  onChange={handleChangeSuiRate}
                  name="sui"
                  id="sui"
                ></input>
                <i className="fa-solid fa-percent"></i>
              </div>
              <input
                type="submit"
                value="Calculate"
                className="btn-calculate"
              />
            </form>
          </div>
          <div className="col-sm-12 col-md-6 payroll-right">
            <Noresults />
          </div>
        </div>
      </div>
    );
  }
}
