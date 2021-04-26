import React from "react";
import "./HamburguerList.css";

function HamburguerList(props) {
  if (props.state) {
    return (
      <div className="Mobile-list">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="Mobile-any"></div>;
  }
}

export default HamburguerList;
