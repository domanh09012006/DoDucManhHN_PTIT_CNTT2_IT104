import React from "react";
interface Cart {
  title: string;
}
export const Carts = ({ title }: Cart) => {
  return (
    <div
      style={{
        flex: "0 0 calc(33.333% - 20px)",
        background: "white",
        textAlign: "center",
        padding: "30px 0",
        border: "1px solid #ddd",
      }}
    >
      {title}
    </div>
  );
};
