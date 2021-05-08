import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Navbar logo="RodoStuff" />
      <Title title="About Me" />
      <Button text="Download CV" link="https://www.twitch.tv/" />
    </div>
  );
}

export default App;
