import { Link } from 'react-router-dom';

const About2 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>About</h1>
      <p>Trang giới thiệu mẫu.</p>
      <Link to="/">
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default About2;
