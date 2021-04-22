import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function NavigationBar() {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <Link to="/orderHistory">
                            Order History
                        </Link>
                    </li>
                    <li>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            );
        }
    }

    // return statement
}

export default Nav;