import React from "react";

export default function Unemployment(props) {
  return (
    <div className="Unemployment">
      <div className="row">
        <div className="col-7">
          <p className="tag-name">{props.headerUnemploy}</p>
        </div>
        <div className="col-5">
          <p>{props.unemployed}</p>
        </div>
      </div>
    </div>
  );
}
