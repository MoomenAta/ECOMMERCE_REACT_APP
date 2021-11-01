import React, { useState ,useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import Usefunction from './useFunction';
import { addwishlist, deletewishlist ,addtocart, removefromcart } from '../redux/actions';

export default function Cart(props)
{
    const { num , increase , decrease , addToCart} = Usefunction(props);
    let loggedIn = useSelector(state => state.dataOne.loggedIn);
    let user = useSelector(state => state.dataOne.userData);
    console.log(user);
    let cart = useSelector(state => state.dataOne.cart);
    const dispatch = useDispatch();
    const [total , setTotal] = useState(0);
    const [charge , setCharge] = useState(5);
    const [discount , setDiscount] = useState(5);
    const [delivery , setDelivery] = useState(10);
    useEffect(()=>
    {
        for(let i = 0 ; i < cart.length ; i++ )
        {
            if(cart[i].num === 0)
            {
                cart.splice(i,1);
                dispatch(removefromcart(cart));
                console.log(cart)
            }
        }
        
    },[cart]);
    useEffect(()=>
    {
        var x = 0 ;
        for(let i = 0 ; i < cart.length ; i++ )
        {
            x += cart[i].price * cart[i].num ;
        }
        var y = x - ( x * discount/100) - charge - delivery ;  
        setTotal(y.toFixed(2));
        if(cart.length===0)
        {
            setTotal('--');
            setCharge('--');
            setDiscount('--');
            setDelivery('--');
        }
    },[cart]);
    let handleincrease = (index)=>
    {
        let newarr = [...cart];
        newarr[index].num = newarr[index].num + 1;
        cart = [...newarr];
        dispatch(removefromcart(cart));
        console.log(newarr[index].num);
    }
    let handledecrease = (index)=>
    {
        let newarr = [...cart];
        if(newarr[index].num !== 0)
        {
            newarr[index].num = newarr[index].num - 1;
            cart = [...newarr];
            dispatch(removefromcart(cart)); 
        }
        else if(newarr[index].num === 0)
        {
            cart.splice(index,1);
            dispatch(removefromcart(cart));
            console.log(cart)
        }
    }
    let deleteAll = (i) =>
    {
        cart.splice(i,1);
        dispatch(removefromcart(cart));
        console.log(cart)
    }
    let userDetails = ()=>
    {
        return(
            <div className="userDetailsContainer">
                <span>Your information</span>
                <div className="userDetails">
                    <div className="userName">
                        <span>Name</span>
                        <h3>{user[0].userrname}</h3>
                    </div>
                    <div className="userPhone">
                        <span>Phone Number</span>
                        <select>
                            <option>+201010101010</option>
                        </select>
                    </div>
                    <div className="userAddress">
                        <span>Address</span>
                        <select>
                            <option>...Cairo,Egypt</option>
                        </select>
                    </div>
                    <div className="userPaymentMethod">
                        <span>Pamyent Method</span>
                        <select>
                            <option>Visa Card</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="cartDiv">
            <div className="cartContent">
                <span>{ cart.length > 0 ? " All orders " : <h1>"There is no items here"</h1>}</span>
                <div className="allOrders">
                    {cart.map( (item , index) =>{
                        return(
                        <div key={item.id} className="cartItem">
                            <div className="imgContainer">
                                <img src={item.image} alt="image" />
                            </div>
                            <div className="itemDetails">
                                <span>{item.title}</span>
                                <span>Number of items:         {item.num}</span>
                                <span>Total Price:          {item.num * item.price}$</span>
                            </div>
                            <div className="itemButtons">
                                <button type="button" onClick={()=> handleincrease(index)}>+1 </button>
                                <button type="button" onClick={()=> handledecrease(index)}>-1</button>
                                <button type="button" onClick={()=> deleteAll(index)}>Remove all</button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="cartTotal">
                <span>Total Payment</span>
                <div className="paymentDetails">
                    <div className="paymentOffers">
                        <div className="discount">
                            <span>Discount</span>
                            <span>{cart.length>0 ? `${discount} % off` : '--'}</span>
                        </div>
                        <div className="charge">
                            <span>Charge</span>
                            <span>{charge}$</span>
                        </div>
                        <div className="delivery">
                            <span>Delivery</span>
                            <span>{delivery}$</span>
                        </div>
                    </div>
                    <div className="allTotal">
                        <span>Total : </span>
                        <h2>{total} $</h2>
                    </div>
                        {loggedIn? userDetails() : null }
                        <button id="orderButton" type="button">Order Now</button>
                </div>
            </div>
        </div>
    );
}