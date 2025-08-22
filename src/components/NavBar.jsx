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
            VER CARTAS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/reading" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            LECTURA DE CARTAS
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;