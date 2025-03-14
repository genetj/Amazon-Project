import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Landing from './Components/pages/Landing/Landing';
import Auth from "./Components/pages/Auth/Auth";
import Payment from './Components/pages/Payment/Payment';
import Orders from './Components/pages/Orders/Orders';
import Cart from './Components/pages/Cart/Cart'
import Results from './Components/pages/Results/Results'
import ProductDetail from './Components/pages/ProductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51R1wm4I2PhCbqum8dVn8ON8POy2hQvCtKMBwtSSdihq34qBFM00kih14c45AMEzyvdYbP7eJHi6G4LsRRbnBmkiC00oHphHjgK"
);

function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
}

export default Routing
