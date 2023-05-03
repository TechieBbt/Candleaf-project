import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Pages/Homepage/home';
import Productpage from '../src/Pages/ProductPage/productpage';
import Cart from '../src/Pages/Cart/cart';
import Checkout from './Pages/Checkout/checkout';
import Shipping from '../src/Pages/Shipping/shipping';
import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';


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

function App({ Component, pageProps })  {
  useEffect(() => {
    AOS.init({duration : 1000, once : true})
  }, [])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
