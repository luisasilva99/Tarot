import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import CardDetail from '../pages/TarotDetail.jsx';
import Tirada from '../pages/Reading.jsx';
import NavBar from "../components/NavBar.jsx"
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
        
    </>
  );
}

export default Layout;