// these items are the category
// need to have them hard coded -- make sure to put price 
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function ProductListNav() {

    return (
        // product list
        <div>
            <div>
                <h2>Choose from one of the following</h2>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="tShirts">T-Shirts</Link>
                        <img></img>
                    </li>
                    <li>
                    <Link to="/sweatshirts">Sweatshirts</Link>
                        <img></img>
                    </li>
                    <li>
                    <Link to="/hoodies">Hoodies</Link>
                        <img></img>
                    </li>
                    <li>
                    <Link to="/jackets">Jackets</Link>
                        <img></img>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductListNav;