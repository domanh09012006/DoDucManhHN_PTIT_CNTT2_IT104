import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CustomLink = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/home-page') {
      navigate('/home-page');
    } else if (location.pathname !== '/') {
      navigate('/not-found');
    }
  }, [location.pathname, navigate]);
  return (
    <div>
      <h2>Custom Link</h2>
      <Link to="/home-page">Chuyển đến trang chủ</Link>
    </div>
  );
};
export default CustomLink;
