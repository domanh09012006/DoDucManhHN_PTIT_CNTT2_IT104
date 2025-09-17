import React from "react";

type Props = {
  visible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ visible, message, onConfirm, onCancel }: Props) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <p>{message}</p>
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={onConfirm}
            style={{ marginRight: "10px", background: "red", color: "white", padding: "6px 12px" }}
          >
            Xác nhận
          </button>
          <button
            onClick={onCancel}
            style={{ padding: "6px 12px" }}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
