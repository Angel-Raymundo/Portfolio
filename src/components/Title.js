import React from "react";

import "./Title.css";

function Title(props) {
  return (
    <div className="titlespan">
      <h3 className="title">{props.title}</h3>
      <span className="underline"></span>
    </div>
  );
}

export default Title;
