import React from "react";

export default function Training(props) {
  return (
    <div className="Training">
      <div className="row">
        <div className="col-7">
          <p className="tag-name">{props.headerTrain}</p>
        </div>
        <div className="col-5">
          <p>{props.training}</p>
        </div>
      </div>
    </div>
  );
}
