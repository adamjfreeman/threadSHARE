// past designs- order history

import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
    // TO DO: MAKE SURE THE CORRECT QUERY IS BEING USED
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }

    return (
        <div>
            <h2>Order history for {user.firstName} </h2>
            {/* Need to input the rest of the code for objects from order history */}
        </div>
    )
};
export default OrderHistory;
  