import React, { useState, useRef, useEffect } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpen(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Ứng dụng React với Modal và Focus Input</h1>
        <button type="submit">Mở modal</button>
      </form>
      {open && (
        <div
          style={{
            border: "1px solid black",
            width: "500px",
            height: "200px",
            backgroundColor: "grey",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            ref={inputRef}
            type="text"
          />
          <button onClick={() => setOpen(false)}>Đóng</button>
        </div>
      )}
    </div>
  );
}
