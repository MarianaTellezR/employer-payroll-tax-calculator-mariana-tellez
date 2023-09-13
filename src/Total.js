import React from "react";

export default function Total(props) {
  return (
    <div classname="Total">
      <div className="row total">
        <div className="col-7">
          <p className="tag-name">Total Annual Cost To Hire This Employee:</p>
        </div>
        <div className="col-5">
          <p>{props.totaal} </p>
        </div>
      </div>
    </div>
  );
}
