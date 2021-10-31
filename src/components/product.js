import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Heart from '../icons/Group.svg';
import UseFunction from './useFunction';

export default function Product(props)
{
    const { num , size , choosedSizes , colors , choosedColors , addClass , addColors, setNum , like , setLike , increase , decrease , addWishList , addToCart } = UseFunction(props);
    const cart = useSelector(state => state.dataOne.cart);
    const wishlist = useSelector(state => state.dataOne.wishList);
    const dispatch = useDispatch();

    useEffect(()=>
    {
        if((wishlist.filter(pro => pro.id==props.id).length > 0))
        {
            setLike(false);
        }
    },[wishlist]);
    useEffect(()=>
    {
        if((cart.filter(pro => pro.id==props.id).length > 0))
        {
            let index = cart.findIndex(item=>item.id == props.id);
            let number = cart[index].num
            setNum(number);
        }
    },[cart]);
   
    return(
        <div  key={props.id} className="productdetails">
            <NavLink to={`/explore/${props.id}`}><img className="productImage" src={props.image} alt="product" /> </NavLink>
            <span className="heart" onClick={()=>addWishList(props.id-1)}>{like ? <img src={Heart} alt="Like" /> : "liked"} </span>
            <div className="nameprice">
                <h3>{props.title}</h3>
                <span>{`${props.price}$`}</span>
            </div>
            <p>{props.description.length < 80 ? props.description : props.description.slice(0,60)}</p>
            <div className={(props.category !== "men's clothing" && props.category !== "women's clothing" ) ? "disnone" :"sizecolors"}>
                <div className="size">
                    <span>Size</span>
                    {size.map((s,index)=><span key={s} onClick={(e)=>addClass(e)} className="sizes">{s}</span>)}
                </div>
                <div className="color">
                    <span>Colors</span>
                    {colors.map((s,index)=><span key={s} className="colors" data-color={s} onClick={(e)=>addColors(e)} style={{backgroundColor: `${s}`}}></span>)}
                </div>
            </div>
            <div className="detailsfooter">
                    <div className="quantity">
                        <span className="minus" onClick={decrease}>
                            -
                        </span>
                        <span className="number">
                            {num}
                        </span>

                        <span className="plus" onClick={increase}>
                            +
                        </span>
                    </div>
                   <button onClick={addToCart} type="button">Add to cart</button>
                </div>
        </div>
    );
}