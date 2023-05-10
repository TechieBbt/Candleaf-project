import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Pages/Homepage/home';
import Viewproduct from '../src/Pages/ProductPage/Viewproducts';
import Mycart from './Pages/Cart/Mycart';
import Checkout from './Pages/Checkout/checkout';
import Shipping from '../src/Pages/Shipping/shipping';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Viewproduct />,
  },
  {
    path: "/cart",
    element: <Mycart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
