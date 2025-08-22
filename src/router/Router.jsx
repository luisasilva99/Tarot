import { createBrowserRouter } from "react-router-dom"; 
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import TarotDetail from "../pages/TarotDetail";
import Reading from "../pages/Reading";
import Header from "../components/Header"

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <Home />
        }, 
        {
        path: "card/:id",
        element: <TarotDetail />
        },
        {
        path: "reading",
        element: <Reading />
        }
    ]
}]);

export default router;