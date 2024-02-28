import About from "./pages/About";
import Home from "./pages/Home/Home";
import "./App.css";
// import {  createBrowserRouter,  Route,  Router,  RouterProvider, Routes,} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "react-use-cart";
import Detail from "./pages/Details/detail";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import LoginSignup from "./pages/LoginPage/LoginSignup";
import Account from "./pages/Account/Account";
import SearchResult from "./pages/SearchedData/SearchResult";
import Payment from "./pages/Cart/Payment";

// const router = createBrowserRouter([
//    {
//      path: "/home",
//      element: <Home />,
//    },
//   {
//     path: "/",
//     element: <LoginSignup />,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/account",
//     element: <Account name={userName} />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/details/:id",
//     element: <Detail />,
//   }

// ]);

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginSignup />} > </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/details/:id" element={<Detail />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
