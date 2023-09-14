import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Orders, Products, Register, Login, SingleProduct } from './Pages'
import { ErrorElement } from './components'

// Loader
import { loader as landingLoader } from './Pages/Landing/Landing'
import { loader as singleProductLoader } from './Pages/SingleProduct/SingleProduct'
import { loader as productLoader } from './Pages/Products/Products'


const  router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element:<Landing />,
        errorElement:<ErrorElement/>,
        loader: landingLoader,
      },
      {
        path: 'products',
        element:<Products />,
        errorElement:<ErrorElement/>,
        loader: productLoader,
      },
      {
        path: 'products/:id',
        element:<SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element:<Cart />
      },
      {
        path: 'about',
        element:<About />
     },
      {
        path: 'checkout',
        element:<Checkout />
      },
      {
        path: 'orders',
        element:<Orders />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error/>
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error/>
  },
])


function App() {
 
  return (
    <RouterProvider router={router} />
   
  )
}

export default App
