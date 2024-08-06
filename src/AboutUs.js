import React from 'react'
import Navbar from './components/Navbar'
import './AboutUs.css'
import { ReactComponent as Vision } from './pics/vision.svg'
import Logo from './pics/logo.png'

export default function AboutUs() {
    return (
        <>
            <Navbar curPage='about' />
            <div className='about'>
                <h1 className='title about-title'>About Us</h1>

                <div className='about-part'>
                    <h2 className='about-subtitle'>Vision & Mission</h2>

                    <div className='vision'>
                        <div>
                            <p>Here at Aspire Education, we aspire to inspire future generations through the means of education. More specifically, through unique interactive educational experiences.</p>
                            <p>
                                Aspire Education will continue researching and inventing new ways to deliver education in the most immersive, interactive, and inclusive manner.
                            </p>
                        </div>
                        <Vision />
                    </div>
                </div>

                <div className='about-part right'>
                    <h2 className='about-subtitle'>Name</h2>
                    <div className='name'>
                        <span className='aspire-text'>ASPIRE</span>
                        <div>
                            <p>The name of ASPIRE stems from our aspirations for the future.</p>
                            <p>

                                Initially, we discussed how we wanted to use this project as an opportunity to develop our skills. We collectively have the same goal of working in the computing industry, though in different fields.
                                One thing we have in common: we all aspire to be the best versions of ourselves.
                            </p>
                            <p>
                                Aspire is also a perfect name for what we do as a company. We strive to inspire students and the future generation, to aspire to reach their own goals and dreams, progressing the human race further.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='about-part'>
                    <h2 className='logo-title'>Logo</h2>
                    <div className='logo-content'>

                        <img src={Logo} alt='logo' className='logo' />
                        <div>

                            <p>Our logo is a growing leaf shaped like a lightbulb. The leaf signifies growth; the growth of our clients, the growth of ourselves, and the growth of the human race as a whole.
                            </p>
                            <p>
                                The lightbulb is one of the most important inventions in human history. Lightbulbs accelerate the progression of humankind exponentially, just how we want our clients and us to continue making progress.
                            </p>
                            <p>
                                It also signifies the “A-ha!” moment. The moment when we learned something new. The moment when we understood something that we did not understand before. This “A-ha!” moment is something that we strive to give to our students and clients through the means of education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}