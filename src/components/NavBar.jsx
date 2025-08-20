import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-buttons">
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
            Lectura de cartas
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;