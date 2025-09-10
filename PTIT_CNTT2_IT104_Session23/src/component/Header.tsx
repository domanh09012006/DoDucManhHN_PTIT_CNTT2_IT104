import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Product
      </NavLink>
      <NavLink to="/detail" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Detail
      </NavLink>
    </nav>
  );
};

export default Header;
