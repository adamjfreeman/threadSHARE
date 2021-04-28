// these items are the category
// need to have them hard coded -- make sure to put price 
import React from "react";
import { Link } from "react-router-dom";

function ProductListNav() {

    return (
        // product list
        <div>
            <div>
                <h2>Choose from one of the following</h2>
            </div>
            <div>
                <ul className='bottom-nav-container'>
                    <li className='bottom-nav-item'>
                        <Link to="tShirts">T-Shirts</Link>
                        <i className="fas fa-tshirt"></i>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link to="/sweatshirts">Sweatshirts</Link>
                        <img></img>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link to="/hoodies">Hoodies</Link>
                        <img></img>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link to="/jackets">Jackets</Link>
                        <img></img>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductListNav;