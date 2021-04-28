import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/threadSHARE.png";

function Nav() {
    // function NavigationBar() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <img src={logo} alt="threadSHARE logo" />
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
                </div>
            );
        } else {
            return (
                <div>
                    <img src={logo} alt="threadSHARE logo" />
                    <ul>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            );
        }
    // }

    // return statement
}

export default Nav;