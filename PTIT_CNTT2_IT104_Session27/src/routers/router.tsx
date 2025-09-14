import { createBrowserRouter } from "react-router-dom";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from "../page/Home";
import Infor from "../page/Infor";
import Product from "../page/Product";
import ProductList from "../page/ProductList";
import ProductDetail from "../page/ProductDetail";
import TaskList from "../page/TaskList";
import TaskDetail from "../page/TaskDetail";
import ProductList2 from "../page/ProductList2";
import BlogLayout from "../components/BlogLayout";
import Posts from "../page/Posts";
import PostDetail from "../page/PostDetail";
import Homes from "../page/Homes";
import Products2 from "../page/Products2";
import Details from "../page/Details";
import Layout from "../components/Layout";
import NotFound from "../page/NotFound";

const routers = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Infor></Infor>,
  //   children: [
  //     { index: true, element: <Home></Home> },
  //     { path: "about", element: <About></About> },
  //     { path: "contact", element: <Contact></Contact> },
  //   ],
  // },
  {
    path: "/product",
    element: <Product />,
    children: [
      { index: true, element: <ProductList /> },
      { path: ":id", element: <ProductDetail /> },
    ],
  },

  { path: "/task", element: <TaskList /> },
  { path: "/task/:id", element: <TaskDetail /> },
  { path: "/products", element: <ProductList2 /> },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
    ],
  },
   {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homes /> },
      { path: "products", element: <Products2 /> },
      { path: "details", element: <Details /> },
    ],
  },
   {
    path: "*",
    element: <NotFound />,
  },
]);
export default routers;
