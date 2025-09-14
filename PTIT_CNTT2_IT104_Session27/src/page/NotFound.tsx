import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>NotFound</h1>
      <h2>Trang bạn tìm không tồn tại.</h2>
      <p>Có thể đường dẫn bạn nhập sai hoặc trang đã được di chuyển.</p>
      <button onClick={() => navigate('/')} style={{ marginRight: '10px' }}>
        Quay về trang chủ
      </button>
      <button onClick={() => navigate(-1)}>
        Quay lại
      </button>
    </div>
  );
};

export default NotFound;
