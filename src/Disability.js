import React from "react";

export default function Disability(props) {
  return (
    <div className="Disability">
      <div className="row">
        <div className="col-7">
          <p className="tag-name">Disability Tax:</p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.disabilityTax}</p>
        </div>
      </div>
    </div>
  );
}
