import React from 'react';
import './header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className='header'>
            <Link to ='/'>
            <img
                className='header__icon'
                src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="logo"
            />
            </Link>
            <div className='header__center'>
                <input type='text' />
                <SearchRoundedIcon />
            </div>
            <div className='header__right'>
                <div className='header__b'>
                    <Button varient='outlined'>Become a Seller</Button>
                </div>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    );
}
export default Header;