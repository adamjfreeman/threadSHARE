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
                        <a href="/" onClick{() => Auth.Logout()}></a>
                    </li>
                </ul>
            )
        }
    }
}