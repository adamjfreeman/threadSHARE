import React from "react";
import tshirt from '../assets/t-shirt.png';
import { useDispatch, useSelector } from "react-redux";

import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import {QUERY_PRODUCT} from "../../utils/queries";



function TShirts() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // find out where you can pull that info into the 

    // const {
    //     _id,
    //     customText,
    //     style,
    //     color,
    //     size,
    //     quantity,
    // } = item;

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }
    return (
        <div className="product-page-container">
            <div>
                <img className="product-img" src={tshirt} alt="picture of t-shirt" />
            </div>
            <div>
                <h1 className="product-name">T-shirts</h1>
                <form>
                    <div className="first-product-container">
                        <div className="product-options">
                            <div className="product-options-label">Style</div>
                            <select className="select-styling">
                                <option value=""> Select one:</option>
                                <option value="0"> Men's</option>
                                <option value="1"> Women's</option>
                            </select>
                        </div>

                        <div className="product-options">
                            <div className="product-options-label">Color</div>
                            <select className="select-styling">
                                <option value=""> Select one:</option>
                                <option value="0"> Navy</option>
                                <option value="1"> Olive Green</option>
                                <option value="2"> Black</option>
                                <option value="3"> White</option>
                                <option value="4"> Gray</option>
                                <option value="5"> Plum</option>
                                <option value="6"> Red</option>
                            </select>
                        </div>

                        <div className="product-options">
                            <div className="product-options-label">Size</div>
                            <select className="select-styling">
                                <option value=""> Select one:</option>
                                <option value="0"> XS</option>
                                <option value="1"> S</option>
                                <option value="2"> M</option>
                                <option value="3"> L</option>
                                <option value="4"> XL</option>
                                <option value="5"> XXL</option>
                            </select>
                        </div>
                    </div>

                    <div className="second-product-container">
                        <div className="product-options-text-container">
                            <label className="product-options-label">Text for Shirt</label>
                            <input className="product-input" id="t-shirt-text" />
                        </div>

                        <div>
                            <label className="product-options-label">Quantity</label>
                            <input className="product-input" id="t-shirt-quantity" />
                        </div>

                    </div>

                    <div className="third-product-container">
                        <div className="product-price">Price: <span id="t-shirt-price">$20</span></div>

                        <div className="button-row">
                            <button className="btn" type="submit" onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TShirts;