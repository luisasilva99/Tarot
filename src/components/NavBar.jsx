import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            end
          >
            Ver cartas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/reading" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Tirada de cartas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;