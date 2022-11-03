import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './Header.css';
import { useStateValue } from "./StateProvider";

function Header() {
    const [ {basket, user} , dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
    <div className='header'>
        <Link to="/">
        <img className="header_logo" src='images.png'/>
        </Link>
    
        <div className="header_search">
            <input className='header_searchInput' type='text'/>
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className='header_nav'>
            <Link to={!user && '/login'}>
                <div onClock={handleAuthentication} className="header_option"> 
                    <span className='header_optionLineOne'>Hello {user?.email}</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className="header_option">
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>Orders</span>
            </div>
            <div className="header_option">
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>

            <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingCartIcon/>
                <span className="header_optionLineTwo
                header_basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>

    </div>
    )
}

export default Header;
