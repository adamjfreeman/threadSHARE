import React from "react";
import Cart from "../components/Cart";
import Login from "./Login";
import Welcome from "./Welcome";
import Auth from '../utils/auth';

const Home = () => {
  return (
    <div>
      {!Auth.loggedIn() && <Login />}
      {Auth.loggedIn() && <Welcome />}
      <Cart />
    </div>
  );
};
export default Home;
