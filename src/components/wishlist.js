import React from "react";
import { useSelector} from "react-redux";
import Product from "./product";
export default function Wishlist()
{
    
    var productItems = useSelector(state => state.dataOne.wishList);
    return(
        <div className="wishlist">
            <div className="length">
                <span>Number of products</span> <span>{productItems.length}</span>
            </div>
            <div className="wishlistItems">
                {productItems ? productItems.map((pro)=>{
                    return( <Product key={pro.id} id={pro.id} num={pro.num} category={pro.category} title={pro.title} image={pro.image} price={pro.price} description={pro.description} />);
                }) : "Loading Honey"}
            </div>
        </div>
    );
}