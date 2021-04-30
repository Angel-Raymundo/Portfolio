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
            <HamburguerList state={true} />
          </div>
          <div className="Hamburguer-button">
            <input type="checkbox" onClick={() => setToggle(!toggle)} />
            <span></span>
            <span></span>
            <span></span>
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
