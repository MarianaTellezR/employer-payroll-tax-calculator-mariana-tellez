import React from "react";

export default function AdditionalTaxes(props) {
  return (
    <div className="AdditionalTaxes">
      <div className="row">
        <div className="col-7">
          <p className="tag-name">{props.headerAdditional}</p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.dataAdditional}</p>
        </div>
      </div>
    </div>
  );
}
