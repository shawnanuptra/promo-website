import React from 'react'
import './Goal.css'
import logo from '../pics/Goal.png'

export default function Goal() {
    return (
        <>
            <h2 className='goal-title'>Our Goal</h2>
            <div className='content'>
                <div className='text'>
                    <p>We aspire to provide a unique educational experience with the help of new technologies such as the Igloo.</p>
                    <p>Learning is much more than passively reading textbooks, or listening to a teacher explain. We want students to participate in active learning.</p>
                    <p>Hence, we are continuously discovering new and exciting ways for students to learn.</p>
                </div>
                <img src={logo} className='logo' />
            </div>
        </>
    )
}
