import React from "react";
import shoes from '../imgs/shoes.png';
export default function Offers()
{
    return(
        <div className="offersContainer">
            <div className="offersItems">
                <div className="item itemOne">
                    <div className="itemContent">
                        <h2>Buy Two get One FREE </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                             Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button type="button">Get Offer</button>
                    </div>
                    <div className="itemImage">
                        <img src={shoes} alt="shoes" />
                    </div>
                </div>
                <div className="item itemTwo">
                    <div className="itemContent">
                        <h2>Buy Two get One FREE </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                             Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button type="button">Get Offer</button>
                    </div>
                    <div className="itemImage">
                        <img src={shoes} alt="shoes" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}