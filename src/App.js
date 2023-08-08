import React, { useState } from "react";
import "./App.css";
import { ChromePicker } from "react-color-pick";

function App() {
  const [color, setColor] = useState("#fff");
  return (
    <div className="App">
      <ChromePicker
        color={color}
        onChange={(updateColor) => setColor(updateColor)}
      />
      <h2>You picked {color}</h2>
    </div>
  );
}

export default App;
