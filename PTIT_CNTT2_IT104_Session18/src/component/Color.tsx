import { useState, useCallback } from "react";

function Color() {
  const [color, setColor] = useState<string>("");
  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);
  return (
    <div>
      <p>Chon mau</p>
      <input type="color" onChange={handleChangeColor} />
      <div
        style={{
          width: 300,
          height: 150,
          backgroundColor: color,
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
export default Color;
