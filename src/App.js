import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Pages/Homepage/home';
import Productpage from '../src/Pages/ProductPage/productpage';
import Cart from '../src/Pages/Cart/cart';
import Checkout from '../src/Pages/Checkout/checkout';
import Shipping from '../src/Pages/Shipping/shipping';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Productpage />,
  },
  {
    path: "/cart",
    element: <Cart />,
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
