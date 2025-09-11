import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Student2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("value");
  const [input, setInput] = useState("");
  
  const handleChange = () => {
    setSearchParams({ value: input });
  };
  return (
    <div>
      <input type="text" 
      value={input}
      onChange={(e) =>{setInput(e.target.value)}}
      />
      <button onClick={handleChange}>Tim kiem</button>
      <div>
        Name: {value}
      </div>
    </div>
  );
}

export default Student2;
