import React , {useEffect, useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addtocart } from '../redux/actions';
import Heart from '../icons/Group.svg'
import UseFunction from './useFunction';

export default function Content(props)
    {
        const { num , setNum , like , setLike , size , colors , addClass, increase , decrease , addWishList , addToCart } = UseFunction(props);
        const dispatch = useDispatch();
        
        useEffect(()=>
        {
            if(props.category !== "men's clothing" && props.category !== "women's clothing")
            {
                document.querySelector('.procolors').classList.add('disnone');
                document.querySelector('.prosizes').classList.add('disnone');
            }
            let divEC = document.querySelectorAll('.colors div');
            let spanEC = document.querySelectorAll('.colors div span');
            for(let i = 0 ; i< spanEC.length;i++)
            {
                spanEC[i].addEventListener("click",function()
                {
                    divEC[i].classList.toggle('border');
                })
            };
            let divES = document.querySelectorAll('.sizes div');
            let spanES = document.querySelectorAll('.sizes div span');
            for(let i = 0 ; i< spanES.length;i++)
            {
                spanES[i].addEventListener("click",function()
                {
                    divES[i].classList.toggle('border');
                })
            }
        },[]);
        
        return(
           <div className="specifiedproduct">
               <div className="specifiedcontent">
                   <div className="imagecontainer">
                      <div className="row1">
                        <img src={props.img} alt="image"/>
                        <img src={props.img} alt="image"/>
                        <img src={props.img} alt="image"/>
                      </div>
                      <div className="row2">
                        <img src={props.img} alt="image"/>
                      </div>
                   </div>
                   <div className="textcontainer">
                       <div className="name">
                            <h3>{props.title}</h3>
                            <span  onClick={()=>addWishList(props.id-1)} >{like ? <img src={Heart} alt="Like" /> : "liked"}</span>
                       </div>
                       <div className="price">
                            <h6>{props.price} $</h6>
                            <h2>{props.price} $</h2>
                       </div>
                       <p>
                        description of product and each details
                        in it to deliver best experience
                       </p>
                       <div className="procolors">
                           <h4>Color</h4>
                           <div className="colors">
                           {colors.map((c,index)=><div><span key={c} style={{backgroundColor: `${c}`}} className={c} onClick={(e)=>addClass(e)}> </span> </div>)}
                           </div>
                       </div>
                       <div className="prosizes">
                           <h4>Size</h4>
                           <div className="sizes">
                           {size.map((s,index)=><div><span key={s} onClick={(e)=>addClass(e)} > {s} </span> </div>)}
                               {/* <div><span>XXL</span></div>
                               <div><span>XL</span></div>
                               <div><span>L</span></div>
                               <div><span>M</span></div> */}
                           </div>
                       </div>
                       <div className="pronumber">
                            <div className="controlnumber">
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
                            <button type="button" onClick={addToCart}>Add to cart</button>
                        </div>
                   </div>
               </div>
           </div>
        );
    }
