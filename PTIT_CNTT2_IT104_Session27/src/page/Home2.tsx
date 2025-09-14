import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Trang chủ</h1>
      <p>Đây là trang chủ. Thử gõ một đường dẫn không tồn tại (ví dụ: /abcxyz) để xem trang 404.</p>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

export default Home2;
