import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Bai1/Home";
import Contact from "../component/Bai1/Contact";
import About from "../component/Bai1/About";

export const Router = createBrowserRouter([
    {path: "/", element: <Home></Home>},
    {path: "/contact", element: <Contact></Contact>},
    {path: "/about", element: <About></About>}
])