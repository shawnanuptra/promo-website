import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../pics/hero.jpg';
import './Hero.css'

export default function Hero() {

    return (
        <div className='wrapper'>
            <img src={hero} className="heroImg" alt='Leaves' />

            <div className='hero'>
                <h1 className='title'>ASPIRE EDUCATION</h1>
                <p className='subtitle'>Inspiring future generations through immersive, interactive, and inclusive education</p>
                <Link to='/about' className='cta'>About Us &#8594;</Link>
            </div>
        </div>
    )
}
