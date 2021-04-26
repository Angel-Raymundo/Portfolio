import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HamburguerList from "./components/HamburguerList";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Navbar logo="RodoStuff" />
      <button onClick={() => setToggle(!toggle)}>ey</button>
      <HamburguerList state={toggle} />
    </div>
  );
}

export default App;
