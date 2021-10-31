import React , {useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux';
import { fetchdata } from '../redux/actions';

import Product from './product';
export default function Lastin()
{
    const productTwo = useSelector(state => state.dataTwo);
    const dispatch = useDispatch();
    /* useEffect(
        ()=>
        {
            dispatch(fetchdata());
        }
    ,[]); */
    return(
        <div className="lastinContainer">
            <div className="lastinItems">
            {productTwo.map((pro , index)=>{ if(index > 5 && index < 11 )   
                return(<Product key={pro.id} id={pro.id} category={pro.category} title={pro.title} image={pro.image} price={pro.price} description={pro.description} />);})}
            </div>
        </div>
    );
}