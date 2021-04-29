import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/threadSHARE.png";

function Nav() {
  return (
      <nav className='nav-flex'>
        <div className='logo-styling'>
          <a className="logo-styling" href='/'>
            THRE<span className="logo-delta">&#9651;</span>D<span className="logo-span"></span><span
              className="logo-s">$</span>H<span className="logo-delta">&#9651;</span>RE
          </a>
        </div>
        <div>
          <ul className='top-nav-container'>
            {Auth.loggedIn() &&
              <li className='top-nav-item'>
                <Link className='top-nav-item' to="/orderHistory">Order History</Link>
              </li>
            }
            {Auth.loggedIn() &&
              <li className='top-nav-item'>
                <a className='top-nav-item' href="/" onClick={()=> Auth.logout()}>
                  Logout
                </a>
              </li>
            }
            {!Auth.loggedIn() &&
              <li className='top-nav-item'>
                <Link className='top-nav-item' to="/signup">Sign Up</Link>
              </li>
            }
            {!Auth.loggedIn() &&
              <li className='top-nav-item'>
                <Link className='top-nav-item' to="/login">Login</Link>
              </li>
            }
          </ul>
        </div>
      </nav>
  );

}

export default Nav;
