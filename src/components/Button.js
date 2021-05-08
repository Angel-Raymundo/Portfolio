import React from "react";

import "./Button.css";

function Button(props) {
  let link = props.link;

  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = link;
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
