import React from 'react'
import Navbar from './components/Navbar'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <Navbar curPage='contact' />
            <div className='contact'>
                <div>
                    <h1 className='title-contact'>We are excited to work with you!</h1>
                    <p className='contact-content'>
                        Please fill in the form with the appropriate details. We would get back in touch within 3 - 5 working days.
                        Talk to you soon!
                    </p>
                </div>
                <form>
                    <div className='group1'>

                        <div className='part1'>
                            <label>First name</label>
                            <input type='text' id='fname' name='fname' />
                            <label>Last name</label>
                            <input type='text' id='lname' name='lname' />
                            <label>Email</label>
                            <input type='email' id='email' name='email' />
                            <label>Subject</label>
                            <input type='text' id='subject' name='subject' />
                        </div>
                    </div>
                    <div className='group2'>
                        <label className='message'>Message</label>
                        <div>
                            <textarea class='message-text' type='text' id='subject' name='subject' />
                            <button className='cta'>Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
