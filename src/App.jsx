import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Register,
  Login,
  SingleProduct,
} from "./Pages";
import { ErrorElement } from "./components";
import { store } from "./store/store";

// Loader
import { loader as landingLoader } from "./Pages/Landing/Landing";
import { loader as singleProductLoader } from "./Pages/SingleProduct/SingleProduct";
import { loader as productLoader } from "./Pages/Products/Products";
import { loader as checkoutLoader } from "./Pages/Checkout/Checkout";
import { loader as ordersLoader } from "./Pages/Orders/Orders";

//Actions
import { action as registerAction } from "./Pages/Register/Register";
import { action as loginAction } from "./Pages/Login/Login";
import { action as checkoutAction } from "./components/CheckoutForm"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader,
        action : checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
