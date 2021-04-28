import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/threadSHARE.png";

import { QUERY_ALL_DONATIONS, QUERY_ALL_ORDERS } from "../../utils/queries";

function Nav() {
//   // getting query data needed for goal tracker
//   const { donationLoading, donationData } = useQuery(QUERY_ALL_DONATIONS);
//   const { orderLoading, orderData } = useQuery(QUERY_ALL_ORDERS);
//   // setting up constants for goal tracker
//   const goal = 1000;
//   let orderTotal;
//   // loop to get total amount spent through orders
//   for (let i = 0; i < orderData.orders.length; i++) {
//     orderTotal += orderData.orders[i].price * orderData.orders[i].quantity;
//   }
//   // formula that finds the amount until the next goal
//   const toGoal = goal - (orderTotal - goal * donationData.donations.length);

  // function NavigationBar() {
  if (Auth.loggedIn()) {
    return (
      <nav className='nav-flex'>
          <div>
              <a href='/'>
                  <img src={logo} alt='threadSHARE logo' />
              </a>
          </div>
          <div>
              <ul className='top-nav-container'>
                  <li className='top-nav-item'>
                      <Link to="/orderHistory">Order History</Link>
                  </li>
                  <li className='top-nave-item'>
                      <a href="/" onClick={()=> Auth.logout()}>
                          Logout
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
    );
  } else {
    return (
      <nav className='nav-flex'>
          <div>
              <a href='/'>
                  <img src={logo} alt='threadSHARE logo' />
              </a>
          </div>
          <div>
              <ul className='top-nav-container'>
                  <li className='top-nav-item'>
                      <Link to="/signup">Sign Up</Link>
                  </li>
                  <li className='top-nav-item'>
                      <Link to="/login">Login</Link>
                  </li>
              </ul>
          </div>
      </nav>
    );
  }
  // }

  return (
    <header>
      <h1>
        <Link to="/">
          {/* threadShare logo */}
          <img></img>
        </Link>
      </h1>
      <nav>{/* {NavigationBar()} */}</nav>
    </header>
  );
}

export default Nav;
