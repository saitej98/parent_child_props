import React, { useState } from "react";

function Callback({ getColor }) {
  const [activecolor, setActivecolor] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setActivecolor(value);
    getColor(value);
  };
  return (
    <div>
      Callback
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={activecolor}
      />
    </div>
  );
}

export default Callback;
