import { createBrowserRouter } from "react-router-dom";
import Product from "../page/Product";
import Student from "../page/Student";
import Student2 from "../page/Student2";
import Student3 from "../page/Student3";
import Login from "../component/Login";
import PrivateRouter from "../component/PrivateRouter";
import Account from "../component/Account";
import TeamsIndex from "../component/TeamIndex";
import Teams from "../component/Teams";
import Team from "../component/Team";
import { Suspense } from "react";
import LazyLoadComp from "../component/LazyLoadComp";
import { Text } from "../component/Text";

const routers = createBrowserRouter([
  { path: "/product/:id", element: <Product></Product> },
  { path: "/student/:name", element: <Student></Student> },
  { path: "/student2", element: <Student2></Student2> },
  { path: "/student3", element: <Student3></Student3> },
  { path: "/login", element: <Login /> },
  {
    path: "/account",
    element: (
      <PrivateRouter>
        <Account />
      </PrivateRouter>
    ),
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/teams/index",
    element: <TeamsIndex />,
  },
  {
    path: "/teams/:teamId",
    element: <Team />,
  },
   {
    path: "/lazy",
    element: (
      <Suspense fallback={<LazyLoadComp />}>
        <Text />
      </Suspense>
    ),
  },
]);
export default routers;
