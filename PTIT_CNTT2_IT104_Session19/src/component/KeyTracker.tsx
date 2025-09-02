import React, { useEffect, useState } from "react";

function KeyTracker() {
  const [key, setKey] = useState<string>("");
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <h2>Phim vua nhan:</h2>
      {key && (
        <div>
          {key.toUpperCase()}
        </div>
      )}
    </div>
  );
}
export default KeyTracker;
