import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/threadSHARE.png";

import { QUERY_ALL_DONATIONS, QUERY_ALL_ORDERS } from "../../utils/queries";

function Charity() {
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
  return (
    <div className="charity-container">
      <h2 className="charity-words">
        Giving back is what we're all about. For every $10 you spend, we donate
        $1.
      </h2>

      <div className="charity-counter">
        <div>
          <div id="goal">$10,000</div>
          <div id="goal-bar">
            <div id="progress"></div>
          </div>
        </div>

        <div className="goal-padding">
          <div className="dollars-acc">
            total: <span id="to-goal">$1,600</span>
          </div>
          <button className="donate-now">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Charity;
