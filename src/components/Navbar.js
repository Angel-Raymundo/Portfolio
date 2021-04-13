import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Container">
      <div className="Continer-Items">LOGO</div>
      <div className="Continer-Items">
        <ul className="UnOrderedList">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
