import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar logo="RodoStuff" />
      <Title title="About me" />
    </div>
  );
}

export default App;
