import React , {useEffect, useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addwishlist, deletewishlist ,addtocart, removefromcart } from '../redux/actions';

export default function UseFunction(props)
{
    var cart = useSelector(state => state.dataOne.cart);
    const wishlist = useSelector(state => state.dataOne.wishList);
    const dispatch = useDispatch();
        const [num , setNum] = useState(0);
        const [like , setLike] = useState(true);
        const size=["XXL","XL","L","M"];
        const colors=["black","red","#C4C4C4"];
        const [choosedSizes , setChoosedSizes] = useState([]);
        const [choosedColors , setChoosedColors] = useState([]);
        let increase = ()=>
        {
            setNum(num + 1);
        }
        let decrease = ()=>
        {
            if(num!==0)
            setNum(num - 1);
        }
        let addWishList = (i)=>
        {
            if(!like)
            {
                let removedIndex = wishlist.findIndex(item => item.id === props.id);
                wishlist.splice(removedIndex,1);
                dispatch(deletewishlist(wishlist));
                setLike(true);
            }
            else if((wishlist.filter(pro => pro.id===props.id).length > 0))
            {
                setLike(false);
            }
            else
            {
                dispatch(addwishlist({id: props.id , title : props.title , num : num , image : props.image , price : props.price , category : props.category , description: props.description}));
                setLike(false);
            }
        }
        let addToCart = ()=>
        {
            if(num == 0 && cart.findIndex(item => item.id == props.id) > -1 )
            {
                let removedCartIndex = cart.findIndex(item => item.id == props.id);
                cart.splice(removedCartIndex,1);
                dispatch(removefromcart(cart));
                console.log(cart);
            }
            if((cart.filter(pro => pro.id===props.id && pro.num === num ).length > 0))
            return;
            if(num !== 0 && cart.findIndex(item => item.id == props.id) > -1)
            {
                let newarr = [...cart];
                let indexA = cart.findIndex(item => item.id == props.id);
                newarr[indexA].num = num
                cart = [...newarr]
                dispatch(removefromcart(cart));
            }
            else if(num !== 0)
            {
                dispatch(addtocart({id: props.id , title : props.title , num : num , image : props.image , price : props.price , category : props.category , description: props.description}));
            }
            
        }
        let addClass = (e) =>
        {
            e.target.classList.toggle('activesize');
            if(choosedSizes.findIndex(item=> item == e.target.innerHTML ) > -1 )
            choosedSizes.splice(choosedSizes.findIndex(item=> item == e.target.innerHTML ) , 1);
            else
            setChoosedSizes([ ...choosedSizes , e.target.innerHTML ]);
            console.log(choosedSizes);
        }

        let addColors = (e) =>
        {
            e.target.classList.toggle('activesize');
            if(choosedColors.findIndex(item=> item == e.target.getAttribute('data-color') ) > -1 )
            choosedColors.splice(choosedColors.findIndex(item=> item == e.target.getAttribute('data-color') ) , 1);
            else
            setChoosedColors([ ...choosedColors , e.target.getAttribute('data-color') ]);
            console.log(choosedColors);
        }

        return { num , setNum , like , setLike , size , choosedSizes , colors , choosedColors , addClass , addColors,  increase , decrease , addWishList , addToCart}
}