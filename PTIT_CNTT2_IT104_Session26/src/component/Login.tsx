import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = {
    email: 'admin@gmail.com.com',
    password: '123456',
    role: 'admin',
  };
  const handleLogin = () => {
    if (email === user.email && password === user.password && role === user.role) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/account');
    } else {
      setError('Ko trùng khớp');
    }
  };
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form>
        <div>
          <label htmlFor="email">Nhập email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Nhập mật khẩu</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Chọn quyền</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Chọn quyền --</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="button" onClick={handleLogin}>Đăng nhập</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
