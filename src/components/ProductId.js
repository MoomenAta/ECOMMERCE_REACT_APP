import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { fetchdata } from "../redux/actions";
import Content from "./Content";
import Product from './product';

export default function ProductId(props)
{
    const productId = props.match.params.id-1;
    const product = useSelector(state => state.dataOne.products[productId]);
    const productsAll = useSelector(state => state.dataOne.products);
    const [pro , setpro] = useState(null);
    const dispatch = useDispatch();
    /* useEffect(
       ()=>
        {
            dispatch(fetchdata());
        }
    ,[]); */
    useEffect(
        ()=>
        {
            setpro(product);
        }
    ,[product])
    
    return(
        <>
        {pro ? <Content id={pro.id} category={pro.category} img={pro.image} title={pro.title} price={pro.price}/> : "Loading Honey"}
        {pro ? <div className="more">
                <div className="navigation">
                    <span className="activeSpan">More like this</span>
                    <span>Most Popular</span>
                </div>
                <div className="productsAll">
                    <div className="productsAllItems">
                        {productsAll.map((prod)=>{
                            if(prod.category==pro.category && prod.id !== pro.id)
                            {
                                return(<Product key={prod.id} id={prod.id} category={prod.category} title={prod.title} image={prod.image} price={prod.price} description={prod.description} />);
                            }
                        })}
                    </div>
                </div>
        </div>:"..."}
        </>
    );

}