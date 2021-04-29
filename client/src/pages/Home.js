import React from "react";
import Cart from "../components/Cart";
import Login from "./Login";
import Auth from '../utils/auth';

const Home = () => {
  return (
    <div>
      {!Auth.loggedIn() && <Login />}
      <Cart />
    </div>
  );
};
export default Home;
