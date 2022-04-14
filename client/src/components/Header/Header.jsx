import React from 'react'
import NavBtn from '../Nav/NavBtn';
import { NavLink } from 'react-router-dom';
import logo from './../../img/logo.png';

export const Header = () => {
    return (
        <header className='header content-center'>
            <NavBtn></NavBtn>
            <NavLink exact to='/' className='logo'><img src={logo} alt="logo" /></NavLink>
        </header>
    )
};

export default Header;
