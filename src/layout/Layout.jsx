import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav>Mi navbar</nav>
    <Outlet />
    <footer>Mi footer</footer>
    </>
  )
}

export default Layout;