import React from "react";
import "./Navbar.css";
import HamburguerButton from "./HamburguerButton";

function Navbar(props) {
  return (
    <div className="Container">
      <div className="Container-Logo">{props.logo}</div>
      <div className="Container-Items">
        <ul className="UnOrderedList">
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
      <div className="Hamburguer-button">
        <HamburguerButton />
      </div>
    </div>
  );
}

export default Navbar;
