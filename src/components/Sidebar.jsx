import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
// import mightycoder from '../assets/mightycoder.svg'
import logo_main from './sidebar-icon/logo_main.jpeg';
import { SocialIcon } from 'react-social-icons';



const Sidebar = () => {
    // const handleEmailMe = () => {
    //     window.open("mailto:codesumax@gmail.com")
    // }




    return (
        <div className="sidebar">
            <img src={logo_main} alt="avatar" className="sidebar__avatar" />
            <NavLink to='/' activeClassName="main_title"><div className="sidebar__title">CodⒶcads</div></NavLink>
            <div className="sidebar__item">
                Learn Programming
            </div>
            <NavLink to='/roadmap'><div className="sidebar_elements">Roadmap</div></NavLink>
            <NavLink to='/practice&learn'><div className="sidebar_elements">Practice & Learn</div></NavLink>
            <NavLink to='/keypoints'><div className="sidebar_elements">Key Points</div></NavLink>
            <NavLink to='/about'><div className="sidebar_elements">About us</div></NavLink>



            <h3 className="contact-us">Contact Us</h3>
            <div className="social">
                <SocialIcon url="https://twitter.com/" target="_blank" />
                <SocialIcon url="https://linkedin.com/" target="_blank" />
                <SocialIcon url="https://telegram.org/" target="_blank" />
                <SocialIcon url="https://instagram.com/" target="_blank" />
            </div>

            {/*<div className="sidebar_elements">Help</div>*/}
            {/* <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div> */}
            {/* </a>
            <figure className="sidebar__social-icons my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href=""><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Kolkata, India</div>
                <div className="sidebar__item">code.sumax@gmail.com</div>
                <div className="sidebar__item">7835323423/9876543510</div>
            </div>
            {/* <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div> */}

        </div>
    )
}

export default Sidebar;