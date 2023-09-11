import React from "react";


export default function SocialMedicareFUTA(props) {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <p className="tag-name">Social Security Tax: </p>
        </div>
        <div className="col-4">
          <p>{props.social}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <p className="tag-name">Medicare Tax: </p>
        </div>
        <div className="col-4">
          <p>{props.medicare}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <p className="tag-name">FUTA: </p>
        </div>
        <div className="col-4">
          <p>{props.futaa}</p>
        </div>
      </div>
    </div>
  );
}
