import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchdata, categoryvalue ,searchvalue } from '../redux/actions';
import Product from './product';
import Wishlist from './wishlist';

export default function Explore()
{
    const searchValue = useSelector(state => state.dataOne.searchValue);
    const categoryValue = useSelector(state => state.dataOne.categoryValue);
    const [priceValue , setPriceValue] = useState('Choose');
    const [limit , setLimit] = useState(0);
    const dispatch = useDispatch();
   /*  useEffect(
        ()=>
        {
            dispatch(fetchdata());
        }
    ,[]); */
    
    let handleChange = (e)=>
    {
        let val = e.target.value;
        dispatch(searchvalue(val));
    }
    let handleOptChange = (e)=>
    {
        let val = e.target.value;
        dispatch(categoryvalue(val));
    }
    let handleOptChange2 = (e)=>
    {
        let val = e.target.value;
        if(val == 100)
        setLimit(10)
        else if (val ==800)
        setLimit(100)
        setPriceValue(val);
    }
    const products = useSelector(state => state.dataOne.products);
    let allCategories = products.map((pro)=> pro.category);
    let filteredCategories = allCategories.filter((item,index)=>{
        return allCategories.indexOf(item)==index;
    });
    return(
        <>
        <div className="explore">
            <div className="container">
                <div className="filterinputs">
                    <input id="input" type="text" value={searchValue} onChange={(e)=>handleChange(e)} placeholder="search products"/>
                    <select id="categories" value={categoryValue} onChange={(e)=>handleOptChange(e)}>
                        <option value="Choose" >Choose from Categories</option>
                        {filteredCategories.map((i)=>{
                            return(<option key={i} value={i} >{i}</option>);
                        })}
                    </select>
                    <select id="pricerange" value={priceValue} onChange={(e)=>handleOptChange2(e)}>
                        <option value="Choose">Choose a Price Range</option>
                        <option value="100">10$ - 100$</option>
                        <option value="800">100$ - 800$</option>
                    </select>
                </div>
                <div className="allproducts">
                
                   {products.filter((pro)=>{
                        if(searchValue=="" && categoryValue=="Choose" && priceValue=="Choose" )
                        return pro;
                        else if((pro.title.toLowerCase().indexOf(searchValue)>-1) && ( categoryValue=="Choose" || (pro.category == categoryValue)) && ( priceValue=="Choose" || (pro.price < priceValue && pro.price > limit) ) )
                        return pro;
                    }).map((pro)=>{
                        return(
                        <Product key={pro.id} id={pro.id} category={pro.category} title={pro.title} image={pro.image} price={pro.price} description={pro.description} />);
                    })}
                </div>          
            </div>
        </div>
        </>
    );
}