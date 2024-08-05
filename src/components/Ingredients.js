import React from 'react'
import './Ingredients.css'
import { ReactComponent as Immersive } from '../pics/immersive.svg'
import { ReactComponent as Interactive } from '../pics/interactive.svg'
import { ReactComponent as Inclusive } from '../pics/inclusive.svg'

export default function Ingredients() {
    return (
        <div className='ingredients'>
            <div className="row">
                <h2 className='goal-title'>Our Main Ingredients</h2>
                <p>All our projects must be all of these below</p>
            </div>
            <div className='col-3'>
                <div className='card'>
                    <Immersive />
                    <div className='card-content'>
                        <h3 className='card-title'>Immersive</h3>
                        <hr />
                        <p>Students need to feel like they are transported somewhere else for learning - not “another classroom”</p>
                    </div>
                </div>
                <div className='card'>
                    <Interactive />
                    <div className='card-content'>
                        <h3 className='card-title'>Interactive</h3>
                        <hr />
                        <p>Students need to feel like they are transported somewhere else for learning - not “another classroom”</p>
                    </div>
                </div>
                <div className='card'>
                    <Inclusive />
                    <div className='card-content'>
                        <h3 className='card-title'>Inclusive</h3>
                        <hr />
                        <p>Students need to feel like they are transported somewhere else for learning - not “another classroom”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
