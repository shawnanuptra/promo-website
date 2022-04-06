import React from 'react'
import hero from '../pics/hero.jpg';
import './Hero.css'

export default function Hero() {

    return (
        <>
            <img src={hero} className="heroImg" />

            <div className='hero'>
                <h1 className='title'>ASPIRE EDUCATION</h1>
                <p className='subtitle'>Inspiring future generations through immersive, interactive, and inclusive education</p>
                <button className='cta'>About Us &#8594;</button>
            </div>
        </>
    )
}
