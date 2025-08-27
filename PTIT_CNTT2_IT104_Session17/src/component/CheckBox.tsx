import React, { useState } from "react";

function Checkbox() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <p>Sở thích:</p>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <label>
        <input
          type="checkbox"
          value="Đi chơi"
          onChange={handleCheckboxChange}
        />
        Đi chơi
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Code"
          onChange={handleCheckboxChange}
        />
        Code
      </label>
      <label>
        <input
          type="checkbox"
          value="Ngủ"
          onChange={handleCheckboxChange}
        />
        Ngủ
      </label>
      <label>
        <input
          type="checkbox"
          value="Ăn"
          onChange={handleCheckboxChange}
        />
        Ăn
      </label>
    </div>
  );
}
export default Checkbox;
