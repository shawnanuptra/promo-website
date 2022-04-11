import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as NavbarLogo } from '../pics/navbar-logo.svg'
import './Navbar.css';

export default function Navbar(props) {

    const curPage = props.curPage;
    let curPageStyle = (curPage, navItem) => {
        if (curPage === navItem) {
            return 'navItem navItemSelected'
        } else {
            return 'navItem navItemNormal'
        }
    }
    return (
        <nav className='navStyle'>
            <div className='innerNavStyle'>
                <NavbarLogo />
                <div className='navItemGroup'>
                    <Link to='/' className={curPageStyle(curPage, 'home')} >Home</Link>
                    <Link to='/about' className={curPageStyle(curPage, 'about')}>About Us</Link>
                    <Link to='/contact' className={curPageStyle(curPage, 'contact')}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}
