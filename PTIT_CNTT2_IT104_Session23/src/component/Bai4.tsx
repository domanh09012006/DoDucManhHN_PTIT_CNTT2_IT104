import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Bai4() {
  return (
    <div style={{
      width: '100%',
      maxWidth: 400,
      margin: '100px auto',
      padding: 32,
      border: '1px solid #ccc',
      borderRadius: 8,
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Đăng ki</h2>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
        <input
          type="email"
          placeholder="Nhập email"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 14
          }}
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 14
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: 12,
          backgroundColor: '#007bff',
          color: '#fff',
          fontSize: 16,
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        Đăng ki
      </button>
    </div>
  );
}
export default Bai4;