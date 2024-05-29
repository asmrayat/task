import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import DeshboardLayout from "../Layouts/DeshboardLayout";
import Deshboard from "../Pages/Deshboard";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./private/PrivateRouter";
import ProductDetails from "../Pages/ProductDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DeshboardLayout />,
    errorElement: <ErrorPage />,
   
    children: [
      {
        path: "",
        loader: () => fetch("http://localhost:3000/products"),
        element: (
          <PrivateRouter>
            <Deshboard />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
