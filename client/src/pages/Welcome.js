import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function Welcome(props) {
    // TO DO: MAKE SURE THE CORRECT QUERY IS BEING USED
    const { data: userData } = useQuery( QUERY_USER );

    return (
        <div className='home-styling'>
            <div className='sign-up'>
                {Auth.loggedIn() && userData ? (
                    <h2 className='sign-up-words'>Welcome back {userData.user.firstName} to threadSHARE.<br />
                    Start Customizing Today!</h2>
                ) : null}
            </div>
            <div>
                {Auth.loggedIn() && userData ? (
                    <h2>Order history for {userData.user.firstName}</h2>
                    
                ) : null}
            </div>
        </div>
        
  );
}

export default Welcome;
