import React from 'react'
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
                    <span className={curPageStyle(curPage, 'home')} >Home</span>
                    <span className={curPageStyle(curPage, 'about')}>About Us</span>
                    <span className={curPageStyle(curPage, 'contact')}>Contact</span>
                </div>
            </div>
        </nav>
    )
}
