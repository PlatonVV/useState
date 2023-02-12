import React from "react";
import "./App.css";
import { OnOff } from "./components/onOff/onOff";

function App() {
  return (
    <div className="App">
      <OnOff on={true} />
    </div>
  );
}

export default App;
