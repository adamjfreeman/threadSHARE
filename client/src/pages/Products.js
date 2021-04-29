import React from "react";
import tshirtImage from '../assets/t-shirt.png'
import sweatshirtImage from '../assets/sweatshirtImage.jpg'
import hoodieImage from '../assets/hoodieImage.jpg'
import jacketImage from '../assets/jacketImage.jpg'

function Products() {
    let product = '';
    let price = 0;
    let image = '';
    switch (window.location.pathname) {
        case '/tShirts':
            product = 'T-Shirt'
            price = 10
            image = tshirtImage
            break;
        case '/sweatshirts':
            product = 'Sweatshirt'
            price = 20
            image = sweatshirtImage
            break;
        case '/hoodies':
            product = 'Hoodies'
            price = 30
            image = hoodieImage
            break;
        case '/jackets':
            product = 'Jackets'
            price = 40
            image = jacketImage
            break;
    }
    return (
        <div className="product-page-container">
            <div>
                <img className="product-img" src={image} alt="picture of sweatshirt" key={product}/>
            </div>
            <div>
                <h1 className="product-name">{product}</h1>
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
                        <div className="product-price">Price: <span id="t-shirt-price">${price}</span></div>

                        <div className="button-row">
                            <button className="btn" type="submit">Add To Cart</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Products;