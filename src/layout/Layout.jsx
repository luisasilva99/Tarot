import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import CardDetail from '../pages/TarotDetail.jsx';
import Tirada from '../pages/Reading.jsx';
import NavBar from "../components/NavBar.jsx"
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;