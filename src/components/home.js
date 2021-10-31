import React , {useState , useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { categoryvalue , fetchdata } from '../redux/actions';
import Heart from '../icons/Group.svg';
import Men from '../imgs/men.png';
import Women from '../imgs/women.png';
import Accessories from '../imgs/accessories.png';
import Bags from '../imgs/bags.png';
import Shoes from '../imgs/shoes.png';
import Watches from '../imgs/watches.png';
import facebook from '../icons/fb.svg';
import instagram from '../icons/insta.svg';
import twitter from '../icons/tw.svg';
import Product from './product';

export default function Home()
{
    const [trending , setTrending]=useState(true);
    const cart = useSelector(state => state.dataOne.cart);
    const product = useSelector(state => state.dataOne.products);
    const productTwo = useSelector(state => state.dataTwo);
    const dispatch = useDispatch();
    const style = {
        color : "blue",
        fontWeight : "bold"
    }
    const style2 = {
        color : "black",
    }

    return(
        <>
        <div className="homepage">
            <div className="sectionone">
            <div className="content">
                <h1>Explore New Styles</h1>
                <button type="button"><NavLink to="/explore" >Explore</NavLink></button>
            </div>
        </div>
            <div className="categories">
            <div className="spancontainer">
                    <span>Categories</span>
                    
                </div>
                <div className="men">
                    <Link to="/explore" onClick={()=>dispatch(categoryvalue("men's clothing"))}>
                    <img src={Men} alt="categories" />
                    <p>Men</p>
                    </Link>
                </div>
                <div className="women">
                    <Link to="/explore" onClick={()=>dispatch(categoryvalue("women's clothing"))}>
                    <img src={Women} alt="categories" />
                    <p>Women</p>
                    </Link>
                </div>
                <div className="accessories">
                    <Link to="/explore" onClick={()=>dispatch(categoryvalue("jewelery"))}>
                    <img src={Accessories} alt="categories" />
                    <p>Accessories</p>
                    </Link>
                </div>
                <div className="bags">
                    <Link to="/explore" >
                    <img src={Bags} alt="categories" />
                    <p>Bags</p>
                    </Link>
                </div>
                <div className="shoes">
                    <Link to="/explore">
                    <img src={Shoes} alt="categories" />
                    <p>Shoes</p>
                    </Link>
                </div>
                <div className="watches">
                    <Link to="/explore">
                    <img src={Watches} alt="categories" />
                    <p>Watches</p>
                    </Link>
                </div>
            </div>
            <div className="trending">
                <div className="spancontainer">
                    <span style={trending ? style : style2  } onClick={()=> setTrending(true)}>Trending</span>
                    <span style={!trending ? style : style2  } onClick={()=> setTrending(!trending)}>Last In</span>
                </div>
                <div className="products">
                    {trending &&product.map((pro , index)=>{ if(index < 6 ) 
                        return(<Product key={pro.id} id={pro.id} category={pro.category} title={pro.title} image={pro.image} price={pro.price} description={pro.description} />);})}
                    {!trending && productTwo.map((pro , index)=>{ if(index > 5 && index < 11 )   
                        return(<Product key={pro.id} id={pro.id} category={pro.category} title={pro.title} image={pro.image} price={pro.price} description={pro.description} />);})}
                </div>
            </div>
            <div className="footer">
                <div className="footercontainer">
                    <div className="help">
                        <h3>Help and Information</h3>
                        <ul className="footerul">
                            <li>Help</li>
                            <li>Track orders</li>
                            <li>Delivery returns</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h3>About Us</h3>
                        <ul className="footerul">
                            <li>About LE MARCHE</li>
                            <li>Careers</li>
                            <li>Brand responsibility</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>Contact Us</h3>
                        <ul className="footerul">
                            <li>Our contact channels</li>
                            <li>Email us</li>
                            <li><span><img src={facebook} alt="fb"/></span>
                            <span><img src={instagram} alt="insta"/></span>
                            <span><img src={twitter} alt="twitter"/></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    );
}