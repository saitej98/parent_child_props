import { useState } from "react";
import "./App.css";
import Callback from "./Callback";

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };
  return (
    <div className="App">
      <div className="container" style={{ background: `${UIcolor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default App;
