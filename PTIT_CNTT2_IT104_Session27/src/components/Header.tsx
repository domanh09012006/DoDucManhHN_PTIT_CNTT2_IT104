import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
        Homes
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>
        Products
      </NavLink>
      <NavLink to="/details" className={({ isActive }) => isActive ? "active-link" : ""}>
        Details
      </NavLink>
    </nav>
  );
};
export default Header;
