import React , {useEffect, useRef, useState} from "react";
import Heart from '../icons/Group.svg';
import Search from '../icons/eva_search-fill.svg';
import Cart from '../icons/clarity_shopping-cart-line.svg';
import Person from '../icons/akar-icons_person.svg';
import { BrowserRouter as Router , Route , Switch , NavLink, Link} from 'react-router-dom';
import Modal from "./modal";
import { useSelector , useDispatch } from "react-redux";
import { logout, searchvalue } from "../redux/actions";
export default function Navbar()
{
    const searchValue=useSelector(state=>state.dataOne.searchValue);
    const loggedIn=useSelector(state=>state.dataOne.loggedIn);
    const userdata=useSelector(state=>state.dataOne.userData);
    const All=useSelector(state=>state.dataOne);
    const [resNav , setResNav] = useState(false);
    const [showModal , setShowModal] = useState(false);
    let modalRef = useRef();
    const dispatch=useDispatch();
    console.log(loggedIn);
    console.log(resNav);
    console.log(userdata)
    let logouting = ()=>
    {
        dispatch(logout());
    }
    useEffect(()=>
    {
        let handler = (e)=>
        {
            if(!(modalRef.current.contains(e.target)))
            {
                setShowModal(false)
            }
        } 
        document.body.addEventListener("mousedown",handler);
        var ele = document.getElementById("modal").classList;
        if(showModal)
        {
            ele.remove('disnone');
            ele.add('disblock');
        }
        else 
        {
            ele.remove('disblock');
            ele.add('disnone');
        }

        return ()=> document.removeEventListener("mousedown",handler);
    },[showModal]);
    let setActive = ()=>
    {
        var ele = document.getElementById("modal").classList;
        if (ele.contains('disnone'))
        {
            setShowModal(true)
        }
        else 
        {
            setShowModal(false)
        }
    }
    [...document.getElementsByTagName('a')].forEach(element => {
        element.addEventListener("click",()=>
        {
            setResNav(!resNav);
        })
    });
    
    return (
        <>
            <header id="header">
            <div className="headerContainer">
            <span>Le Marche</span>
            <div id="hidden" onClick={()=>setResNav(!resNav)}><span></span><span></span><span></span></div>
            {/* <div className="navbuttons"> */}
            <nav className={resNav? "dflex" :""}>
                <NavLink exact activeClassName="active" to="/" >Home</NavLink>
                <NavLink to="/explore" >Explore</NavLink>
                <NavLink to="/offers" >Offers</NavLink>
                <NavLink to="/lastin" >Last In</NavLink>
            </nav>
            <div className={resNav? "icons dflex" :"icons"}>
                <span id="searchspan" className={ showModal ? "activespan" : null} onClick={setActive}>
                    <img src={Search} alt="Group"/>
                </span>
                <Modal>
                    <div ref={modalRef} className="modalcontainer">
                        <div className="searchContent">
                            <input id="modalSearchValue" value={searchValue} onChange={(e)=>dispatch(searchvalue(e.target.value))} type="text" /> 
                                <span onClick={setActive}><Link to="/explore"><img src={Search} alt="Group"/></Link></span> 
                            
                        </div>
                        <div className="recent">
                            <h6>Your recent Seraches</h6>
                            <span>Nothing here yet...</span>
                        </div>
                        <div className="popular">
                            <h6>Popular Seraches</h6>
                            <span>Polo t-shirt</span> <span>Woman Jacket</span> <span>Watches</span>
                        </div>
                    </div>
                </Modal>
                <NavLink to="/wishlist">
                    <img src={Heart} alt="Group"/>
                </NavLink>
                <NavLink to="/cart">
                    <img src={Cart} alt="Group"/>
                </NavLink>
                <div className="popUp">
                { loggedIn ? <span id="welcome">Welcome</span> :
                <button type="button" >
                <Link id="login" to="/login"><img src={Person} alt="Group"/> <span>Join us</span></Link>
                </button> }
                {loggedIn ? <div className="logOutpopup">
                    <span onClick={logouting} >
                        logout
                    </span>
                </div> : null}
            </div>
            </div>
            {/* </div> */}
            </div>
            </header>
      
      
        </>
    );

    
}