import React, { useState } from "react";
import "./Navbar.css";
import HamburguerList from "./HamburguerList";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="screen">
      <div className="nav">
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
            <button onClick={() => setToggle(!toggle)}>click me</button>
          </div>
        </div>
      </div>
      <div className="list">
        <HamburguerList state={toggle} />
      </div>
    </div>
  );
}

export default Navbar;
