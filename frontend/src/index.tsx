import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";

ReactDOM.render(
  <MantineProvider
    theme={{
      breakpoints: {
        xs: 200,
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1400,
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart">
          <Route path=":id" element={<Cart />} />
          <Route path="" element={<Cart />} />
        </Route>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>,
  document.getElementById("root")
);
reportWebVitals();
