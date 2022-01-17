import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
// import mightycoder from '../assets/mightycoder.svg'
import logo_main from './sidebar-icon/logo_main.jpeg';
import { SocialIcon } from 'react-social-icons';
import { Nav } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import Darkreader from './Darkreader';


const Sidebar = () => {
    // const handleEmailMe = () => {
    //     window.open("mailto:codesumax@gmail.com")
    // }




    return (
        <div className="sidebar">
            <img src={logo_main} alt="avatar" className="sidebar__avatar" />
            <NavLink to='/' activeClassName="main_title"><div className="sidebar__title">CodⒶcads</div></NavLink>
            <Darkreader />
            <div className="sidebar__item">
                Learn Programming
            </div>

            <Nav className="me-auto d-flex flex-column">
                <NavLink to='/roadmap'>
                    <div className="sidebar_elements">
                        Roadmap
                    </div>
                </NavLink>
                <NavLink to='/practice&learn'>
                    <div className="sidebar_elements">
                        Practice & Learn
                    </div>
                </NavLink >
                <NavLink to='/keypoints'>
                    <div className="sidebar_elements">
                        Key Points
                    </div>
                </NavLink >
                <NavLink to='/about'>
                    <div className="sidebar_elements">
                        About us
                    </div>
                </NavLink >

            </Nav >


            <h3 className="contact-us ">Contact Us</h3>
            <div className="social">
                <SocialIcon url="https://twitter.com/" target="_blank" />
                <SocialIcon url="https://linkedin.com/" target="_blank" />
                <SocialIcon url="https://telegram.org/" target="_blank" />
                <SocialIcon url="https://instagram.com/" target="_blank" />
            </div>
            {/* <div className='mt-3  border'><a href="#" style={{ fontSize: '1rem' }}> Source Code <FaGithub /> </a></div> */}


        </div >
    )
}

export default Sidebar;