import React, { useState } from 'react'

function ColorChange() {
    const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor("red");
  };
  return (
    <div>
      <p style={{ color: color }}>Tiêu đề văn bản</p>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}

export default ColorChange