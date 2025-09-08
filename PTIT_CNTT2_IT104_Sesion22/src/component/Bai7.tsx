import React, { useState } from 'react';

export default function Bai7() {
  const [show, setShow] = useState(true);
  const closeToast = () => {
    setShow(false);
  };
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#fff3cd',
        color: '#856404',
        padding: '10px',
        borderRadius: '5px',
        display: show ? 'block' : 'none',
        zIndex: 1000,
      }}
    >
      <div>
        <strong>Cảnh báo</strong>
        <button
          onClick={closeToast}
          style={{
            border: 'none',
            background: 'none',
            fontSize: '1.5rem',
            color: '#856404',
            cursor: 'pointer',
            float: 'right',
          }}
        >
          ×
        </button>
      </div>
      <p>Lỗi kết nối máy chủ.</p>
    </div>
  );
}
