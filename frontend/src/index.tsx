import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state/index";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
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
import Profile from "./pages/Profile";
import { ModalsProvider } from "@mantine/modals";
import UsersList from "./pages/ admin/UsersList";
import ProductsList from "./pages/ admin/ProductsList";
import OrdersList from "./pages/ admin/OrdersList";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <Provider store={store}>
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
      <NotificationsProvider position="top-right">
        <ModalsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
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
              <Route path="/admin/orders" element={<OrdersList />} />
              <Route path="/admin/products" element={<ProductsList />} />
              <Route path="/admin/users" element={<UsersList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
