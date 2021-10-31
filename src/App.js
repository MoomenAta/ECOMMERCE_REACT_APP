import React , {useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router , Route , Switch , NavLink} from 'react-router-dom';
import { fetchdata } from './redux/actions';
import { useDispatch } from 'react-redux';
import Home from './components/home';
import Explore from './components/explore';
import Navbar from './components/navbar';
import ProductId from './components/ProductId';
import Wishlist from './components/wishlist';
import Cart from './components/cart';
import Lastin from './components/lastin';
import Offers from './components/offers';
import Login from './components/login';
function App() {
  const dispatch = useDispatch();
    useEffect(
        ()=>
        {
            dispatch(fetchdata());
        }
    ,[]);
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
          <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore}/>
            <Route  path="/explore/:id" component={ProductId} />
            <Route  path="/wishlist" component={Wishlist} />
            <Route exact path="/offers" component={Offers}/>
            <Route exact path="/lastin" component={Lastin}/> 
            <Route exact path="/cart" component={Cart}/> 
          </>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
