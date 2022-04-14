import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll'

const Footer = (props) => {

    const scroll = Scroll.animateScroll;

    const scrollUp = function () {
        scroll.scrollTo('App', { duration: 0 });
    }

    return (
        <footer>
            <div className='footer-top'></div>
            <div className='footer-cols content-center' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                <ul>
                    <h5>Contact us:</h5>
                    <li><a href="tel:+1-847-497-5171">Phone: (847)-497-5171</a></li>
                    <li><a href="mailto:info@netintegrations.net" target="blank">E-mail: info@netintegrations.net</a></li>
                    <li><NavLink exact to='/contact-us' className='underline' onClick={scrollUp}>Fill out the form </NavLink></li>
                </ul>

                <ul>
                    <h5>Help and support:</h5>

                    <li><NavLink exact to='/it-outsourcing-services' onClick={scrollUp}>IT outsourcing Services</NavLink></li>
                    <li><NavLink exact to='/network-support' onClick={scrollUp}>Network support</NavLink></li>
                    <li><NavLink exact to='/remote-support' onClick={scrollUp}>Remote support</NavLink></li>
                    <li><NavLink exact to='/apple-computer-support' onClick={scrollUp}>Apple computer support</NavLink></li>

                    <li><NavLink exact to='/about-us' className='mrg-top underline' onClick={scrollUp}>About Us</NavLink></li>
                </ul>

                <ul>
                    <h5>Preferred Clients:</h5>
                    <li>1-day service response</li>
                    <li>4-hour emergency response</li>
                    <li>Discounted rates</li>
                    <li>Fast remote support</li>
                    <li>Scheduled Maintenance</li>
                    <li>Applications support</li>
                    <li>Assigned engineers</li>
                    <li>Free phone support</li>
                    <li><NavLink exact to='/preferred-clients-options' className='mrg-top underline' onClick={scrollUp}>Find out more about preferred clients options</NavLink></li>
                </ul>

            </div>

            <div className="author"><a href='https://www.instagram.com/whyiamthere/' target='_blank'>By: @whyiamthere</a></div>

        </footer>
    )
}

export default Footer
