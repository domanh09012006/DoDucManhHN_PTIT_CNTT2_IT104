import React, { useState, useRef, useEffect, ChangeEvent } from "react";

function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h2>
        <span className="badge">1234</span>
        Component Render Counter
      </h2>

      <div>
        <label>
          Input: <input type="text" value={value} onChange={handleChange} />
        </label>
      </div>

      <p>
        Component đã render: <b>{renderCount.current}</b> lần
      </p>
    </div>
  );
}
export default RenderCounter;
