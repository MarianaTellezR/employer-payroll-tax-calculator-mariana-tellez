import React from "react";

export default function Total(props) {
  return (
    <div className="Total">
      <div className="row total">
        <div className="col-7">
          <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.totaal} </p>
        </div>
      </div>
    </div>
  );
}
