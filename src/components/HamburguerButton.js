import React, { useState } from "react";

function HamburguerButton() {
  const [toggle, setToggle] = useState(true);

  return <button onClick={() => setToggle(!toggle)}>ey</button>;
}

export default HamburguerButton;
