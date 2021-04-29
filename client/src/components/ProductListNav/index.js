// these items are the category
// need to have them hard coded -- make sure to put price 
import React from "react";
import { Link } from "react-router-dom";

function ProductListNav() {

    return (
        // product list
        <div className='bottom-nav'>

            <h2 className='bottom-nav-words'>Choose from one of the following:</h2>

            <div className='bottom-nav-container'>
                <ul className='bottom-nav-container'>
                    <li className='bottom-nav-item'>
                        <Link className='bottom-nav-item-link' to="tShirts">T-Shirts</Link>
                        <i className="fas fa-tshirt"></i>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link className='bottom-nav-item-link' to="/sweatshirts">Sweatshirts</Link>
                        <img></img>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link className='bottom-nav-item-link' to="/hoodies">Hoodies</Link>
                        <img></img>
                    </li>
                    <li className='bottom-nav-item'>
                        <Link className='bottom-nav-item-link' to="/jackets">Jackets</Link>
                        <img></img>
                    </li>
                </ul>
            </div>

            <div className='footer-spacing'>
                

            </div>
            <div className='footer'>
                Thank you for choosing threadSHARE!
            </div>
        </div>
    );
}

export default ProductListNav;