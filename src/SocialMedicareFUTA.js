import React from "react";

export default function SocialMedicareFUTA(props) {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <p className="tag-name">Social Security Tax: </p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.social}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <p className="tag-name">Medicare Tax: </p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.medicare}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <p className="tag-name">FUTA: </p>
        </div>
        <div className="col-5">
          <p className="data-results">{props.futaa}</p>
        </div>
      </div>
    </div>
  );
}
